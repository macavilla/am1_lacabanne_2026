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
};

const ARC_GRANDE = {
  x: CANVAS_SIZE * .5,
  y: CANVAS_SIZE * .5,
  w: CANVAS_SIZE * .6,
  h: CANVAS_SIZE * .6,
  start: 0,
  end: 270
};
const ARC_IZQ = {
  x: CANVAS_SIZE * .2,
  y: CANVAS_SIZE * .5,
  w: CANVAS_SIZE * .2,
  h: CANVAS_SIZE * .2,
  start: 0,
  end: 180
};
const ARC_MASK = {
  x: CANVAS_SIZE * .80,
  y: CANVAS_SIZE * .4969,
  w: ARC_GRANDE.w * 1.4,
  h: ARC_GRANDE.h * 1.4,
  start: 180,
  end: 180 + 45
};

const LINEA_AJUSTE = 3;
const LINEA_CORTA = {
  x1: ARC_IZQ.x - LINEA_AJUSTE, 
  y1: ARC_IZQ.y, 
  x2: (ARC_IZQ.x + ARC_IZQ.w / 2) + LINEA_AJUSTE, 
  y2: ARC_IZQ.y 
};

const LINEA_LARGA = {
  x1: (ARC_GRANDE.x - CANVAS_SIZE * .12) - LINEA_AJUSTE, 
  y1: ARC_GRANDE.y, 
  x2: (ARC_GRANDE.x + ARC_GRANDE.w / 2) + LINEA_AJUSTE, 
  y2: ARC_GRANDE.y 
};

function setup() {
  createCanvas(CANVAS_SIZE, CANVAS_SIZE);
  background(COLOR.rojo);
  angleMode(DEGREES)
  // noLoop(); // para sketches estáticos
  strokeCap(SQUARE);
  strokeWeight(7);
  stroke(COLOR.blanco);
  fill(COLOR.rojo);
  // noFill()
  // arc(x, y, w, h, start, end);
  // line(x1, y1, x2, y2)
  
  // ¸.·´¯`·.¸.·´¯`·.¸.·´¯`·.¸.·´¯`·.¸.·´¯`·.¸.·´¯`·.¸.·´¯`·.¸
  // ARCOS
  // ¸.·´¯`·.¸.·´¯`·.¸.·´¯`·.¸.·´¯`·.¸.·´¯`·.¸.·´¯`·.¸.·´¯`·.¸
  
  arc(ARC_GRANDE.x, ARC_GRANDE.y, ARC_GRANDE.w, ARC_GRANDE.h, ARC_GRANDE.start, ARC_GRANDE.end);
  arc(ARC_IZQ.x, ARC_IZQ.y, ARC_IZQ.w, ARC_IZQ.h, ARC_IZQ.start, ARC_IZQ.end);
  arc(ARC_MASK.x, ARC_MASK.y, ARC_MASK.w, ARC_MASK.h, ARC_MASK.start, ARC_MASK.end, OPEN);
  
  // ¸.·´¯`·.¸.·´¯`·.¸.·´¯`·.¸.·´¯`·.¸.·´¯`·.¸.·´¯`·.¸.·´¯`·.¸
  // LINEAS
  // ¸.·´¯`·.¸.·´¯`·.¸.·´¯`·.¸.·´¯`·.¸.·´¯`·.¸.·´¯`·.¸.·´¯`·.¸
  line(LINEA_CORTA.x1, LINEA_CORTA.y1,LINEA_CORTA.x2, LINEA_CORTA.y2);
  line(LINEA_LARGA.x1, LINEA_LARGA.y1,LINEA_LARGA.x2, LINEA_LARGA.y2);

}

function draw() {

}

/**
 * NOTAS AL PIE:
 */