<picture>
  <source media="(max-width: 600px) and (prefers-color-scheme: dark)" srcset="https://raw.githubusercontent.com/ellehelvig/ellehelvig/3150203bbaecf43cc572a80e2fd6354831224b64/assets/card-portfolio-mobile-dark.svg">
  <source media="(max-width: 600px)" srcset="https://raw.githubusercontent.com/ellehelvig/ellehelvig/3150203bbaecf43cc572a80e2fd6354831224b64/assets/card-portfolio-mobile-light.svg">
  <source media="(prefers-color-scheme: dark)" srcset="https://raw.githubusercontent.com/ellehelvig/ellehelvig/3150203bbaecf43cc572a80e2fd6354831224b64/assets/card-portfolio-dark.svg">
  <img alt="Elle Helvig portfolio. Case studies, design choices, and project evidence." src="https://raw.githubusercontent.com/ellehelvig/ellehelvig/3150203bbaecf43cc572a80e2fd6354831224b64/assets/card-portfolio-light.svg" width="100%">
</picture>

# Elle Helvig | HR Transformation and Applied AI

This site presents my independent HR AI projects. It gives readers a quick route to the tools, design choices, evidence, and limitations.

[Open the portfolio](https://ellehelvig.github.io/)

## At a glance

| Aspect | Summary |
|:--|:--|
| **Explore** | [HR AI Transformation Playbook](https://github.com/ellehelvig/hr-ai-transformation-playbook) · [Resolve](https://github.com/ellehelvig/peopleops-resolution-agent) |
| **Built with** | Static HTML and CSS; Python 3 for local preview. |
| **Evidence** | Project case studies link to source, evaluation evidence, and limitations. |

## Why I built this

I wanted a clear path from an HR AI idea to inspectable examples of use-case selection, work redesign, and proposed pilot evaluation. The site connects independent project case studies to their source repositories.

## View and use

Start with the featured projects, then open a case study or follow the repository and demo links. The site presents the [HR AI Transformation Playbook](https://github.com/ellehelvig/hr-ai-transformation-playbook), [Resolve](https://github.com/ellehelvig/peopleops-resolution-agent).

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

The default branch serves the public site. Changes on review branches are not live until publication. The AI projects are experimental tools and reference designs using synthetic data, not production HR systems.

Resolve's browser demo uses rules. Its source also includes an optional Claude screen that can add routing to a person. The original 60-case regression result and 16-case failure result remain historical evidence; the latter has since informed development. Production use is withheld. Link to the project's [current evidence](https://github.com/ellehelvig/peopleops-resolution-agent/blob/main/docs/evaluation-methodology.md) rather than treating one score as field accuracy.

Link current technical inventories rather than duplicating permanent test-count claims. Keep public content focused on the projects, with a concise introduction, professional links, accurate contribution descriptions, and accessible scope limits. Use synthetic examples only. Keep private source materials and internal review notes out of this repository.
