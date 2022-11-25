const request = require('request');

const fetchBreedDescription = (breedName, callback) => {
  const api = 'https://api.thecatapi.com/v1/breeds/search?q=' + breedName;

  request(api, function(error, response, body) {
    if (error) {
      callback('Error!', null);
      return;
    }
    const data = JSON.parse(body);
    if (!data.length) {
      callback('Invalid breed name. Please enter a valid breed.', null);
      return;
    }
    callback(null, data[0].description);
    return data[0].description;
  });

};

module.exports = { fetchBreedDescription };