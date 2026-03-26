/**
 * AM1 - TP Nº[X]: [TITULO]
 * Restricciones: 
 * - Lienzo: 512x512px
 * - Color: Escala de grises (8-bit, 0-255)
 * - Primitivas 2D, Bézier, Vertex solamente.
 * - Sin 3D, WebGL ni imágenes (bitmaps).
 */

// --- CONFIG ---
const CANVAS_SIZE = 512;
const MODO_GRISES = 255;

function setup() {
  createCanvas(CANVAS_SIZE, CANVAS_SIZE);
  colorMode(RGB, MODO_GRISES); 
  background(MODO_GRISES);
  // noLoop(); // para sketches estáticos
}

function draw() {

}

/**
 * NOTAS AL PIE:
 */