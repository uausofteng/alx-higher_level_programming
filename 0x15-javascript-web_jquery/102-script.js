<!DOCTYPE html>
<html>
<head>
  <title>Sample Page</title>
  <script src="https://code.jquery.com/jquery-3.6.0.min.js"></script>
  <script>
    $(document).ready(function() {
      // When the user clicks on INPUT#btn_translate
      $('#btn_translate').on('click', function() {
        // Get the language code entered by the user
        const languageCode = $('#language_code').val();

        // Fetch the translation data from the API
        $.getJSON(`https://www.fourtonfish.com/hellosalut/hello/${languageCode}/`, function(data) {
          // Get the translation of "Hello" from the fetched data
          const helloTranslation = data.hello;

          // Display the translation in the HTML tag DIV#hello
          $('#hello').text(helloTranslation);
        });
      });
    });
  </script>
</head>
<body>
  <header>
    <!-- Your header content goes here -->
  </header>
  <input type="text" id="language_code" placeholder="Enter language code (ex: es, fr, en etc.)">
  <input type="button" id="btn_translate" value="Translate">
  <div id="hello">
    <!-- Translated "Hello" will be displayed here -->
  </div>
  <!-- Other content of the page -->
</body>
</html>

