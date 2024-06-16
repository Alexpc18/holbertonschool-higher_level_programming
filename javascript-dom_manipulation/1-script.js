// Select the header element with id 'red_header'
const header = document.getElementById('red_header');

// Add an event listener for the 'click' event to the header element
header.addEventListener('click', function () {
  // When the header element is clicked, it changes the text color to red (#FF0000)
  header.style.color = '#FF0000';
});
