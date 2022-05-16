const fs = require('fs');

function copy() {
  [
    {
      source: './src/mime-types.json', destination: './dist/mime-types.json'
    }
  ].forEach(file => {
    console.log(`copying ${file.source} to ${file.destination}`);
    fs.copyFileSync(file.source, file.destination)
  });
}

copy();
