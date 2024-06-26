// Wait for the DOM content to be fully loaded before executing the code
$(document).ready(function () {
  // Add a click event listener to the DIV#red_header element
  $('DIV#red_header').click(function () {
    // Add the 'red' class to the <header> element when the DIV#red_header is clicked
    $('header').addClass('red');
  });
});
