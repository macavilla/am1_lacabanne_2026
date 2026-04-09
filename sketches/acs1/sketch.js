/**
 * AM1 - ACS1: Waldemar Cordeiro
 * Restricciones: 
 * - Lienzo: 512x512px
 * - Primitivas 2D, Bézier, Vertex solamente.
 * - Sin 3D, WebGL ni imágenes (bitmaps).
 */

// --- CONFIG ---
const CANVAS_SIZE = 512;
const COLOR = {
  rojo: "#aa3625",
  blanco: "#dfd4c7"
}

const ARC_GRANDE = {
  x: CANVAS_SIZE * .5,
  y: CANVAS_SIZE * .5,
  w: CANVAS_SIZE * .6,
  h: CANVAS_SIZE * .6,
  start: 0,
  end: 270
}
const ARC_IZQ = {
  x: CANVAS_SIZE * .2,
  y: CANVAS_SIZE * .5,
  w: CANVAS_SIZE * .2,
  h: CANVAS_SIZE * .2,
  start: 0,
  end: 180
}
const ARC_MASK = {
  x: CANVAS_SIZE * .82,
  y: CANVAS_SIZE * .5,
  w: ARC_GRANDE.w * 1.4,
  h: ARC_GRANDE.h * 1.4,
  start: 180,
  end: 180 + 60
}
function setup() {
  createCanvas(CANVAS_SIZE, CANVAS_SIZE);
  background(COLOR.rojo);
  angleMode(DEGREES)
  // noLoop(); // para sketches estáticos
  strokeCap(SQUARE);
  strokeWeight(7);
  stroke(COLOR.blanco);
  fill(COLOR.rojo)
  // noFill()
  // arc(x, y, w, h, start, end);

  arc(ARC_GRANDE.x, ARC_GRANDE.y, ARC_GRANDE.w, ARC_GRANDE.h, ARC_GRANDE.start, ARC_GRANDE.end);
  arc(ARC_IZQ.x, ARC_IZQ.y, ARC_IZQ.w, ARC_IZQ.h, ARC_IZQ.start, ARC_IZQ.end);
  arc(ARC_MASK.x, ARC_MASK.y, ARC_MASK.w, ARC_MASK.h, ARC_MASK.start, ARC_MASK.end);

}

function draw() {

}

/**
 * NOTAS AL PIE:
 */