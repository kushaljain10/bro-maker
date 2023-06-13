import fs from 'fs';

export function generateBro(req, res) {

  const inputSVGs = ['./assets/background/'+req.query.background+'.svg', './assets/skin/'+req.query.skin+'.svg', './assets/head/'+req.query.head+'.svg', './assets/dress/'+req.query.dress+'.svg', './assets/beard/'+req.query.beard+'.svg', './assets/face/'+req.query.face+'.svg', './assets/eyes/'+req.query.eyes+'.svg', './assets/eyewear/'+req.query.eyewear+'.svg'];

    // Function to read SVG file contents
const readSVGFile = (filePath) => {
  return fs.readFileSync(filePath, 'utf8');
};

  let mergedSVG = '';

  // Iterate over input SVG files
  for (let i = 0; i < inputSVGs.length; i++) {
    // Read SVG file contents
    const svgContent = readSVGFile(inputSVGs[i]);

    // Append the current SVG content as a new layer
    mergedSVG += `<g id="layer${i + 1}">${svgContent}</g>`;
  }

  // Wrap the merged layers in an SVG element
  mergedSVG = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 500 500">${mergedSVG}</svg>`;

  // document.getElementById('result').innerHTML = mergedSVG;
  res.status(200).json({
    bro: mergedSVG, 	// Data to be returned as JSON object.
  });
  // return mergedSVG;
  // console.log('SVG files merged successfully!');
};