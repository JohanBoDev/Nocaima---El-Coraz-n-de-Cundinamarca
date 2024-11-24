const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

// Carpeta de entrada (donde están tus imágenes originales)
const inputDir = './assets/img';
// Carpeta de salida (donde se guardarán las imágenes optimizadas)
const outputDir = './assets/img/optimizadas';

// Crear la carpeta de salida si no existe
if (!fs.existsSync(outputDir)) {
  fs.mkdirSync(outputDir, { recursive: true });
}

// Leer las imágenes de la carpeta de entrada
fs.readdirSync(inputDir).forEach((file) => {
  const inputFilePath = path.join(inputDir, file);

  // Filtrar solo archivos PNG y JPG
  if (/\.(png|jpe?g)$/i.test(file)) {
    const outputFilePath = path.join(outputDir, `${path.parse(file).name}.webp`);

    // Convertir a formato WebP con calidad 80
    sharp(inputFilePath)
      .toFormat('webp', { quality: 80 })
      .toFile(outputFilePath)
      .then(() => {
        console.log(`Imagen convertida: ${file} -> ${outputFilePath}`);
      })
      .catch((err) => {
        console.error(`Error al convertir ${file}:`, err);
      });
  }
});
