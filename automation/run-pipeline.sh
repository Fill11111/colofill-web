#!/bin/bash
#
# Runs the colofill content pipeline (scout -> fit-checker -> analyzer ->
# writer -> qc-lead) via the local Claude Code CLI. Intended to be launched
# on a schedule by launchd (see install-macos.sh), but you can also run it
# by hand any time: bash automation/run-pipeline.sh
#
set -uo pipefail

# --- resolve paths (works regardless of where it's invoked from) -----------
SCRIPT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
REPO_DIR="$(cd "$SCRIPT_DIR/.." && pwd)"
BRANCH="claude/agent-team-deployment-3u4wml"
LOG_DIR="$REPO_DIR/automation/logs"
PROMPT_FILE="$SCRIPT_DIR/pipeline-prompt.txt"

mkdir -p "$LOG_DIR"
STAMP="$(date +%Y-%m-%d_%H%M%S)"
LOG_FILE="$LOG_DIR/run-$STAMP.log"

exec >>"$LOG_FILE" 2>&1
echo "==== pipeline run started: $(date) ===="

cd "$REPO_DIR" || { echo "FATAL: cannot cd to $REPO_DIR"; exit 1; }

# --- make sure `claude` is on PATH (launchd has a minimal PATH) -------------
export PATH="$HOME/.local/bin:/opt/homebrew/bin:/usr/local/bin:/usr/bin:/bin:$PATH"
if ! command -v claude >/dev/null 2>&1; then
  echo "FATAL: 'claude' CLI not found on PATH. Install Claude Code, then edit PATH in this script."
  exit 1
fi

# --- pull latest agents / channel profile ----------------------------------
echo "---- git pull $BRANCH ----"
git fetch origin "$BRANCH" && git checkout "$BRANCH" && git pull origin "$BRANCH"

# --- run the pipeline headless ---------------------------------------------
# The permission allowlist in .claude/settings.local.json lets the run proceed
# unattended without approval prompts.
echo "---- claude -p (pipeline) ----"
claude -p "$(cat "$PROMPT_FILE")"
STATUS=$?

echo "==== pipeline run finished: $(date) (exit $STATUS) ===="
exit $STATUS
