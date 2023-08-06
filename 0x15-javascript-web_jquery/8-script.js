// When the document is ready
$(document).ready(function() {
  // Fetch the movie data from the URL
  $.getJSON('https://swapi-api.alx-tools.com/api/films/?format=json', function(data) {
    // Get the array of movies from the fetched data
    const movies = data.results;

    // Get the UL element with the ID "list_movies"
    const listMoviesElement = $('#list_movies');

    // Loop through each movie and create an <li> element for each title
    $.each(movies, function(index, movie) {
      const title = movie.title;
      const liElement = $('<li>').text(title);
      listMoviesElement.append(liElement);
    });
  });
});

