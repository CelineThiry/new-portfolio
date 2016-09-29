//Function to the css rule
function isWideScreen() {
	// retourne le résultat, qui peut être utilisé par le code qui appelle la fonction.
	var width = parseFloat($("body").css("width"));
	return width >= 690 && width < 1290;
}

function isSuperWideScreen() {
	// retourne le résultat, qui peut être utilisé par le code qui appelle la fonction.
	var width = parseFloat($("body").css("width"));
	return width >= 1290;
}

var figureHeight = $('figure').css('height');

function resizeContentForSuperWideScreens() {
	console.log('resizeContentForSuperWideScreens');
	//adapt margin to header height and body-container top and bottom margin
    var marginLeftOfBodyContainer = "64px";
    $('.header').css('height',marginLeftOfBodyContainer);
    $('.body-container').css('margin-top',marginLeftOfBodyContainer).css('margin-bottom',marginLeftOfBodyContainer);  

    
    // $('.main__intro-block').css('height',figureHeight);
    // $('.button-block').css('height',figureHeight); 
}

function resizeContentForWideScreens() {
	console.log('resizeContentForWideScreens');
	//adapt margin to header height and body-container top and bottom margin
    var marginLeftOfBodyContainer = parseFloat($('.body-container').css('margin-left'));
    $('.header').css('height',marginLeftOfBodyContainer);
    $('.body-container').css('margin-top',marginLeftOfBodyContainer).css('margin-bottom',marginLeftOfBodyContainer);  

    
    // $('.main__intro-block').css('height',figureHeight);
    // $('.button-block').css('height',figureHeight); 
}

function resizeContentForSmallScreens() {
	console.log('resizeContentForSmallScreens');
	var headerHeight = $('.header').css('height');
	$('.body-container').css('margin-top',headerHeight).css('margin-bottom',headerHeight); 	

	// $('.button-block').css('height',figureHeight); 
	// $('figure').css('height',figureHeight); 
}

function resizeContent() {
	console.log("resize to content");
	if (isSuperWideScreen()) {
   		resizeContentForSuperWideScreens();
    }
    if (isWideScreen()) {
   		resizeContentForWideScreens();
    }
    else {
    	resizeContentForSmallScreens();
    }
}

// Shorthand for $( document ).ready()
$(document).ready(function(){
    resizeContent();
});

$(window).on('resize', function(){
    resizeContent();
    reload(); 
});
