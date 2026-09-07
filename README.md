# Bernard Dohrn, portfolio

A personal site for neural engineering work: EMG and EEG decoding, analog front-end
design, and hands-free interaction.

Static HTML, CSS, and one small script. No build step, no dependencies, no framework.

    index.html                         intro, work list, about, contact
    styles.css                         all styling, design tokens at the top
    main.js                            theme toggle
    images/                            figures and photographs

    emg-hand-pose.html                 one page per project, newest first
    eeg-fmri-reconstruction.html
    motor-impairment-decoding.html
    openinteraction.html
    neurotech-interface-software.html

Each project has its own page and its own URL, so a single piece of work can be linked
on its own without sending someone to the whole site.

## Running it

Open `index.html` in a browser, or serve the folder so paths behave exactly as they do
in production:

    python -m http.server 8000

Then visit <http://localhost:8000>.

## Deploying it

**GitHub Pages.** A repository named `<username>.github.io` publishes to
`https://<username>.github.io` with no path suffix; any other name publishes to
`https://<username>.github.io/<repo>`. Set Pages to the `main` branch, root folder.

**Netlify or Cloudflare Pages.** Drag the folder onto the dashboard. There is no build
command and no output directory to configure.

Any static host works. Nothing here runs on a server.

## Adding a project

Copy the closest existing page, then:

1. Change the `<title>`, the `<h1>`, the meta strip, the lede, and the body.
2. Fix the pager at the bottom so the newer and older links point at its real
   neighbors, and update those neighbors to point back at it.
3. Add an entry to the Work list in `index.html`, matching the shape of an existing one.

The navigation is duplicated across all six pages, which is the cost of having no build
step. A change to a nav link has to be made everywhere.

## Writing a project page

Body content goes inside `<div class="prose">`. Headings, lists, figures with captions,
tables, code blocks, and blockquotes are all styled already, so content can be pasted in
without touching the CSS.

Figures take an optional `plate` class, which sets the image on a light card. Plots
exported from matplotlib carry their own white background and black axis labels, so they
need it to sit on the dark theme; photographs and screenshots with their own dark
backgrounds do not. A `narrow` class on the figure stops an image smaller than the
container from being upscaled past its own pixels.

```html
<figure>
  <a class="plate" href="images/example.png">
    <img src="images/example.png" width="1871" height="705"
         alt="Describe what the image actually shows, specifically.">
  </a>
  <figcaption>What a reader should take from it.</figcaption>
</figure>
```

Alt text should describe the content rather than name the file. Someone using a screen
reader gets that sentence instead of the image.

Two conventions worth keeping:

- **No heading without content under it.** An empty section reads worse than no section.
- **Real numbers only.** Where a figure is not to hand, the sentence is written without
  it rather than approximated.

The lede beneath a project title is deliberately the same sentence as that project's
summary on the index. The body continues from it rather than restating it.

## Content rules

Nothing on this site is fabricated: no invented statistics, no unearned claims, no dead
links. Every number, date, and result traces to a source document or a real URL, and
anything not yet done is described as not yet done. A portfolio is a trust document, and
one invented figure costs more than it buys.
