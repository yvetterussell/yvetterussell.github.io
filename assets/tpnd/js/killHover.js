$( document ).ready(function() {
    var isTouchDevice = 'ontouchstart' in document.documentElement;

    if (isTouchDevice == true) {
        $('html').addClass('is-touch');
    } else {
        $('html').addClass('not-touch');
    }
});