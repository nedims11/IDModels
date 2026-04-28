# Instructional Design Models: Interactive Comparison Widget

An interactive learning widget that compares three foundational instructional design models — **ADDIE**, **SAM**, and **Backward Design** — built for use in an Intro to Instructional Design class.

Learners can switch between models, explore stage-by-stage descriptions, study a structured 6-dimensional comparison grid, and test their understanding by matching real-world scenarios to the model that best fits.

## Features

- **Interactive ID Visual Model Map** for ADDIE, SAM, and Backward Design
- **6-dimensional comparison grid** for side-by-side evaluation
- **10-question scenario knowledge check** to apply concepts
- **Fully self-contained** HTML / CSS / JS — no external libraries, no build step
- **Accessibility-conscious** markup, hierarchy, and color choices
- Runs anywhere: local file system, GitHub Pages, LMS, SCORM package, or LRS

## Live Demo

[View the widget on GitHub Pages](https://lnkd.in/eAUgQmtA)

## SCORM 1.2 Package

A SCORM 1.2-compliant version is included so the widget can be dropped straight into an LMS gradebook.

**Download:** [`ID Models Comparison - ADDIE-SAM-Backward Design.zip`](./ID%20Models%20Comparison%20-%20ADDIE-SAM-Backward%20Design.zip)

The package wraps the same three files (`index.html`, `styles.css`, `app.js`) with a SCORM 1.2 manifest, so it reports completion to any SCORM 1.2-compliant LMS — Canvas, Blackboard, Moodle, D2L Brightspace, and others.

## How It Was Built

This project came together through a four-step pipeline that combined AI-assisted design and coding with hands-on refinement. Going in, the expectation was that Claude Design and Claude Code would get the work 70–80% of the way there — and that turned out to be correct.

### 1. Claude Design — Ideation & Wireframing

Before writing a single line of code, four wireframe directions were explored: Tab Switcher, Side-by-Side Compare, Accordion Journey, and Visual Model Map. That exploration alone saved hours of rework. Two approaches were ultimately combined: an interactive Visual Model Map for the three models and a structured 6-dimensional comparison grid, plus the 10-question scenario check.

### 2. Claude Code — Dependency-Free Rewrite

The first generated build hit a snag: the JavaScript was calling external libraries, which made the widget unreliable outside a live server. Everything was brought into Claude Code, which rewrote the JavaScript to run fully locally with no external dependencies.

### 3. VS Code — Manual Refinement (the final 20–30%)

The remaining work — content edits, header hierarchy, accessibility fixes, UI polish, and color cleanup — was done by hand in Visual Studio Code using the *Show Preview* plugin, which renders any change to HTML, CSS, or JavaScript instantly in a preview pane. Over the next few days, accessibility, UI, colors, and content were all cleaned up in VS Code.

### 4. GitHub (or SCORM, LRS…) — Deployment

The three HTML / CSS / JS files were uploaded to GitHub and can be served from GitHub Pages, packaged as SCORM, or pushed to an LRS.

## Lessons Learned

Claude Design handles ideation and first-run design well, but constant prompting to change things eventually becomes a time sink — past a certain point, manual editing is faster. Claude Code produces clean, dependency-free output and gets files ready for VS Code. VS Code with a live preview is the right environment for refinement. Together, the three form a capable pipeline that closes out the final 20–30% of the work.

The bigger takeaway: this workflow produced a more powerful learning solution than most modern eLearning tools could in a fraction of the time. eLearning tools are either going to adapt quickly or die. This has happened before, and it is about to happen again.

One more thing — HTML, CSS, and JavaScript are now essential literacy for instructional designers. Not necessarily writing from scratch, but reading it, recognizing what the code and markup do, and making confident edits. That skill is no longer optional. It is becoming part of the job.

## Usage

Clone or download the repository, then open `index.html` in any modern browser. No build step, no install, no server required.

```bash
git clone <repo-url>
cd <repo-folder>
open index.html
```

To deploy on GitHub Pages, enable Pages in the repository settings and point it at the `main` branch root.

## Uploading the SCORM Package to Your LMS

### Canvas

1. Make sure SCORM is enabled in your course: **Settings** → **Navigation** tab → drag **SCORM** into the visible list → **Save**.
2. Click **SCORM** in the course sidebar.
3. Click **Upload** and select `ID Models Comparison - ADDIE-SAM-Backward Design.zip`.
4. Once uploaded, choose how to import it:
   - **Import as an Assignment** (recommended) — completion lands in the gradebook.
   - Or import as a **Graded Assignment**, **Ungraded Assignment**, or **Page**.
5. Click **Go**. Canvas creates the item; open it from **Assignments** or **Modules** and add it to a module so students can find it.

### Blackboard Ultra

1. Open the course → **Content** area.
2. Click the **+** sign where you want the SCORM to appear → **Content Market**.
3. Scroll to **Institution Tools** → click **SCORM**.
4. Click **Upload SCORM Package** → select the zip file.
5. On the settings screen, set **Grading** (optional) and **Visibility**, then **Save**.
6. Students click the item to launch the widget; the **Gradebook** records completion automatically.

### Blackboard Original

1. Open the course → **Build Content** menu in any content area → **SCORM Package** (under Content Tools; if you don't see it, an admin needs to enable the SCORM Engine Building Block).
2. **Browse** to the zip file → **Submit**.
3. Configure title, availability, and grading options → **Submit** again.

> **Tip — if upload fails:** open the zip and confirm `imsmanifest.xml` is at the **top level**, not inside a subfolder. That's the #1 cause of "Invalid SCORM package" errors in both Canvas and Blackboard.

## File Structure

```
.
├── index.html                                              # Markup and content
├── styles.css                                              # Styling and layout
├── app.js                                                  # Interactivity (no external dependencies)
└── ID Models Comparison - ADDIE-SAM-Backward Design.zip    # SCORM 1.2 package for LMS upload
```

## License

Free to use and adapt for educational purposes.
