let readFile = require('./file.js');
readFile('./package.json').then((data) => {
   console.log(JSON.parse(data))
}).catch((err) => {
   console.log(err);
})