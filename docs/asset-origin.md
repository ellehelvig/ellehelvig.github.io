# Design asset origin inventory

Reviewed 3 November 2026. This inventory separates inspected source design from uploaded images whose full origin cannot be established. Only the original source/design contributions identified in NOTICE are covered by MIT.

| Asset | Origin evidence | Disposition |
|---|---|---|
| `favicon.svg` | Source history starts at [commit f77fd0c](https://github.com/ellehelvig/ellehelvig.github.io/commit/f77fd0c08d6cf8df3c64310b0b65e1521cf16f69). Current file contains one rectangle and two circles, with no external resource or embedded image. | Original SVG source design under MIT |
| `styles.css` | Maintainer source history, including [visual-system commit e73be74](https://github.com/ellehelvig/ellehelvig.github.io/commit/e73be74921b9451409068e7f5b207b614d3c78e7). Layout and gradient geometry are CSS. External font references are listed below. | Original source/design under MIT; font software excluded |
| `index.html` | Maintainer-authored source history; inspected current markup and resource references. No third-party template attribution found. | Original markup under MIT; personal copy and third-party resources excluded |
| `apple-touch-icon.png` | Originally uploaded as `apple-touch-icon_1.png` in [commit bd8fb69](https://github.com/ellehelvig/ellehelvig.github.io/commit/bd8fb69f85d6228920ccd74d5f5ed4ad10c49611), renamed in [commit 15f43f1](https://github.com/ellehelvig/ellehelvig.github.io/commit/15f43f194e350093cab98e21f70f21e6a28c6b0c). It visually resembles the SVG icon; generation source is not recorded. | Excluded from MIT pending origin confirmation |
| `favicon-32.png` | Uploaded in the same bd8fb69 commit. It visually resembles the SVG icon; generation source is not recorded. | Excluded from MIT pending origin confirmation |
| `og-image.png` | Uploaded as `og-image_1.png` in bd8fb69 and renamed in 15f43f1. It contains personal positioning text. Generation source is not recorded. | Entire file excluded from MIT; personal copy all rights reserved |

The new `docs/review/2026-11-03` JPEGs are Playwright screenshots from this review. All four paths are listed in [NOTICE](../NOTICE); they are mixed review records and not MIT design assets. No standalone portrait or stock-photo file is tracked. Repository history records upload attribution, not proof of the uploaded PNGs' original authorship. No imported template was identified in inspected source; uncertain materials are not assumed original.

## Third-party font dependencies

`index.html` requests Inter and Source Serif 4 through Google Fonts. Inter uses [SIL Open Font License 1.1](https://github.com/rsms/inter/blob/master/LICENSE.txt); Source Serif uses [SIL Open Font License 1.1](https://github.com/adobe-fonts/source-serif/blob/release/LICENSE.md), including its reserved font-name condition. These are external dependencies, with no vendored font binaries. They remain under their upstream terms, not MIT. System fallback fonts and third-party interface elements in screenshots also remain outside MIT.
