# SOURCE Mini-Game — Integration & Research Guide

The tip-desk mini-game runs in two modes from the same `index.html`.

## Standalone mode (default)

Open the page normally. Players see the Start Memo, may sign their press card
(optional name), pick a language, and play the full trial. Nothing is stored or
transmitted; results live only on the Debrief screen.

## Embedded mode (for the Unreal build / Level 2)

Load the page in a WebView / browser widget with URL parameters:

```
index.html?mode=embedded&name=PLAYERNAME&pid=STUDYID&lang=sv
```

| Param | Effect |
|---|---|
| `mode=embedded` | Skips the Start Memo and clocks straight into Day 1 (the parent game has already framed the fiction). |
| `name=` | Player name from Level 1. Appears on the Editor's Score and in the results payload. Max 40 chars. |
| `pid=` | Participant/study ID. Carried untouched into the results payload. Max 60 chars. |
| `lang=` | `en`, `sv`, `fi`, or `et`. Also works in standalone mode. |

## Reading the results

When the Debrief renders, the game:

1. Sets `window.SOURCE_RESULTS` — poll or read this from the host.
2. Emits `window.parent.postMessage({type:"SOURCE_MINIGAME_RESULTS", payload}, "*")`
   for iframe/WebView hosts that listen for messages.

Payload shape (`version: "dcn-1.0"`):

```json
{
  "version": "dcn-1.0",
  "timestamp": "2026-07-18T…",
  "pid": "UPP-042", "name": "Kim Ek", "lang": "sv",
  "score": 765, "rightCalls": 16, "totalCases": 16,
  "badges": ["manipulated", "outofcontext", "…"],
  "adSpotter": true, "masterBadge": true, "badgeCount": 8,
  "credibility": 100, "popularity": 100, "source": 100,
  "avgPinValue": 3.19, "pinsPlaced": 16, "upgrades": 0,
  "skills": { "source": {"ok":4,"n":4}, "image": {…}, "claims": {…}, "evidence": {…} }
}
```

Research-relevant measures: `badges`/`badgeCount` (technique recognition),
`avgPinValue` (sourcing quality), `upgrades` (revision behavior),
`rightCalls` (outcome accuracy), plus the three meters.

## Manual collection (no host integration needed)

The Debrief's score box has a **"Copy results (for research)"** button that
copies the same JSON to the clipboard — participants can paste it into a form.
No backend, no storage, no PII beyond what the researcher passes in `pid`/`name`.

## Classroom

The 🔊 button in the top bar mutes all game audio for the session.
