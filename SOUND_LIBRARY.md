# Dove City Newsroom — Sound Library

All audio is synthesized live with the Web Audio API — no sound files, nothing to
load, works offline and inside the Unreal WebView. Every sound respects the 🔊/🔇
mute toggle and degrades silently where audio is unavailable.

## Building blocks (primitives)

| Primitive | What it is |
|---|---|
| `blip(freq,dur,type,vol,wet)` | One enveloped oscillator tone. `wet` routes it through the reverb. |
| `sweep(f1,f2,dur,vol)` | A sine tone gliding between two pitches. |
| `swish(f1,f2,dur,vol)` | Band-pass-filtered noise whose center frequency glides — the whoosh. |
| `thump(vol)` | A dropping low sine knock plus a puff of air — the landing. |
| `_verb()` | Generated convolution reverb (1.4 s decaying-noise impulse, ~55 % wet) for finale sounds. |

## The palette — every named sound and where it plays

| Name | Character | Heard when |
|---|---|---|
| `sfxLang` | clear tick (boosted for noisy rooms) | Choosing a language flag on the Start Memo |
| `sfxStart` | page-turn + bright rising note | Clock-in button — the trial begins |
| `sfxSelect` | light paper swish + soft tap | Opening a tip from the Queue |
| `sfxSearch` | falling air whoosh (flip-to-front character, no landing) | Running a Text Search term or Reverse Image Search |
| `sfxPin` | high tack + soft body — a pushpin | Pinning a result to the Evidence Board |
| `sfxUnpin` | descending two-tone pluck | Removing a pin from the board |
| `sfxStamp` | air snap + heavy low thunk — rubber stamp on paper | PUBLISH or FLAG verdict stamps |
| `tickUp` / `tickDown` | accelerating counter ticks | Score Tally counting; Editor's Score count-up |
| `chordUp` **(reverb)** | two rising triangle notes with a blooming tail | Right-call finish; Editor's Score landing |
| `thudDown` **(reverb)** | two falling low notes with a dark tail | Wrong-call finish |
| `sfxSend` | quick ascending send pair | Any tipster reply button |
| *(reply chime)* | brighter single note | The "show your work" helpful reply specifically |
| `uiClick` | soft two-tone page turn | Next button; Replay; report/card download |
| `sfxDay` | page turn + rising air | Start-next-day button on the Front Page |
| `sfxOpen` | rising air whoosh (smaller sibling of the card flip) | Field Guide, Meter Explainer (tapping Credibility / Popularity / Source in the header), Evidence Viewer, Lightbox opening |
| `sfxClose` | falling air whoosh, softer than the search | Any of the above closing (button, backdrop, or Esc) |
| `flipSound` | **whoosh** (rising noise sweep to the back, falling to the front) then **thump landing** timed to the card settling at 0.6 s | Badge review cards flipping, both directions |
| `sfxToggle` | single confirming note | Sound switched back ON (muting itself is silent, as it should be) |
| `sfxCopy` | two-note success chime | "Copy results (for research)" completes |

## Design rules

1. **Hierarchy of weight.** Navigation ticks are near-subliminal (< 0.1 s, low gain);
   commitment sounds (stamp, verdicts) are heavy; only the three finale sounds get
   reverb — gravitas is rationed so it stays meaningful.
2. **Direction encodes meaning.** Opens rise, closes fall; pins tack up, unpins
   pluck down. The whoosh family now spans three sizes — modal (small), search
   (medium), card flip (large, with landing) — one gesture at three scales.
3. **One family.** Everything is triangle/sine/filtered noise in the same loudness
   range, so twenty sounds read as one instrument, not a slot machine.
4. **Silence is honored.** Mute silences everything at the source; muting makes no
   sound; unmuting confirms with one note.
