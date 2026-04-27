/**
 * AM1 - ACS1: Waldemar Cordeiro
 * Restricciones: 
 * - Lienzo: 512x512px
 * - Primitivas 2D, Bézier, Vertex solamente.
 * - Sin 3D, WebGL ni imágenes (bitmaps).
 */

// --- CONFIG ---
const CANVAS_SIZE = 512;
const COLOR_ROJO = "#aa3625";
const COLOR_BLANCO = "#dfd4c7";

// ARC_GRANDE
const ARC_GRANDE_x = CANVAS_SIZE * .5;
const ARC_GRANDE_y = CANVAS_SIZE * .5;
const ARC_GRANDE_w = CANVAS_SIZE * .6;
const ARC_GRANDE_h = CANVAS_SIZE * .6;
const ARC_GRANDE_start = 0;
const ARC_GRANDE_end = 270;

// ARC_IZQ
const ARC_IZQ_x = CANVAS_SIZE * .2;
const ARC_IZQ_y = CANVAS_SIZE * .5;
const ARC_IZQ_w = CANVAS_SIZE * .2;
const ARC_IZQ_h = CANVAS_SIZE * .2;
const ARC_IZQ_start = 0;
const ARC_IZQ_end = 180;

// ARC_MASK
const ARC_MASK_x = CANVAS_SIZE * .80;
const ARC_MASK_y = CANVAS_SIZE * .4969;
const ARC_MASK_w = ARC_GRANDE_w * 1.4;
const ARC_MASK_h = ARC_GRANDE_h * 1.4;
const ARC_MASK_start = 180;
const ARC_MASK_end = 180 + 45;

const LINEA_AJUSTE = 3;

// LINEA_CORTA
const LINEA_CORTA_x1 = ARC_IZQ_x - LINEA_AJUSTE;
const LINEA_CORTA_y1 = ARC_IZQ_y;
const LINEA_CORTA_x2 = (ARC_IZQ_x + ARC_IZQ_w / 2) + LINEA_AJUSTE;
const LINEA_CORTA_y2 = ARC_IZQ_y;

// LINEA_LARGA
const LINEA_LARGA_x1 = (ARC_GRANDE_x - CANVAS_SIZE * .12) - LINEA_AJUSTE;
const LINEA_LARGA_y1 = ARC_GRANDE_y;
const LINEA_LARGA_x2 = (ARC_GRANDE_x + ARC_GRANDE_w / 2) + LINEA_AJUSTE;
const LINEA_LARGA_y2 = ARC_GRANDE_y;

function setup() {
  createCanvas(CANVAS_SIZE, CANVAS_SIZE);
  background(COLOR_ROJO);
  angleMode(DEGREES)
  // noLoop(); // para sketches estáticos
  strokeCap(SQUARE);
  strokeWeight(7);
  stroke(COLOR_BLANCO);
  fill(COLOR_ROJO);
  // noFill()
  // arc(x, y, w, h, start, end);
  // line(x1, y1, x2, y2)
  
  // ¸.·´¯`·.¸.·´¯`·.¸.·´¯`·.¸.·´¯`·.¸.·´¯`·.¸.·´¯`·.¸.·´¯`·.¸
  // ARCOS
  // ¸.·´¯`·.¸.·´¯`·.¸.·´¯`·.¸.·´¯`·.¸.·´¯`·.¸.·´¯`·.¸.·´¯`·.¸
  
  arc(ARC_GRANDE_x, ARC_GRANDE_y, ARC_GRANDE_w, ARC_GRANDE_h, ARC_GRANDE_start, ARC_GRANDE_end);
  arc(ARC_IZQ_x, ARC_IZQ_y, ARC_IZQ_w, ARC_IZQ_h, ARC_IZQ_start, ARC_IZQ_end);
  arc(ARC_MASK_x, ARC_MASK_y, ARC_MASK_w, ARC_MASK_h, ARC_MASK_start, ARC_MASK_end, OPEN);
  
  // ¸.·´¯`·.¸.·´¯`·.¸.·´¯`·.¸.·´¯`·.¸.·´¯`·.¸.·´¯`·.¸.·´¯`·.¸
  // LINEAS
  // ¸.·´¯`·.¸.·´¯`·.¸.·´¯`·.¸.·´¯`·.¸.·´¯`·.¸.·´¯`·.¸.·´¯`·.¸
  line(LINEA_CORTA_x1, LINEA_CORTA_y1, LINEA_CORTA_x2, LINEA_CORTA_y2);
  line(LINEA_LARGA_x1, LINEA_LARGA_y1, LINEA_LARGA_x2, LINEA_LARGA_y2);
  
}

function draw() {
  
}

/**
 * NOTAS AL PIE:
 */
