/*
 *	custom.js written by Johns Gresham
 */

 /*
 *	Vertical Scrolling Animation (jQuery)
 */
 $("#hero-shirt-button").click(function() {
 	var shirtsOffset = ($('#t-shirts').height() - $('.island').height()) / 3;
     	   $('html, body').animate({
        scrollTop: $('#t-shirts').offset().top + shirtsOffset
    }, 800);
});

 $("#next-section").click(function() {
     	   $('html, body').animate({
        scrollTop: $('#events').offset().top
    }, 800);
});
/*
*	Footer Slideout Menus
*/
$('#leaders-button').click(function() {
	$('#slide-out-leaders').slideToggle(500);
	 $('html, body').animate({
      	scrollTop: $("#slide-out-leaders").offset().top + $('#slide-out-leaders').height()
    }, 1000);
});
$('#share-us-button').click(function() {
	$('#slide-out-share').slideToggle(500);
	 $('html, body').animate({
      	scrollTop: $("#slide-out-share").offset().top + $('#slide-out-share').height()
    }, 1000);
});
/*
*	Twitter Widget js
*/
!function(d,s,id){var js,fjs=d.getElementsByTagName(s)[0],p=/^http:/.test(d.location)?'http':'https';if(!d.getElementById(id)){js=d.createElement(s);js.id=id;js.src=p+"://platform.twitter.com/widgets.js";fjs.parentNode.insertBefore(js,fjs);}}(document,"script","twitter-wjs");
