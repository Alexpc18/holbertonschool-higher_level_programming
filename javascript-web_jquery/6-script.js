// Wait for the DOM content to be fully loaded before executing the code
$(document).ready(function () {
  // Attach a click event listener to the DIV#update_header element
  $('DIV#update_header').click(function () {
    // Update the text content of the <header> element to "New Header!!!" when clicked
    $('header').text('New Header!!!');
  });
});
