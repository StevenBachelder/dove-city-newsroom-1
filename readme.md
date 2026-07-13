# Dove City Daily — migrated newsroom game

A redesigned engine with **all 15 cases, all 4 languages, and all media references migrated
from the `lateral_reading` repo**. Nothing from your content pipeline was rewritten — the game
reads your `translation.js` as-is, so your translators' work carries over untouched.

## Run it

**Media status:** 43 files delivered via the For_Claude repo are installed at their exact
repo paths, each hash-verified against its Git LFS pointer. Cases 1 (street fire, rewired to
Thomas's replacement images), 3 (military), 11 (football), 12 (forest fire), 14 (monkey) and
most of 2 (library), 4 (bad water), 7 (winter storm), 15 (BAD DOG) now play with real media.

Still LFS pointers (drop in from your local checkout, or push to For_Claude):
- `icons/` — all 55 source-logo icons (biggest visible gap: post cards & search results)
- `img/` — fire1–4.png (case 9), gasleak_intro.png, memorial.png, pets.png
- case 6 (actor_dead) ×4 · case 8 (dogfluencer) ×4 · case 13 (heavy_rain) ×4
- case 5 (pets) ×3 old files — or say the word and I'll rewire to `pets_new/`
- case 10 (gas_leak): gasleakbest2.png, "gasleaklocal best.png" — note the new
  `gas_leak_new/` uploads which may be their replacements
- case 4: badwater_main.png, clean.png, Bad_Water_Glas_6.jpeg (the .psd was excluded — source file)
- case 15: Bad-Dog_Music_Video_5.mp4 (the >30 MB file still to be uploaded)
- case 2: Waterguns_1_Dark.png wasn't in the upload (Waterguns_2_Flash was)

Unwired extras included for your convenience: `updated_images/pets_new/` (7 photos) and
`updated_images/gas_leak_new/` (5 assets incl. a check video).

## Case 16 — NEW: the AI-derivative series (built per the Forestfire Read_Me)

The proposed Camp_Fire derivative exercise is now **case 16** (day 3, fake): the same image
series from case 12 returns recycled into a *different* hoax — a forest-fire evacuation panic.
That reuse is deliberate and is the lesson: real disinformation recycles one source image
across multiple narratives. The reverse image search shows the cozy "original," last month's
"ritual fire" version, and two escalations — with every figure frozen in the same pose, which
is the tell for an AI montage. The feedback also delivers the Read_Me's twist: even the
"original" is AI-generated; the point is that comparing versions exposes the montage, not
finding "the real photo." Content authored in en + sv (keys `nf16_*` and
`decisionReasoning_16_*` in `translations_extra.js`); fi/et fall back to English.
Only the two reachable feedback texts exist (correct_flag / incorrect_publish) — the other
two would contradict the case's truth value (see the case-11 issue above). Two options, either takes under a minute:

- **Drop-in (easiest):** copy `index.html`, `cases.js`, and `translations_extra.js` into your
  existing repo checkout (where the real media already lives) and open `index.html`.
  All paths (`img/`, `icons/`, `updated_images/`, `videos/`) are preserved verbatim.
- **Standalone:** in this folder run `git init && git remote add origin
  https://github.com/AlexanderWinters/lateral_reading.git` … or simply run `git lfs pull`
  in a clone and copy the four media folders over the ones here.

Serve over HTTP (`python3 -m http.server`) rather than `file://` so the videos load reliably.

## What was migrated

- **All 15 cases** from `postsData` (`script.js`): titles, descriptions, source icons,
  4 search terms each, every text search result (including the **sponsored ads**, rendered
  as labelled ad results with your `relevanceReasoning_ad` analysis), every image/video
  result, dates, and your relevance scores (`reasoningIndex` → score chip on each result).
- **All four languages** (en / sv / fi / et) via your `translation.js`, loaded verbatim.
- **Your per-case feedback**: the `decisionReasoning_{id}_{correct|incorrect}_{action}`
  texts are the main explanation in the verdict modal — in all four languages.
- **Your design rules**: evidence limit of 3 ("quality over quantity"), and the
  `forceImageSearchAfterText` / `forceTextSearchAfterImage` flags now gate the verdict
  stamps ("run the image search before you stamp").

## What's new (the redesign)

- Narrative frame: 3-day trial at the *Dove City Daily* under editor-in-chief **Vera Falk**,
  5 tips per day with a difficulty arc (day 1 obvious → day 3 subtle, incl. the
  true-death vs. death-hoax pairing of Adrian Vale and BAD DOG).
- **Evidence board**: verdicts are locked until evidence is pinned; pins that genuinely
  settle the case earn a credibility bonus; pinning a **sponsored result** triggers a
  dedicated lesson and costs the Ad-Spotter badge.
- **Popularity vs. credibility tradeoff**: fakes go viral first, then the correction craters
  both meters — the punishment arrives *after* the reward, like real life.
- **Technique cards & field guide**: every fake names its manipulation technique
  (manipulated media, out-of-context, conspiracy framing, unverified claims, polarization,
  death hoax, emotion ≠ false, sponsored results); entries unlock as encountered,
  badges for spotting each one.
- Day-end **front pages**, four ending tiers, and a skills debrief (source / image /
  claims / evidence) with transferable takeaways.

## Data issues found in your repo (worth fixing upstream)

1. **`icons/DN.png` → `icons/dn.png`** — case 2 references `icons/DN.png` but the file is
   `icons/dn.png`. Works on macOS, 404s on Linux servers. Fixed in `cases.js`; fix it in
   `script.js` too if you keep the old version live.
2. **Case 11 (footballer doping) contradiction** — `postsData` has `correctAnswer: false`
   (flag), but all four of your `decisionReasoning_11_*` texts say the correct judgment is
   to **publish** ("official sources confirmed an ongoing investigation… flagging misses
   verified information"). The migration follows your feedback texts (`truth: true`).
   If flag was intended, change `"truth": true` to `false` on case 11 in `cases.js` —
   but then the four feedback texts need rewriting.

## Finishing the fi/et translations

Only the ~90 **new-mechanic strings** need translating (your case content is already
4-language). In `translations_extra.js`, copy the `en:` block into `fi:` and `et:` and
translate the values; until then those languages fall back to English for the new chrome
while all case content, search results, and feedback stay in Finnish/Estonian.
Swedish is fully authored.

## Tuning

- Case metadata (day, buzz, technique, which results count as supporting evidence):
  `cases.js` — fields `day`, `buzz`, `technique`, and `supports: true` on results.
- Scoring constants: `verdict()` in `index.html` (+8/+buzz correct publish, +12/+2 correct
  flag, −18 & viral-crash wrong publish, −8/−6 wrong flag, +4 evidence bonus).
- Ending thresholds: `debrief()` (fired < 25 credibility, senior ≥ 80 + near-perfect,
  staff ≥ 60).
