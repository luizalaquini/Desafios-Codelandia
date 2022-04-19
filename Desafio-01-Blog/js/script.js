$(document).ready(function() {
    $('input').on({
        'click': function() {
            let src = ($(this).attr('src') === 'css/images/heart.png') ?
            'css/images/heart-full.png' :
            'css/images/heart.png';
            $(this).attr('src', src);
        }
    });
});