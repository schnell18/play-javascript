const fs = require('fs');

// const files = fs.readdirSync('./');
// console.log(files);

fs.readdir('./', (err, files) => {
  if (err) {
    console.log('Error', err);
  }
  else {
    for (let file of files) {
      console.log(file);
    }
  }
});
