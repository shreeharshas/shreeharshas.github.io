var message = "";
$("#sendMessage").on("click", function() {
	message = $("#contactform").serialize();
	$.ajax({
		url: "//formspree.io/sridhash@iu.edu", 
		method: "POST",
		data: {message: message},
		dataType: "json"
	});
	//alert('Thanks for the email, I\'ll be in touch promptly.');
	$("#msgDeliveredDiv").text('Thanks, I\'ll revert soon!');
	return false;
});