// Wait for the DOM content to be fully loaded before executing the code
$(document).ready(function () {
  // add a click event listener to the DIV#red_header element
  $('DIV#red_header').click(function () {
    // Update the text color of the <header> element to red (#FF0000)
    $('header').css('color', '#FF0000');
  });
});
