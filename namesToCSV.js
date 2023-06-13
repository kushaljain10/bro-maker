import fs from 'fs';
import path from 'path';

const traits = ['background', 'beard', 'dress', 'eyes', 'eyewear', 'face', 'head', 'skin']

traits.forEach(function(current) {
    let folderPath = './assets/'+current; // Replace with the actual folder path
    let csvFilePath = './assets/'+current+'/list.csv'; // Replace with the desired output CSV file path

    fs.readdir(folderPath, (err, files) => {
        if (err) {
          console.error('Error reading folder:', err);
          return;
        }
      
        const svgFiles = files.filter(file => path.extname(file).toLowerCase() === '.svg');
        const csvData = (svgFiles.join('\n')).replace(new RegExp('.svg', 'gs'), '');
      //   csvData = csvData.replace('.svg', '');
      
        fs.writeFile(csvFilePath, csvData, err => {
          if (err) {
            console.error('Error writing CSV file:', err);
            return;
          }
      
          console.log('CSV file created successfully:', csvFilePath);
        });
      });
});