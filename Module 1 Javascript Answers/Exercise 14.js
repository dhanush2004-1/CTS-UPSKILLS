$(document).ready(function() {
  // Click handler using jQuery
  $('#registerBtn').click(function() {
    // Toggle event card visibility with fade effects
    if ($('#eventCard').is(':visible')) {
      $('#eventCard').fadeOut();
    } else {
      $('#eventCard').fadeIn();
    }
  });
});
