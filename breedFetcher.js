//process.argv = args.slice(2);
//return details on cat breeds from thecatapi
const breed = process.argv[2];
const request = require('request');
const fetchBreedDescription = function(breedName /*callback*/) {
  
  const url = `https://api.thecatapi.com/v1/breeds/search?q=${breedName}`;
  request(url, (err, resp, body) => {
  //console.log(data);
  //console.log(typeof data);
  
    if (err){
  //  callback(`Failed the request, details: ${err}`,null);
        console.log(`Failed the request, details: ${err}`)
  };
    const data = JSON.parse(body); //parses the body text into a JSON string
  //console.log(data);
  //console.log(typeof data);
  //const breed = data[0]; //name for all the data that appears after struct without adding anything
  
if (breed) {
  /*callback(null, breed[0].description); */ //null as first argument if there's no error
console.log(data[0].description)
} else {
  console.log(`failed to find breed`)
  /*callback(`Failed to find breed ${breedName}`,null);*/
      }
    });
    };
    fetchBreedDescription(breed);
//module.exports = { fetchBreedDescription };