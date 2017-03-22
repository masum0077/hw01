$( document ).ready(function() {
    $('footer>section:last-child>div span').click(function(){
        $("html, body").animate({ scrollTop: 0 }, 600);
        return false;
    });

});