# Dove City Newsroom — Nomenclature

A shared vocabulary for the parts of the game, ordered by where they appear in play.
Use these names in design discussions, bug reports, and change requests.

## Screens

| Term | What it is |
|---|---|
| **Start Memo** | The first screen: Sarah's welcome memo, the four rules, language flags, and the *Clock-in Button* ("Clock in — start Day 1"). |
| **Tip Desk** (Newsroom) | The main play screen: Queue on the left, Workspace in the middle, Verification Tools and Evidence Board on the right. |
| **Front Page** | The end-of-day screen showing the morning-after headline and the *Start-Day Button*. |
| **Debrief** | The end-of-trial screen: Ending, Stats Line, Skills Grid, Source Discipline panel, Badge Case, Takeaways, Replay Button. |

## Top Bar

| Term | What it is |
|---|---|
| **Masthead** | The clickable paper name (top left); acts as the *Home Button* with a confirm dialog. |
| **Day Clock** | "DAY 1 / 3 · TIP DESK" indicator. |
| **Meters** | The three tappable scores: **Credibility** (teal), **Popularity** (orange), **Source** (gold). Tapping any opens the *Meter Explainer*. |
| **Meter Explainer** | The modal "Your three meters — and how your choices improve your score", one card per meter plus the tension note. |
| **Meter Nudge** | The one-time toast after the first verdict pointing at the meters. |
| **Guide Button** | Opens the Field Guide. |

## Investigating a Tip

| Term | What it is |
|---|---|
| **Queue** | The "Incoming tips" list; each item is a **Tip Card** with its buzz rating. |
| **Case** | One tip opened in the workspace (the post, its media, sender). |
| **Verification Tools** | The right-hand panel: **Text Search** (with **Search Terms**) and **Reverse Image Search**. |
| **Result** | One entry in a search results list. May be marked **Sponsored** (dashed amber frame). |
| **Pin Button** | "📌 Pin this SOURCE / to your evidence board" on each result. |
| **Evidence Board** | The pinned collection (max 3). Each **Evidence Card** shows a thumbnail or source icon and is tappable. The italic line beneath the header is the **Board Hint** ("two strong sources beat three weak ones"). |
| **Evidence Viewer** | The stacked modal opened by tapping any evidence card (from board or feedback): media, sender icon, **Source Value** panel, Sponsored banner on ads. |
| **Verdict Stamps** | **Publish** (green) and **Flag as false** (red). |

## Feedback (after stamping)

| Term | What it is |
|---|---|
| **Feedback Modal** | Everything that appears after a verdict. |
| **Verdict Banner** | The saturated green/red "Right call"/"Wrong call" strip. |
| **Net Total** | The +sum/−sum chip inside the Verdict Banner: all point changes across the three meters combined; pops in when the tally finishes. |
| **Score Tally** | The three centered boxes (CREDIBILITY / POPULARITY / SOURCE) with animated counting and tick sounds. |
| **Delta Chips** | The ▲/▼ lines explaining each scoring event. |
| **Case Explanation** | The decision-reasoning paragraph for the case. |
| **Source Review Strip** | "Sources you based your decision on — tap to review": mini-cards with per-pin point values. |
| **Sarah's Note** | The editor-in-chief's quote. |
| **Technique Card** | The named-technique explainer; on a correct call it's topped by the **Badge Reveal** (the medal pop). |
| **Next Button** | The blue proceed button. |

## Field Guide & Badges

| Term | What it is |
|---|---|
| **Field Guide** | The technique compendium. Header shows the **Generic Badge**. |
| **Guide Entry** | One technique: centered **Badge**, name, body. Locked entries show a dimmed badge silhouette and "Investigate more tips to achieve this badge." |
| **Badges** | The 9 medals in `Badges/`: 7 techniques + **Ad-Spotter** + Generic. Earned/unearned states appear in the Debrief's **Badge Case**. |

## Scoring (reference)

| Meter | Moves on |
|---|---|
| **Credibility** | Verdict correctness: +8 publish-true, +12 flag-fake, −18 publish-fake (correction), −8 flag-true (buried scoop). Collapse ends the trial. |
| **Popularity** | Readership: +buzz publish-true, viral-then-crash on publish-fake (+buzz, then −1.5×buzz), −6 flag-true. |
| **Source** | Craft, per pin: +4 primary/official, +3–+2 weaker supporting, +3 original context via image search, −1 beside the point, −4 sponsored. Case delta = sum of pins. Swaps to stronger sources are counted as **Upgrades** and honored in the Debrief's **Source Discipline** panel. |

## Consequence & immersion layer

| Term | What it is |
|---|---|
| **Reply Beat** | The tipster-answer choice after correctly flagging a fake (Ignore / blunt / “show your work” — the last requires pinned evidence). |
| **Sarah'"'"'s Day Report** | Her performance-tiered quote on each Front Page (Strong / Mid / Weak × day). |
| **Reader Letter** | The morning-mail note on the Front Page reacting to the day'"'"'s most significant call (hurt / thanks / scooped). |
| **Ripple Banner** | The notice on a case that references an earlier story — amber if you published the fake it builds on (its buzz rises), green if your flag broke the chain. |
| **Inside Note** | The unsigned 03:47 note in the morning mail after correctly flagging the storming case — the TAD thread made personal, organizational rule intact. |
| **Investigations Seed** | The “Filed under: ongoing” debrief panel forwarding the TAD evidence upstairs — the Level 3 doorway. |
| **Press Card** | Signed at clock-in, downloadable from the Debrief as a two-sided PNG (credential front, eight-techniques field guide back). |
