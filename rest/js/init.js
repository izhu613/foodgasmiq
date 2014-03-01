$(document).ready(function() {

	$('.fa-heart-o').hover(
		function(){ $(this).addClass('fa-heart').removeClass('fa-heart-o'); },
		function(){ $(this).removeClass('fa-heart').addClass('fa-heart-o'); }
	);

    function loadLazyImgs() {
        var curPos=$(window).scrollTop()+$(window).height();
        $('img').each(function(){
            var $img=$(this);
            if($img.data('src')){
                if($img.offset().top<curPos) {
                    $img.attr('src',$img.data('src')).data('src','');
                }
            }
        });
    }

	function scrlRest(){
		if ($(window).scrollTop() < $('.rest').offset().top)
			$('.rest-info').css({ top: $('.rest').offset().top - $(window).scrollTop()});
		else
			$('.rest-info').css({ top: 0 });

        loadLazyImgs();
	}

    function scrlGlobal(){
        loadLazyImgs();
    }

    if($('.rest').length) {
        $(window).scroll(scrlRest);
        scrlRest();
    }

    if($('.global').length) {
        $(window).scroll(scrlGlobal);
        scrlGlobal();
    }
});