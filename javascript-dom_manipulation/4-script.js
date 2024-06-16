// Select the element with the id 'add_item' and assign it to the variable addItem
const addItem = document.getElementById('add_item');

// Add an event listener for the 'click' event to the addItem element
addItem.addEventListener('click', function () {
  // Create a new <li> element and assign it to the variable newItem
  const newItem = document.createElement('li');

  // Set the text content of the new <li> element to 'Item'
  newItem.innerText = 'Item';

  // Append the new <li> element to the <ul> element with the class 'my_list'
  document.querySelector('.my_list').appendChild(newItem);
});
