// When the document is ready
$(document).ready(function() {
  // Fetch the translation data from the URL
  $.getJSON('https://fourtonfish.com/hellosalut/?lang=fr', function(data) {
    // Get the translation of "hello" from the fetched data
    const helloTranslation = data.hello;

    // Display the translation in the HTML tag DIV#hello
    $('#hello').text(helloTranslation);
  });
});

