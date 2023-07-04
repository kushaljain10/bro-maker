import fs from "fs";

function generateBro(background, skin, dress, head, beard, face, eyes, eyewear) {
    const inputSVGs = ['./assets/background/'+background+'.svg', './assets/skin/'+skin+'.svg', './assets/head/'+head+'.svg', './assets/dress/'+dress+'.svg', './assets/beard/'+beard+'.svg', './assets/face/'+face+'.svg', './assets/eyes/'+eyes+'.svg', './assets/eyewear/'+eyewear+'.svg'];

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
      
        fs.writeFileSync(
            "./random/" + background + " " + skin + " " + dress + " " + head + " " + beard + " " + face + " " + eyes + " " + eyewear + ".svg",
            mergedSVG,
            "utf8"
          );
}

const traitNames = ["background", "skin", "dress", "head", "beard", "face", "eyes", "eyewear"];
let traitValues = [];

  const backgrounds = ["0", "1", "10", "11", "3", "4", "5", "6", "7", "9"];
  const skins = ["tiger", "dalmation", "panda", "alien", "avatar", "ape", "gold", "machine", "plain", "dmt", "ink", "trippy", "zombie"];
  const dresses = ["0", "1", "10", "11", "12", "13", "14", "15", "16", "17", "18", "19", "2", "20", "21", "22", "23", "24", "25", "26", "27", "28", "29", "3", "30", "31", "32", "33", "34", "35", "36", "37", "38", "39", "4", "40", "41", "42", "43", "44", "45", "46", "47", "48", "49", "5", "50", "51", "52", "53", "54", "55", "56", "57", "58", "59", "6", "60", "61", "62", "63", "64", "65", "66", "67", "68", "69", "7", "70", "71", "72", "8", "9", "none"];
  const heads = ["0", "1", "10", "11", "12", "13", "14", "15", "16", "17", "18", "19", "2", "20", "21", "22", "23", "24", "25", "26", "27", "28", "29", "3", "30", "31", "32", "33", "34", "35", "36", "37", "38", "39", "4", "40", "41", "42", "43", "44", "45", "46", "48", "49", "5", "50", "51", "52", "53", "54", "55", "56", "57", "58", "59", "6", "60", "61", "62", "63", "64", "65", "66", "67", "68", "69", "7", "70", "71", "8", "9", "none"];
  const beards = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "none"];
  const faces = ["0", "1", "10", "11", "12", "13", "14", "15", "16", "17", "18", "19", "2", "3", "5", "6", "7", "8", "9"];
  const eyes = ["normal", "red-laser", "worried", "dead", "blue-laser", "happy", "anger", "blink", "heart-eyes", "hynotised", "stare-left-right", "stare", "surprised", "suspicious", "wink"];
  const eyewears = ["0", "1", "10", "11", "12", "13", "14", "15", "16", "17", "2", "3", "4", "5", "6", "7", "8", "9", "none"];

//   let all_dicks = []
  let frequency = {}
  for(let i = 0; i<600; i++) {
    var background = backgrounds[Math.floor(Math.random() * backgrounds.length)];
    var skin = skins[Math.floor(Math.random() * skins.length)];
    var dress = dresses[Math.floor(Math.random() * dresses.length)];
    if(dress == "18" || dress == "19") {
        var head = "none"
    } else {
        var head = heads[Math.floor(Math.random() * heads.length)];
    }
    var beard = beards[Math.floor(Math.random() * beards.length)];
    var face = faces[Math.floor(Math.random() * faces.length)];
    var eye = eyes[Math.floor(Math.random() * eyes.length)];
    if (eye == "red-laser" || eye == "blue-laser") {
        var eyewear = "none";
    } else {
        var eyewear = eyewears[Math.floor(Math.random() * eyewears.length)];
    }
    
    generateBro(background, skin, dress, head, beard, face, eye, eyewear);

}
// if (frequency[face]) {
//     frequency[face]++;
// } else {
//     frequency[face] = 1;
// }
//   const header = Object.keys(frequency).join(',') + '\n';
//   const rows = Object.values(frequency).join(',') + '\n';

//   const file = 'data.csv';

//   fs.appendFile(file, header+rows, err => {
//     if (err) {
//       console.error('Error writing to CSV file:', err);
//     } else {
//       console.log('Data appended to CSV file successfully.');
//     }
//   });