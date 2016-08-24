// Shorthand for $( document ).ready()
$( document ).ready(function() {
	//adapt margin to header height and body-container top and bottom margin
    var marginLeftOfBodyContainer = parseFloat($('.body-container').css('margin-left'))+0;
    $('.header').css('height',marginLeftOfBodyContainer);
    $('.body-container').css('margin-top',marginLeftOfBodyContainer).css('margin-bottom',marginLeftOfBodyContainer);
    
    //Reload page when resize
    $(window).on('resize',function(){location.reload();});
});
    
