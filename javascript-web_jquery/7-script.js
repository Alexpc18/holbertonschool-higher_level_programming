// Wait for the DOM content to be fully loaded before executing the code
$(document).ready(function () {
  // Make an AJAX request to fetch data from the API endpoint
  $.ajax({
    url: 'https://swapi-api.hbtn.io/api/people/5/?format=json',
    type: 'GET', // HTTP method used for the reques
    success: function (response) {
      // Extract the character name from the response and
      // display it in the HTML tag DIV#character
      $('DIV#character').text(response.name);
    },
    error: function (xhr, status, error) {
      // Handle any errors that occur during the request
      console.error('Error fetching character name:', status, error);
    }
  });
});
