// When the user clicks on DIV#update_header
$('#update_header').on('click', function() {
  // Get the <header> element
  const headerElement = $('header');

  // Update the text of the <header> element to "New Header!!!"
  headerElement.text('New Header!!!');
});

