// Wait for the DOM content to be fully loaded before executing the code
$(document).ready(function () {
  // Attach a click event listener to the DIV#add_item element
  $('DIV#add_item').click(function () {
    // Append a new <li> element with the text "Item" to the UL.my_list
    $('UL.my_list').append('<li>Item</li>');
  });
});
