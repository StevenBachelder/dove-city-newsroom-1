// AXIS MAP — the faceted layer over the flat technique tags (see WHAT_HOW_WHY.md)
// Ground truth (techniques[] in cases.js) never changes for theory's sake; THIS file is
// where interpretation lives, and it may be revised freely. Layers:
//   MEANS = production/distribution technique (forensically checkable on the artifact)
//   END   = function served in the discourse (attributed, pattern-evidenced)
//   FORM  = narrative genre/shape (formal cause)
//   STATE = epistemic status, not a technique at all
// disputed:true = honest hybrid; argued in WHAT_HOW_WHY.md §5, not silently resolved.

const AXIS_MAP = {
  manipulated:    { layer:"MEANS" },
  outofcontext:   { layer:"MEANS" },
  impersonation:  { layer:"MEANS" },
  hoax:           { layer:"MEANS", disputed:true, note:"portmanteau (designer, Aug 2026): entails STATE(false) + names MEANS(event fabrication). Verdict usage (\u2018it\u2019s a hoax\u2019) reads as STATE; staging usage reads as MEANS. Kept in MEANS for its informative content; see act/trace duality, WHAT_HOW_WHY \u00a75." },
  amplification:  { layer:"MEANS" },
  astroturf:      { layer:"MEANS" },
  seeding:        { layer:"MEANS" },
  insinuation:    { layer:"MEANS", note:"rhetorical device" },
  emotional:      { layer:"MEANS", note:"register as instrument" },
  prenarration:   { layer:"MEANS", disputed:true, note:"arguably FORM (template awaiting footage)" },
  compounding:    { layer:"MEANS", note:"legitimation via prior wave" },
  engagementbait: { layer:"MEANS", disputed:true, note:"means welded to an attention END" },
  conspiracy:     { layer:"FORM",  disputed:true, note:"narrative genre; historically listed as technique" },
  polarization:   { layer:"END",   note:"division" },
  denialism:      { layer:"END",   note:"dismay / trust-erosion" },
  discredit:      { layer:"END",   note:"dismiss" },
  fearcommerce:   { layer:"END",   note:"profit" },
  sponsored:      { layer:"MEANS", note:"paid placement; often serving fearcommerce END" },
  unverified:     { layer:"STATE" },
  genuine:        { layer:"STATE" }
};

// Demonstration: the decomposition the designer's example demands.
// Case #8 (immigrants) / #15 (forest fire) read through the axes:
//   MEANS: outofcontext + manipulated + compounding (the falsified fire, the recycled wave)
//   SURFACE: audience + material (per the five families)
//   END: polarization (scapegoating/division)
//   PROJECT (investigator-level, argued not tagged): exclusionary world-building —
//   requires repertoire evidence (RedAlertWatch/PatriotSignal across cases) + confidence marking.

if (typeof module!=="undefined") module.exports = AXIS_MAP;
