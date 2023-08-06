// When the user clicks on DIV#toggle_header
$('#toggle_header').on('click', function() {
  // Get the <header> element
  const headerElement = $('header');

  // Check if the current class is "red" or "green" and toggle it accordingly
  if (headerElement.hasClass('red')) {
    headerElement.removeClass('red').addClass('green');
  } else if (headerElement.hasClass('green')) {
    headerElement.removeClass('green').addClass('red');
  } else {
    // If the header element has no class, add the class "red" by default
    headerElement.addClass('red');
  }
});

