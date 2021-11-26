var i = 9;
$wrap = $('#wrap');

function countdown() {
    if (i < 0) {
        i = 9;
        setTimeout(function() {
            countdown();
        }, 2000);
        return false;
    }
    $wrap.removeAttr('class');
    setTimeout(function() {
        $wrap.addClass('wrap-' + i);
        setTimeout(function() {
            i--;
            countdown();
        }, 1000);
    }, 600);
}
countdown();