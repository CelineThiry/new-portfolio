// Shorthand for $( document ).ready()
$( document ).ready(function() {

    
    //Reload page when resize
    $(window).on('resize',function(){location.reload();});

    // Check dimension of query to adapt media query
    $(document).ready(function() {
        // run test on initial page load
        checkSize();

        // run test on resize of the window
        $(window).resize(checkSize);
    });

    //Function to the css rule
    function checkSize(){
        if ($(".main__intro-block").css("width") >= "690px" ){
        		console.log('je fais 690px !');
            	//adapt margin to header height and body-container top and bottom margin
                var marginLeftOfBodyContainer = parseFloat($('.body-container').css('margin-left'))+0;
                $('.header').css('height',marginLeftOfBodyContainer);
                $('.body-container').css('margin-top',marginLeftOfBodyContainer).css('margin-bottom',marginLeftOfBodyContainer);                
        }
    }

    var figureHeight = $('figure').css('height');
                $('.main__intro-block').css('height',figureHeight);
                $('.button-block').css('height',figureHeight);

});
    
