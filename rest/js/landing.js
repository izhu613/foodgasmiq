function slideSwitch() {
    var $active = $('.bg > .active');
    var $next = $active.next();
    if( $next.length === 0 ) {
         $next = $active.prevAll().last();
    }
    $next.addClass('active');

    $active.removeClass('active');
}
$(document).ready(function() {
    setInterval( "slideSwitch()", 5000 );
});