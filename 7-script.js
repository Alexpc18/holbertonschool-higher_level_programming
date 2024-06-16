// Fetch data from the specified URL
fetch('https://swapi-api.hbtn.io/api/films/?format=json')
  // Process the response using a promise
  .then(function (response) {
    // Parse the response as JSON and return the result
    return response.json();
  })
  // Process the JSON data using another promise
  .then(function (data) {
    // Select the element with the id 'list_movies' and assign it to the variable moviesList
    const moviestlist = document.getElementById('list_movies');
    // Iterate over each movie in the received data
    data.results.forEach(function (movie) {
      // Create a new <li> element for each movie
      const listItem = document.createElement('li');
      // Set the text content of the new <li> element to the title of the current movie
      listItem.textContent = movie.title;
      // Append the new <li> element to the list of movies
      moviestlist.appendChild(listItem);
    });
  })
  // Catch and handle any errors that occur during the fetch operation
  .catch(function (error) {
    // Log the error to the console
    console.error('Error fetching movies', error);
  });
