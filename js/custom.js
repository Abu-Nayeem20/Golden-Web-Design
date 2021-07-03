(function($) {
	'use strict';

$(window).scroll(function() {
	
	var goTop = $(window).scrollTop();

 if (goTop > 600) {

 	$(".scrll").css({'opacity' :'1'});
 }
 
 else {
 	$(".scrll").css({'opacity' :'0'});
 }

});

$(".scrll").on('click', function () {
	
	$('html').animate({'scrollTop' : '0'},2000);
});



})(jQuery);