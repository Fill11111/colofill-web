#!/bin/bash
#
# One-shot installer for the colofill weekly content pipeline on macOS.
# Run it once, from inside the repo, on the Mac that will do the work:
#
#     cd /path/to/colofill-web
#     bash automation/install-macos.sh
#
# It:
#   1. installs the permission allowlist to .claude/settings.local.json
#   2. writes a launchd job that runs the pipeline every Saturday 09:00 (local time)
#   3. loads the job
#   4. runs a preflight check and prints anything you still need to do by hand
#
set -euo pipefail

SCRIPT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
REPO_DIR="$(cd "$SCRIPT_DIR/.." && pwd)"
LABEL="com.colofill.pipeline"
PLIST="$HOME/Library/LaunchAgents/$LABEL.plist"
RUNNER="$REPO_DIR/automation/run-pipeline.sh"

echo "==> colofill pipeline installer"
echo "    repo:   $REPO_DIR"
echo "    runner: $RUNNER"
echo

# 1. permission allowlist -----------------------------------------------------
mkdir -p "$REPO_DIR/.claude"
DEST="$REPO_DIR/.claude/settings.local.json"
if [ -f "$DEST" ]; then
  echo "==> .claude/settings.local.json already exists — backing up to settings.local.json.bak"
  cp "$DEST" "$DEST.bak"
fi
cp "$SCRIPT_DIR/settings.local.json" "$DEST"
echo "==> wrote $DEST"

# 2. make the runner executable ----------------------------------------------
chmod +x "$RUNNER"

# 3. launchd job --------------------------------------------------------------
mkdir -p "$HOME/Library/LaunchAgents"
cat >"$PLIST" <<PLIST_EOF
<?xml version="1.0" encoding="UTF-8"?>
<!DOCTYPE plist PUBLIC "-//Apple//DTD PLIST 1.0//EN" "http://www.apple.com/DTDs/PropertyList-1.0.dtd">
<plist version="1.0">
<dict>
    <key>Label</key>
    <string>$LABEL</string>
    <key>ProgramArguments</key>
    <array>
        <string>/bin/bash</string>
        <string>$RUNNER</string>
    </array>
    <key>StartCalendarInterval</key>
    <dict>
        <key>Weekday</key>
        <integer>6</integer>
        <key>Hour</key>
        <integer>9</integer>
        <key>Minute</key>
        <integer>0</integer>
    </dict>
    <key>StandardOutPath</key>
    <string>$REPO_DIR/automation/logs/launchd.out.log</string>
    <key>StandardErrorPath</key>
    <string>$REPO_DIR/automation/logs/launchd.err.log</string>
    <key>RunAtLoad</key>
    <false/>
</dict>
</plist>
PLIST_EOF
echo "==> wrote $PLIST (Saturday 09:00 local time)"

# reload
launchctl unload "$PLIST" 2>/dev/null || true
launchctl load "$PLIST"
echo "==> launchd job loaded"
echo

# 4. preflight ----------------------------------------------------------------
echo "==> preflight check"
if command -v claude >/dev/null 2>&1; then
  echo "    [ok]   claude CLI found: $(command -v claude)"
else
  echo "    [MISS] claude CLI not on PATH — install Claude Code and re-run, or edit PATH in run-pipeline.sh"
fi
if [ -f "$REPO_DIR/.claude/context/channel-profile.md" ]; then
  echo "    [ok]   channel-profile.md present"
else
  echo "    [MISS] .claude/context/channel-profile.md missing — pipeline will stop after scout"
fi
echo
echo "==> DONE. Three things only you can do:"
echo "    1. Log Chrome in to Instagram (@colofill) and keep it logged in — scout drives your real browser."
echo "    2. Make sure the Notion connector is available to your local Claude Code (needed by qc-lead)."
echo "       If it isn't, the pipeline saves finished scripts to .claude/content/pending-notion/ instead of failing."
echo "    3. Keep this Mac awake at Saturday 09:00. Optional, schedule an auto-wake:"
echo "         sudo pmset repeat wake MTWRFSU 08:55:00"
echo
echo "    Test it right now without waiting for Saturday:"
echo "         bash \"$RUNNER\"   # then read automation/logs/run-*.log"
