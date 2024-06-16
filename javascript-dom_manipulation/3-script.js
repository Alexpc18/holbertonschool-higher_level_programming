// Select the element with the id 'toggle_header' and assign it to the variable toggleHeader
const toggleHeader = document.getElementById('toggle_header');

// Add an event listener for the 'click' event to the toggleHeader element
toggleHeader.addEventListener('click', function () {
  // Select the <header> element in the document and assign it to the variable header
  const header = document.querySelector('header');

  // Check if the header element has the class 'red'
  if (header.classList.contains('red')) {
    // If it has the class 'red', remove 'red' and add 'green'
    header.classList.remove('red');
    header.classList.add('green');
  } else {
    // If it doesn't have the class 'red', remove 'green' and add 'red'
    header.classList.remove('green');
    header.classList.add('red');
  }
});
