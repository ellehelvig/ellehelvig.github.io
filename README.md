# Elle Helvig | HR Transformation and Applied AI

This site presents my HR transformation work and applied AI projects in one place. It is for hiring managers and collaborators who want a quick route to the work, the evidence, and the limits.

[Open the portfolio](https://ellehelvig.github.io/)

## Why I built this

I wanted one clear path from my HR operating experience to the tools and work-design choices I am building now. The site connects the career case studies to the source repositories so readers can inspect the implementation and evaluation themselves.

## View and use

Start with the featured projects, then open a case study or follow the repository and demo links. The site presents the [HR AI Transformation Playbook](https://github.com/ellehelvig/hr-ai-transformation-playbook), [Resolve](https://github.com/ellehelvig/peopleops-resolution-agent), and career work in performance transformation and People systems prototyping.

## Local setup

Requires Python 3 for previewing. The site uses static HTML and CSS, with no package installation or build step:

```bash
git clone https://github.com/ellehelvig/ellehelvig.github.io.git
cd ellehelvig.github.io
python3 -m http.server 8000 --bind 127.0.0.1
```

Open [http://127.0.0.1:8000](http://127.0.0.1:8000). Expand the Resolve case study and follow its evaluation link. Before publishing, check desktop and mobile widths, keyboard navigation, and the case-study disclosures.

## Structure

| File | Purpose |
|---|---|
| `index.html` | Portfolio copy, case studies, links, and metadata |
| `styles.css` | Layout, color, typography, and responsive styles |
| `favicon.svg`, `favicon-32.png`, `apple-touch-icon.png` | Browser and device icons |
| `og-image.png` | Sharing preview image |
| `.nojekyll` | Serves the static site without Jekyll processing |

## Current status and content maintenance

The site is live. The AI projects are experimental tools and reference designs using synthetic data, not production HR systems.

Resolve's browser demo uses rules. Its source also includes an optional Claude screen that can add routing to a person. The original 60-case regression result and 16-case failure result remain historical evidence; the latter has since informed development. Production use is withheld. Link to the project's [current evidence](https://github.com/ellehelvig/peopleops-resolution-agent/blob/main/docs/evaluation-methodology.md) rather than treating one score as field accuracy.

Project counts must match the linked repositories. Career outcomes are owner-provided claims; supporting records are not published here. Keep career outcomes separate from synthetic demo results. No confidential employer or employee records belong in this repo.

## Licensing

The site's HTML and CSS implementation is MIT licensed. Personal narrative, names, likenesses, and image assets remain reserved to their respective owners. See [LICENSE](LICENSE). The linked projects have separate licenses.
