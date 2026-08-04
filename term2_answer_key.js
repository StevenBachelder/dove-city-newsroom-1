// GAME 2 — Term 2 answer key: the fifteen tips, dominant-label ground truth
// dominant = the load-bearing technique; all = full honest label set for the case's tip;
// distractors = ADJACENT techniques (anatomy-exam principle: near-misses build expertise).
// caseId = City News ids; ledger # in comment.

const TERM2_KEY = [
{ caseId:1, why:"The flames were painted in — the same AI hand in three images; the street party beneath was real.",  ledger:1,  dominant:"manipulated",   all:["manipulated","conspiracy"],                    distractors:["outofcontext","hoax","emotional"] },        // Old town fire
{ caseId:2, why:"Recycled ‘chatter’ with no primary source — the scary posts only cited each other.",  ledger:2,  dominant:"outofcontext",  all:["outofcontext","conspiracy","fearcommerce"],    distractors:["unverified","impersonation","hoax"] },      // Library attack
{ caseId:4, why:"Nothing confirmed it: a doctored test-strip photo against every authority reporting normal.",  ledger:3,  dominant:"unverified",    all:["unverified","manipulated"],                    distractors:["hoax","outofcontext","emotional"] },        // Water poisoning
{ caseId:9, why:"Urgent AND true — crews, cameras and the fire itself converged. Emotion wasn’t the lie here.",  ledger:4,  dominant:"genuine",       all:["genuine","emotional"],                         distractors:["emotional","unverified","outofcontext"] },  // Downtown fire (TRUE)
{ caseId:14, why:"Absurd but confirmed — officials verified the escape. Absurdity ≠ falsity.", ledger:5,  dominant:"genuine",       all:["genuine"],                                     distractors:["hoax","unverified","emotional"] },          // Monkey (TRUE)
{ caseId:3, why:"A martial-law story pre-written around a two-year-old commercial — fiction laundered as leak.",  ledger:6,  dominant:"conspiracy",    all:["conspiracy","outofcontext","prenarration"],    distractors:["manipulated","hoax","polarization"] },      // Military vehicles
{ caseId:10, why:"The leak was real; only its size was inflated. The kernel held — precision, not suspicion.", ledger:7,  dominant:"genuine",       all:["genuine","amplification","manipulated"],       distractors:["manipulated","emotional","hoax"] },         // Gas leak (TRUE core)
{ caseId:12, why:"Midsummer footage re-aimed to blame a minority — the wedge was the payload, not the fire.", ledger:8,  dominant:"polarization",  all:["polarization","outofcontext"],                 distractors:["conspiracy","emotional","unverified"] },    // Immigrants
{ caseId:13, why:"Dramatic tone with a red warning underneath — loud is not the same as false.", ledger:9,  dominant:"genuine",       all:["genuine","emotional"],                         distractors:["emotional","engagementbait","unverified"] },// Winter storm (TRUE)
{ caseId:17, why:"A crop from the station’s own wide-angle — the frame, not the pixels, was the lie.", ledger:10, dominant:"outofcontext",  all:["outofcontext","conspiracy"],                   distractors:["manipulated","discredit","denialism"] },    // Crowd size
{ caseId:5, why:"ICPAA was a lobby costumed as a health authority — the sender was the story.",  ledger:11, dominant:"impersonation", all:["impersonation","outofcontext","manipulated"],  distractors:["astroturf","unverified","hoax"] },          // Cats/ICPAA
{ caseId:8, why:"The metrics were real even though the man never is — reputation is not evidence either way.",  ledger:12, dominant:"genuine",       all:["genuine"],                                     distractors:["discredit","insinuation","hoax"] },         // BAD DOG EXPOSED (TRUE)
{ caseId:11, why:"‘Sources claim’ all the way down — accusation stacked on accusation, not one confirmable fact.", ledger:13, dominant:"insinuation",   all:["insinuation","unverified"],                    distractors:["unverified","discredit","emotional"] },     // Footballer
{ caseId:15, why:"Staged by the artist himself — a pre-planted alibi post and a single gossip-channel origin.", ledger:14, dominant:"hoax",          all:["hoax","seeding","amplification"],              distractors:["impersonation","emotional","conspiracy"] }, // BAD DOG dead
{ caseId:16, why:"AI fire imagery — one campfire photo, four hoaxes — citing last month’s debunked scapegoating as ‘evidence’.", ledger:15, dominant:"manipulated",   all:["manipulated","polarization","compounding"],    distractors:["outofcontext","hoax","prenarration"] }      // Forest fire
];

// Design notes:
// - Five of fifteen answer "genuine" — Term 2's spine is the no-pathology finding at full weight.
// - Distractor logic per case is the discrimination being trained, e.g.:
//   #3 water: hoax (no, the CLAIM is the fabrication, the event never existed vs staged) vs unverified (yes: nothing confirms);
//   #13 footballer: unverified is the near-miss — true but not load-bearing; insinuation names the METHOD;
//   #10 gas: manipulated is present but not dominant — the kernel is real; picking manipulated over genuine
//   is Term 2's hardest and most instructive error.
// - Term 3 reuses `all` as the multi-select ground truth.

if (typeof module!=="undefined") module.exports = TERM2_KEY;
