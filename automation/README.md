# colofill content pipeline — local automation

Runs the 5-agent content pipeline (**scout → fit-checker → analyzer → writer → qc-lead**)
automatically every **Saturday 09:00** on your Mac.

## Why local (not cloud)

`scout` drives your real Chrome to read Instagram Reels + metrics, which only exists
on your machine. A cloud Routine can't reach that browser, and the cloud Routine that
was set up also lacked the `Agent`/`Skill` tools needed to run the subagents at all.
So the whole pipeline runs locally in one session, where every piece has what it needs.

## Install (once)

On the Mac that will do the work:

```bash
git clone https://github.com/Fill11111/colofill-web.git
cd colofill-web
git checkout claude/agent-team-deployment-3u4wml
bash automation/install-macos.sh
```

The installer sets up the permission allowlist, writes + loads the launchd job, and
prints a preflight check.

## The 3 manual prerequisites

The installer can't do these for you:

1. **Chrome logged in to Instagram** (`@colofill`) and kept logged in — `scout` uses it.
2. **Notion connector available to your local Claude Code** — `qc-lead` pushes approved
   scripts there. If Notion isn't reachable, the pipeline writes finished scripts to
   `.claude/content/pending-notion/` instead of throwing the work away.
3. **Mac awake at Saturday 09:00.** launchd will not wake a sleeping Mac on its own.
   Optional auto-wake a few minutes early:
   ```bash
   sudo pmset repeat wake MTWRFSU 08:55:00
   ```

## Test without waiting for Saturday

```bash
bash automation/run-pipeline.sh
cat automation/logs/run-*.log
```

## Change the schedule

Edit `StartCalendarInterval` in `~/Library/LaunchAgents/com.colofill.pipeline.plist`
(`Weekday` 0/7=Sun … 6=Sat), then:

```bash
launchctl unload ~/Library/LaunchAgents/com.colofill.pipeline.plist
launchctl load   ~/Library/LaunchAgents/com.colofill.pipeline.plist
```

## Uninstall

```bash
launchctl unload ~/Library/LaunchAgents/com.colofill.pipeline.plist
rm ~/Library/LaunchAgents/com.colofill.pipeline.plist
```
