/*
###Yazar:Elizbar Yusuf
###Veb Sayt:http://elizbar.info
###Proje: tooltipPlugin.js
*/
(function($) {
	$.fn.tooltipPlugin = function(ayar) {
		var deg={
			tool:'bottom',
			};
		var ayar = $.extend(deg,ayar);
		return this.each(function(){
		
			$(this).hover(function(){
			
				var alt=$(this).attr("alt");

				$("body").append('<div id="tooltip">'+alt+'</div>');
				$("#tooltip").hide();
				$("#tooltip").fadeIn();
				var position = $(this).position();
				var wid = ($(this).outerWidth(true)-$("#tooltip").outerWidth(true))/2;
				var top = $(this).outerWidth(true)
				$("#tooltip").css({
					"left":position.left+wid+"px",
								});
								
				if(ayar.tool=='top'){
					$("#tooltip").css({
						"left":position.left+wid+"px",
						"top":position.top-40,
									});
								}
				},function(){
					$("#tooltip").fadeOut(1000);
					$("#tooltip").remove();

							});
		});


}
})(jQuery);
