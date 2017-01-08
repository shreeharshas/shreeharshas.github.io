$(window).on('load', function() {
    // Just replacing the value of the 'content' attribute will not work.
    $('head').append('<meta name="viewport" content="width=device-width, initial-scale=1.0">');
	var x = document.getElementsByTagName("head");
	console.log(x.length);
});
(function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
	  (i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
	  m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
	  })(window,document,'script','https://www.google-analytics.com/analytics.js','ga');

	  ga('create', 'UA-83912099-1', 'auto');
	  ga('send', 'pageview');
