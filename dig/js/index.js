function adjustSlidesHeight(){var a=$(".slides").width(),b=.8*a;b>$(window).height()&&(b=$(window).height()),$(".slides").css("height",b+"px")}$("a").each(function(){this.host!==window.location.host&&$(this).attr("target","_blank")}),adjustSlidesHeight(),$(window).on("resize",adjustSlidesHeight);