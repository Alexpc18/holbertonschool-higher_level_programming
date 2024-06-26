// Wait for the DOM content to be fully loaded before executing the code
$(document).ready(function () {
  // Make a GET request to the API endpoint
  $.ajax({
    url: 'https://swapi-api.hbtn.io/api/films/?format=json',
    type: 'GET',
    success: function (response) {
      // Extract the list of movies from the response
      const movies = response.results;

      // Iterate over each movie and append its title to the list
      $.each(movies, function (index, movie) {
        // Append the movie title as a list item to the UL#list_movies element
        $('<li>').text(movie.title).appendTo('UL#list_movies');
      });
    },
    error: function (xhr, status, error) {
      // Handle any errors that occur during the request
      console.error('Error fetching movies:', status, error);
    }
  });
});
