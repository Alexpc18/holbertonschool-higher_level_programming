// Wait for the DOM content to be fully loaded before executing the code
document.addEventListener('DOMContentLoaded', function () {
  // Perform a request to fetch data from the specified URL
  fetch('https://hellosalut.stefanbohacek.dev/?lang=fr')
    // Process the response using a promise
    .then(function (response) {
      // Parse the response as JSON and return the result
      return response.json();
    })
    // Process the JSON data using another promise
    .then(function (data) {
      // Update the text content of the element with the id 'hello'
      // to the value of the 'hello' property in the received data
      document.getElementById('hello').textContent = data.hello;
    })
    // Catch and handle any errors that occur during the fetch operation
    .catch(function (error) {
      // Log the error to the console
      console.error('Error fetching translation', error);
    });
});
