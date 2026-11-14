// Measurements of the artwork, in % of the 9:16 stage (x across, y down).
//
// leaf  – the paper page (or the cover board) that turns: [left = spine, top, right, bottom].
//         Every page of this set sits slightly differently, so each one is measured on its own.
// text  – printed marks lifted onto their own animated layer. Only the cover monogram is
//         animated; every other page turns with its text exactly as printed.
//         box: where to look for the ink; the ink itself is picked out by colour inside it.
//         kind: logo (written right→left, then a gold glint).
//         ellipse: limit the box to an ellipse [cx, cy, rx, ry] (the oval frame on the cover).
//         delta: how much darker than the paper a pixel must be to count as ink (default 40).
//         Further options (minRG, exclude, group) are documented in extract-text.mjs.

export const PAGE_LAYOUT = {
  '01-cover': {
    leaf: [14.8, 14.0, 95.5, 85.2],
    text: [{ box: [44.3, 40.3, 64.5, 57], ellipse: [55, 49, 13.2, 9.2], kind: 'logo', delta: 60, exclude: [[44, 40, 46.2, 46]] }],
  },
  '02-bismillah': { leaf: [7.3, 13.1, 93.6, 84.0] },
  '03-duniya': { leaf: [8.2, 14.0, 93.7, 83.9] },
  '04-invitation': { leaf: [4.1, 11.1, 94.0, 87.8] },
  '05-nikah': { leaf: [5.9, 10.2, 93.7, 84.2] },
  '06-reception': { leaf: [5.1, 9.9, 93.8, 83.9] },
  '07-awaiting': { leaf: [8.3, 14.1, 93.8, 84.3] },
};
