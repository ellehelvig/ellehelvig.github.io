// Install @resvg/resvg-js in a temporary tool directory, then set NODE_PATH to its node_modules.
// SVG sources are authoritative; system-font rendering can differ across machines.
const {Resvg} = require('@resvg/resvg-js');
const fs = require('node:fs');
const path = require('node:path');
const root = path.resolve(__dirname, '..');
for (const [source,target,width] of [['favicon.svg','favicon-32.png',32],['favicon.svg','apple-touch-icon.png',180],['social-preview.svg','og-image.png',1200]]) {
  const svg=fs.readFileSync(path.join(root,source));
  const rendered=new Resvg(svg,{fitTo:{mode:'width',value:width},font:{loadSystemFonts:true}}).render();
  fs.writeFileSync(path.join(root,target),rendered.asPng());
}
