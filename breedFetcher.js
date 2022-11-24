const request = require('request');
let arg = process.argv.slice(2);

const fetchBreedDescription = (arg) => {

  const api = 'https://api.thecatapi.com/v1/breeds/search?q=' + arg;

  request(api, function(error, response, body) {

    if (error) {
      console.log("Error!");
      process.exit();
    }

    const data = JSON.parse(body);

    if (!data.length) {
      console.log("Invalid breed name.");
      process.exit();
    }

    console.log(data[0].description);

  });

};


fetchBreedDescription(arg);