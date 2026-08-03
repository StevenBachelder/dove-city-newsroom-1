// GAME 2 — Term 2 answer key: the fifteen tips, dominant-label ground truth
// dominant = the load-bearing technique; all = full honest label set for the case's tip;
// distractors = ADJACENT techniques (anatomy-exam principle: near-misses build expertise).
// caseId = City News ids; ledger # in comment.

const TERM2_KEY = [
{ caseId:1,  ledger:1,  dominant:"manipulated",   all:["manipulated","conspiracy"],                    distractors:["outofcontext","hoax","emotional"] },        // Old town fire
{ caseId:2,  ledger:2,  dominant:"outofcontext",  all:["outofcontext","conspiracy","fearcommerce"],    distractors:["unverified","impersonation","hoax"] },      // Library attack
{ caseId:4,  ledger:3,  dominant:"unverified",    all:["unverified","manipulated"],                    distractors:["hoax","outofcontext","emotional"] },        // Water poisoning
{ caseId:9,  ledger:4,  dominant:"genuine",       all:["genuine","emotional"],                         distractors:["emotional","unverified","outofcontext"] },  // Downtown fire (TRUE)
{ caseId:14, ledger:5,  dominant:"genuine",       all:["genuine"],                                     distractors:["hoax","unverified","emotional"] },          // Monkey (TRUE)
{ caseId:3,  ledger:6,  dominant:"conspiracy",    all:["conspiracy","outofcontext","prenarration"],    distractors:["manipulated","hoax","polarization"] },      // Military vehicles
{ caseId:10, ledger:7,  dominant:"genuine",       all:["genuine","amplification","manipulated"],       distractors:["manipulated","emotional","hoax"] },         // Gas leak (TRUE core)
{ caseId:12, ledger:8,  dominant:"polarization",  all:["polarization","outofcontext"],                 distractors:["conspiracy","emotional","unverified"] },    // Immigrants
{ caseId:13, ledger:9,  dominant:"genuine",       all:["genuine","emotional"],                         distractors:["emotional","engagementbait","unverified"] },// Winter storm (TRUE)
{ caseId:17, ledger:10, dominant:"outofcontext",  all:["outofcontext","conspiracy"],                   distractors:["manipulated","discredit","denialism"] },    // Crowd size
{ caseId:5,  ledger:11, dominant:"impersonation", all:["impersonation","outofcontext","manipulated"],  distractors:["astroturf","unverified","hoax"] },          // Cats/ICPAA
{ caseId:8,  ledger:12, dominant:"genuine",       all:["genuine"],                                     distractors:["discredit","insinuation","hoax"] },         // BAD DOG EXPOSED (TRUE)
{ caseId:11, ledger:13, dominant:"insinuation",   all:["insinuation","unverified"],                    distractors:["unverified","discredit","emotional"] },     // Footballer
{ caseId:15, ledger:14, dominant:"hoax",          all:["hoax","seeding","amplification"],              distractors:["impersonation","emotional","conspiracy"] }, // BAD DOG dead
{ caseId:16, ledger:15, dominant:"manipulated",   all:["manipulated","polarization","compounding"],    distractors:["outofcontext","hoax","prenarration"] }      // Forest fire
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
