var hT = $('#main-right').offset().top;
$(window).scroll(function() {
       wS = $(this).scrollTop();
   if (wS > hT+10){
	   var rt = ($(window).width() - ($(".article-container").offset().left + ($(".article-container").outerWidth())));
	   document.getElementById("main-right").style.position = "fixed";
	   document.getElementById("main-right").style.width = "12%";
	   document.getElementById("main-right").style.height = "auto%";
	   document.getElementById("main-right").style.top = "10px";
	   document.getElementById("main-right").style.bottom = "10px";
	   document.getElementById("main-right").style.right = rt + "px";
   }
});