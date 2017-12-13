(function($) {

	/* Go up */
	jQuery(window).scroll(function () {
		if(jQuery(this).scrollTop() > 400 ) {
			jQuery(".go-up").css("bottom","0px");
		}
		else {
			jQuery(".go-up").css("bottom","-60px");
		}
		});
		jQuery(".go-up").click(function(){
			jQuery("html,body").animate({scrollTop:0},500);
			return false;
	});
/* WOW */
	wow = new WOW(
      {
        animateClass: 'animated',
        offset:       100,
        callback:     function(box) {
          console.log("WOW: animating <" + box.tagName.toLowerCase() + ">")
        }
      }
    );
    wow.init();
    
	
	/* END WOW */
	
	/**/
	
	/**/

})(jQuery);