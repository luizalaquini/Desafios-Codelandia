src="https://code.jquery.com/jquery-3.6.0.min.js"

$(document).ready(function() {
    $('input').on({
        'click': function() {
            let src = ($(this).attr('src') === 'style/images/heart.png') ?
            'style/images/heart-full.png' :
            'style/images/heart.png';
            $(this).attr('src', src);
        }
    });
});
