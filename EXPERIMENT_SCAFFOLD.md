# Experiment scaffold — multivariate capacity, planted early
*Built so the "felt vs. actual advancement" paper (and others) become possible without redesign. Cost now: ~10 lines; behavior: unchanged until an experiment is declared.*

## The mechanism (live in Game 1 as of Aug 2026)
- `EXPERIMENT={name, arms[]}` — one declaration per study; `state.variant` assigned once per player: **URL override** (`?arm=X` — lets a teacher assign arms per classroom or per row), else random from arms.
- The variant travels in the research export (`d.experiment`, `d.variant`) beside all existing telemetry (decisions, ledger use, timing).
- Game 2 inherits the same pattern, with its parameters read from the arm: `braidMode · doorSeverity · confidenceOn · ratioTold` are the first four dials.

## Studies this makes cheap
1. **Felt vs. actual advancement** (the designer's paper): arms = earned-only progression vs. earned + cosmetic power-ups; measures = pre/post discernment (actual), self-reported progress and achievement valuation (felt), completion and persistence. Hypothesis from the flow ruling: the earned-only arm shows equal-or-higher persistence and *higher* achievement valuation.
2. **Braided vs. blocked vs. mixed** — the interleaving gradient tested directly (Game 2, `braidMode`).
3. **Door severity** — the respect hypothesis quantified.
4. **Ratio-told vs. discovered** — the calibration-framing effect.

## Cautions (recorded now, before enthusiasm)
- **Clustering:** classrooms are the unit, not students — power calculations must respect it; URL-arm-per-class is the practical assignment method.
- **Ethics:** minors; school consent flows; no arm may be *pedagogically worse by design* — arms must be genuine equipoise or additive.
- **Pre-registration** with the Uppsala/Cambridge partners keeps the papers clean.
- **Discipline:** one experiment at a time; `name:"none"` between studies; the scaffold must never quietly fork the play experience.
