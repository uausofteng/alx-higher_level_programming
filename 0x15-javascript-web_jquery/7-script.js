// When the document is ready
$(document).ready(function() {
  // Fetch the character data from the URL
  $.getJSON('https://swapi-api.alx-tools.com/api/people/5/?format=json', function(data) {
    // Get the character name from the fetched data
    const characterName = data.name;

    // Display the character name in the HTML tag DIV#character
    $('#character').text(characterName);
  });
});

