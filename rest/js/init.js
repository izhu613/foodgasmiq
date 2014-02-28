$(document).ready(function()
{
	
	$(window).scroll(scrl);
	scrl();

	$('.fa-heart-o').hover(
		function(){ $(this).addClass('fa-heart').removeClass('fa-heart-o'); },
		function(){ $(this).removeClass('fa-heart').addClass('fa-heart-o'); }
	);
	
	function scrl(){
		if ($('.rest').length) {
			if ($(window).scrollTop() < $('.rest').offset().top)
				$('.rest-info').css({ top: $('.rest').offset().top - $(window).scrollTop()});
			else
				$('.rest-info').css({ top: 0 });
		}
	}
});