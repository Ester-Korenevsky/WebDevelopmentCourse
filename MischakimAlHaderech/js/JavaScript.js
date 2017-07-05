$(document).ready(function () {
    $('.accordion').find('.accordion-toggle').click(function () {
        $(this).next().slideToggle('600');
        $(".accordion-content").not($(this).next()).slideUp('600');
    });
    $('.accordion-toggle').on('click', function () {
        // $(this).toggleClass('active').parent().siblings().children('h3').removeClass('active');
        $('.accordion-toggle').removeClass('active');
        $(this).toggleClass('active');
    });
});
