<!DOCTYPE html>
<html>
<head>
  <title>Sample Page</title>
  <script src="https://code.jquery.com/jquery-3.6.0.min.js"></script>
  <script>
    $(document).ready(function() {
      // When the user clicks on DIV#add_item
      $('#add_item').on('click', function() {
        // Create a new <li> element with the text "Item"
        const newLiElement = $('<li>').text('Item');
        // Append the new <li> element to the UL.my_list
        $('ul.my_list').append(newLiElement);
      });

      // When the user clicks on DIV#remove_item
      $('#remove_item').on('click', function() {
        // Remove the last <li> element from the UL.my_list
        $('ul.my_list li:last-child').remove();
      });

      // When the user clicks on DIV#clear_list
      $('#clear_list').on('click', function() {
        // Remove all <li> elements from the UL.my_list
        $('ul.my_list').empty();
      });
    });
  </script>
</head>
<body>
  <header>
    <!-- Your header content goes here -->
  </header>
  <div id="add_item">Add Item</div>
  <div id="remove_item">Remove Item</div>
  <div id="clear_list">Clear List</div>
  <ul class="my_list">
    <!-- List items will be added/removed here -->
  </ul>
  <!-- Other content of the page -->
</body>
</html>

