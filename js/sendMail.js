$("#custom_alert_div").hide();
var message = "";
$("#sendMessage").on("click", function() {
	$("#contactform").hide();
	$("#custom_alert_div").show();
	message = $("#contactform").serialize();
	$.ajax({
		url: "//formspree.io/sridhash@gmail.com", 
		method: "POST",
		data: {message: message},
		dataType: "json"
	});
	return false;
});

$("#custom_alert_div").on("click", function(){
	$("#contactform").show();
	$(this).hide();	
});