$(document).ready(function(){
    $('.button-collapse').sideNav({
      menuWidth: 250, // Default is 300
      edge: 'left', // Choose the horizontal origin
      closeOnClick: true, // Closes side-nav on <a> clicks, useful for Angular/Meteor
      draggable: true // Choose whether you can drag to open on touch screens
    }
  );
  $('.datepicker').pickadate({
    selectMonths: true, // Creates a dropdown to control month
    selectYears: 15 // Creates a dropdown of 15 years to control year
  });
  $('.popup-overlay, .close-area, .close-btn').click(function(){
    $('.popup, .popup-overlay').addClass('hide');
  });
  $('#open-popup').click(function(){
    $('.popup, .popup-overlay').removeClass('hide');
  });
});