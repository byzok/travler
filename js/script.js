$(document).ready(function() {
	  $('.test-popup-link').magnificPopup({ 
	  type: 'image'
		// other options
	});
});


//слайдер команды
$(document).ready(function() {
 
  $("#owl-demo").owlCarousel({
    items : 4,
    lazyLoad : true,
    navigation : false
  }); 
 
});