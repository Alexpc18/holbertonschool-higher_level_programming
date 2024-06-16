// Select the element with the id 'update_header' and assign it to the variable updateHeader
const updateHeader = document.getElementById('update_header');
// Add an event listener for the 'click' event to the updateHeader element
updateHeader.addEventListener('click', function () {
  // Select the <header> element in the document and assign it to the variable header
  const header = document.querySelector('header');
  // Change the text content of the header element to 'New Header!!!'
  header.textContent = 'New Header!!!';
});
