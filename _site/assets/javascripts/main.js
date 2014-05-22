$('.slides').superslides({
    slide_easing: 'easeInOutCubic',
    slide_speed: 800,
    pagination: true,
    hashchange: false,
    scrollable: true,
    inherit_width_from: '#slides',
    inherit_height_from: '#slides'
});

$('#trigger-overlay').click(function(){
    $('#overlay-menu').addClass('open')
});

$('#overlay-close').click(function(){
    $('#overlay-menu').removeClass('open')
});