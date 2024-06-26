// Wait for the DOM content to be fully loaded before executing the code
$(document).ready(function () {
  // Make a GET request to the specified URL
  $.ajax({
    url: 'https://hellosalut.stefanbohacek.dev/?lang=fr',
    typt: 'GET', // Specify the request type as GET
    success: function (response) {
      // Update the text content of the HTML element
      // with ID 'hello' with the response data
      $('DIV#hello').text(response.hello);
    },
    error: function (xhr, status, error) {
      // Handle any errors that occur during the request
      console.error('Error fetching translation:', status, error);
    }
  });
});
