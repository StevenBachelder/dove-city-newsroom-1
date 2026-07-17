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

## Research parameters (work in both modes)

| Param | Effect |
|---|---|
| `cases=N` | **Short shift**: trims the trial to N cases (3–15), chosen to cover as many distinct techniques as possible, in original order. N ≤ 6 compresses to a single day — fits one lesson. Day clock, endings, and score bars adapt. Example: `?cases=6`. |
| `badges=off` | **Ablation — badge treatment off**: no badge reveal on correct calls, no medals in the field guide, no badge case or badge points in the debrief. The engine still records badges earned; the payload is unchanged, so recognition remains measurable across conditions. |
| `src=off` | **Ablation — source treatment off**: hides the SOURCE meter, per-pin point values, source tally box and delta lines, the Source-value panel in the evidence viewer, the source score bar, sourcing bonuses, and the source-discipline panel. Pinning still works and the engine still records `source`, `avgPinValue`, and `upgrades` in the payload — behavior stays measurable without the didactic feedback. |

**Design note for study comparisons:** toggles remove the *treatment* (visible feedback),
never the *measurement* — every payload field is populated identically in every condition.
Because the headline `score` composition changes with the flags, compare groups on the
payload measures (`rightCalls`, `badgeCount`, `avgPinValue`, `upgrades`, meters), not on `score`.
Combine freely: `?cases=6&badges=off&pid=UPP-042&lang=sv`.

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
  "score": 765, "rightCalls": 16, "totalCases": 16,   // totalCases reflects ?cases= if used
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
