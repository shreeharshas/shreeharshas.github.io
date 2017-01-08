(function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
	  (i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
	  m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
	  })(window,document,'script','https://www.google-analytics.com/analytics.js','ga');

	  ga('create', 'UA-83912099-1', 'auto');
	  ga('send', 'pageview');

$( document ).ready(function() {      
    var isMobile = window.matchMedia("only screen and (max-width: 760px)");
	if (isMobile.matches) {
        window.location.replace("shreeharshas.github.io");
    }
	
	if( /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) ) {
		window.location.replace("shreeharshas.github.io");
	}
    
 });
