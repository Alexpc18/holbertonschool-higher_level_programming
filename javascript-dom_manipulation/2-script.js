// Selects the element with the id 'red_header' and assigns it to the header variable
const header = document.getElementById('red_header');
// Add an event listener for the 'click' event to the header element
header.addEventListener('click', function () {
  // When the header element is clicked, it looks for the <header> element in the document and adds the class 'red' to it
  document.querySelector('header').classList.add('red');
});
