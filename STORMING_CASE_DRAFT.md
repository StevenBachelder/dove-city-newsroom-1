# The Storming Case — IMPLEMENTED (this doc now describes what is live, and the TAD design rule)

**Status: implemented** as case 17, day 2, with placeholder illustrations at updated_images/Storming/ (replace with your art at the same paths whenever ready — the game needs no other change).

## The TAD design rule
In the wider fiction, 'Tad' is not a person but the Tactical Advance Division — an organization of coerced workers, each a victim held by debt. The mini-game honors this in two ways. First, the shadow is **organizational, never personal**: the astroturf trail in case 17 ends at three letters — T.A.D. — signed by a *ring* of accounts, never a named individual. Nothing in the mini-game demonizes a person the player will later be asked to free; the enemy on this desk is the machine, which keeps the Level 3 investigator arc (and the compassion it requires) coherent. Second, Sarah's correct-call line plants the investigation seed without resolving it: *'Someone organized this. Hold that thought.'* — the sentence the player carries into Level 3.

**Why this case exists.** In Level 1, the player personally witnessed the storming of
the news station. This is the only event in the whole game where the player knows the
ground truth *from their own eyes* — so it is the one case that can teach the gap
between witnessed reality and mediated claim. For standalone players it reads as
ordinary local-news flavor; for players arriving from Level 1, it is a chill of
recognition. That **double reading** is the writing rule: nothing below requires
Level 1 knowledge, everything below rewards it.

**Placement.** Day 2 or Day 3. Technique: `outofcontext` or `manipulated`
(draft below uses out-of-context: a real photo of the protest, cropped and
re-captioned to inflate it). Truth: **false** (the framing, not the event).
Recommended `buzz: 4` — this story is local dynamite.

**Tad's shadow (optional, per the "never speaks" rule).** The sender account name
below, "CityTruth_Dispatch", is deliberately generic astroturf. If the team wants
the Level-1 connection sharper, rename it to whatever handle Tad's network used
in Level 1 — a sender name only, never a voice.

---

## Drop-in case object (append to CASES in `cases.js`, adjust `id`/`day`)

```json
{
  "id": 17,
  "title": "stormingTitle",
  "description": "stormingDescription",
  "image": "updated_images/Storming/storming_cropped.png",
  "icons": ["icons/Whistler.png"],
  "truth": false,
  "technique": "outofcontext",
  "day": 2,
  "buzz": 4,
  "needImageTool": true,
  "needTextTool": false,
  "searchTerms": [
    "stormingsearchTerms1",
    "stormingsearchTerms2",
    "stormingsearchTerms3",
    "stormingsearchTerms4"
  ],
  "searchResults": [
    { "title": "stormingtitle1", "description": "stormingdescription1",
      "isAd": false, "date": "stormingdate1", "rIdx": 0,
      "icons": ["icons/Dove City Police Department.png"], "supports": true },
    { "title": "stormingtitle2", "description": "stormingdescription2",
      "isAd": false, "date": "stormingdate2", "rIdx": 1,
      "icons": ["icons/Duvstaden TV.png"], "supports": true },
    { "title": "stormingtitle3", "description": "stormingdescription3",
      "isAd": false, "date": "stormingdate3", "rIdx": 2,
      "icons": ["icons/Whistler.png"], "supports": false },
    { "title": "stormingtitle4", "description": "stormingdescription4",
      "isAd": true, "date": null, "rIdx": 0,
      "icons": ["icons/companysecurity.png"], "supports": null }
  ],
  "imageResults": "mirror the pattern of other outofcontext cases: the uncropped
                   original press photo, dated, supports:true"
}
```

*(Check icon filenames against `icons/` before committing; swap for whatever
police/TV/anonymous-account icons exist in the set.)*

## Draft strings (English — for the team to edit, then translate sv/fi/et)

```js
stormingTitle: "THEY DIDN'T WANT YOU TO SEE THIS — the REAL crowd at the station",
stormingDescription: "Remember the 'small disturbance' at the Herald building? This photo shows what the media is hiding: THOUSANDS rose up against the lies. They boarded the windows because they're afraid of us. Share before it's deleted.",

stormingsearchTerms1: "news station protest crowd size",
stormingsearchTerms2: "Herald building damage report",
stormingsearchTerms3: "protest photo original",
stormingsearchTerms4: "who organized station protest",

stormingtitle1: "Police incident report: disturbance at Herald building",
stormingdescription1: "Official estimate: roughly 80 persons present, 12 involved in property damage. Investigation ongoing into coordinated online mobilization prior to the event.",
stormingdate1: "Last week",

stormingtitle2: "Duvstaden TV: wide-angle footage of the station protest",
stormingdescription2: "Full uncut clip shows the square during the incident. The tightly cropped image circulating online matches minute 04:12 — shot at the moment the crowd was densest, from ground level.",
stormingdate2: "Last week",

stormingtitle3: "CityTruth_Dispatch: 'Eyewitnesses say thousands attended'",
stormingdescription3: "Anonymous account, created three weeks ago. No sourcing beyond 'eyewitnesses say'. Amplified by a network of accounts with similar creation dates.",
stormingdate3: "2 days ago",

stormingtitle4: "SPONSORED: SafeGuard Security — protect your business from unrest",
stormingdescription4: "Riots can happen anywhere. SafeGuard cameras and shutters, 20% off this month.",
```

**Sarah's feedback lines** (add to the `vera_outofcontext_ok/no` pattern or give
this case bespoke lines — bespoke recommended):

```js
sarah_storming_ok: "You were closer to that story than you know. Eighty people, twelve arrests, one cropped photo doing the work of a thousand. This is the case I'll remember when I read your application.",
sarah_storming_no: "That photo is real. The crowd it shows is not the crowd that was there. You published the crop, not the square. Of all the stories to get wrong — this one happened outside our window.",
```

**Reply-beat note.** The tipster reply system will fire automatically on a correct
flag — no extra wiring needed.

**The double-reading check, before you commit:** read every line once as a
standalone player (must work as pure local news) and once as a Level-1 player
(must land as recognition). If any line only works one way, redraft it.
