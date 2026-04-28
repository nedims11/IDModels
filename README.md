# Sample SCORM 1.2 Course — Built with Claude + VS Code

A downloadable SCORM 1.2 package and the workflow I used to design and build it. Anyone can grab the zip in this repo and upload it straight to Blackboard, Canvas, Moodle, or any other SCORM 1.2-compliant LMS.

> **Download:** [`sample-course-scorm12.zip`](./sample-course-scorm12.zip)

---

## What's in this repo

```
.
├── README.md                    ← you are here
├── sample-course-scorm12.zip    ← upload this to your LMS
└── scorm_pkg/                   ← unzipped source files (edit these to customize)
    ├── imsmanifest.xml          ← SCORM 1.2 manifest (required at zip root)
    ├── index.html               ← the lesson page learners see
    └── scormAPI.js              ← minimal SCORM 1.2 API wrapper
```

The package is a single-page lesson with a **Mark Complete** button. When the learner clicks it, the course reports `cmi.core.lesson_status = completed` to the LMS.

---

## My process

This project came together through a simple three-stage workflow that I now use for most small builds.

### 1. Design — Claude as a thinking partner

I opened a Claude conversation and described what I wanted in plain English. Instead of jumping straight to output, Claude asked me a few clarifying questions — the kind of questions I would have answered too quickly on my own. Talking through the trade-offs out loud (with something that pushes back) is where most of the actual design work happened. By the end of that exchange I had a clear spec: scope, structure, naming, and the behavior I wanted.

A few principles I leaned on during the design phase:

- Start with the smallest version that proves the idea works.
- Make each piece replaceable — no clever coupling that locks me into a choice.
- Decide who's in control of key moments (the user, the system, or the platform) before writing any code.

### 2. Code — Claude as a generator

Once the design felt solid, I had Claude draft the source files directly from the spec. Because the design conversation already nailed down the structure, the code came out close to final on the first pass. I reviewed each file, asked for adjustments where something didn't match my intent, and iterated until it read the way I wanted.

Working this way kept me in the role of editor and decision-maker rather than typist. I spent my attention on whether the output was *right*, not on remembering syntax.

### 3. Edit & refine — VS Code

I pulled the generated files into VS Code for the hands-on pass. This is where I made the project mine: rewriting copy, tweaking styles, renaming things to match my own conventions, and committing to git. VS Code is also where I'd run, debug, and re-package the project for distribution.

The whole loop — **describe → generate → edit** — turns a blank page into a working asset in a fraction of the time it used to take me, and the result still feels authored rather than auto-generated.

---

## Customizing the course

Open `scorm_pkg/index.html` and replace the content between `<h1>` and the button. To change the course title that appears in the LMS, update **both**:

- `<title>` of `imsmanifest.xml` (inside `<organization>` and `<item>`)
- `<title>` of `index.html`

Re-zip from inside `scorm_pkg/` so the manifest sits at the zip root, then re-upload.

---

## Uploading to your LMS

### Blackboard (Original and Ultra)

**Blackboard Ultra**

1. Open the course → **Content** area.
2. Click the **+** sign where you want the SCORM to appear → **Content Market**.
3. Scroll to **Institution Tools** → click **SCORM**.
4. Click **Upload SCORM Package** → select `sample-course-scorm12.zip`.
5. On the settings screen, set **Grading** (optional) and **Visibility**, then **Save**.
6. Students click the item and complete the lesson; the **Gradebook** records completion automatically.

**Blackboard Original**

1. Open the course → **Build Content** menu in any content area → **SCORM Package** (under Content Tools; if you don't see it, an admin needs to enable the SCORM Engine Building Block).
2. **Browse** to `sample-course-scorm12.zip` → **Submit**.
3. Configure title, availability, and grading options → **Submit** again.

### Canvas

1. Make sure SCORM is enabled in your course: **Settings** → **Navigation** tab → drag **SCORM** into the visible list → **Save**.
2. Click **SCORM** in the course sidebar.
3. Click **Upload** and select `sample-course-scorm12.zip`.
4. Once uploaded, choose how to import it:
   - **Import as an Assignment** (recommended) — completion/score lands in the gradebook.
   - **Import as a Graded Assignment**, **Ungraded Assignment**, or **Page**.
5. Click **Go**. Canvas creates the item; open it from **Assignments** or **Modules** and add it to a module so students can find it.

> **Tip — if upload fails:** open the zip and confirm `imsmanifest.xml` is at the **top level**, not inside a subfolder. That's the #1 cause of "Invalid SCORM package" errors in both Blackboard and Canvas.

---

## Testing locally (optional)

SCORM packages need an LMS to fully exercise the API, but you can sanity-check the page by opening `scorm_pkg/index.html` directly in a browser. The wrapper detects there's no LMS and the page will show "running outside an LMS (preview mode)." Clicking **Mark Complete** still works visually — it just doesn't report anywhere.

For real API testing without a full LMS, [SCORM Cloud](https://cloud.scorm.com) offers a free tier — upload the zip, launch it, and watch the runtime data.

---

## License

Use this however you like. It's a starter template.
