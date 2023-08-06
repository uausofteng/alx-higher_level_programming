// When the user clicks on DIV#add_item
$('#add_item').on('click', function() {
  // Create a new <li> element with the text "Item"
  const newLiElement = $('<li>Item</li>');

  // Append the new <li> element to the UL.my_list
  $('ul.my_list').append(newLiElement);
});

