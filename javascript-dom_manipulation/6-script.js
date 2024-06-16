// Fetch data from the specified URL
fetch('https://swapi-api.hbtn.io/api/people/5/?format=json')
// Process the response using a promise
  .then(function (response) {
    // Parse the response as JSON and return the result
    return response.json();
  })
// Process the JSON data using another promise
  .then(function (data) {
    // Update the text content of the element with id 'character'
    // to the value of the 'name' property in the received data
    document.getElementById('character').textContent = data.name;
  })
// Catch and handle any errors that occur during the fetch operation
  .catch(function (error) {
    // Log the error to the console
    console.error('Error in request', error);
  });
