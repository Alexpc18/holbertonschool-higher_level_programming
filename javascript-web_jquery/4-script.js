// Wait for the DOM content to be fully loaded before executing the code
$(document).ready(function () {
  // Add a click event listener to the DIV#toggle_header element
  $('DIV#toggle_header').click(function () {
    // Toggle the class of the <header> element between 'red' and 'green'
    $('header').toggleClass('red green');
  });
});
