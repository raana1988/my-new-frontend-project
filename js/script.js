$(document).ready(function(){
	$("#main-p2").hide();
	$("#main-p3").hide();
    $("#main-p4").hide();
    $("#text").text('ios');

	$("#nav1").click(function(event) {
		if($("#main-p2").css('display') != 'none'){$("#main-p2").hide();}
		if($("#main-p3").css('display') != 'none'){$("#main-p3").hide();}
        if($("#main-p4").css('display') != 'none'){$("#main-p4").hide();}
        $("#main-p").fadeIn('slow');
	});
	$("#nav2").click(function(event) {
		if($("#main-p").css('display') != 'none'){$("#main-p").hide();}
		if($("#main-p3").css('display') != 'none'){$("#main-p3").hide();}
		if($("#main-p4").css('display') != 'none'){$("#main-p4").hide();}
		$("#main-p2").fadeIn('slow');
	});
	$("#nav3").click(function(event) {
		if($("#main-p").css('display') != 'none'){$("#main-p").hide();}
		if($("#main-p2").css('display') != 'none'){$("#main-p2").hide();}
		if($("#main-p4").css('display') != 'none'){$("#main-p4").hide();}
		$("#main-p3").fadeIn('slow');
	});
	$("#left-button").click(function(event) {
		if($("#main-p").css('display') != 'none'){$("#main-p").hide();}
		if($("#main-p2").css('display') != 'none'){$("#main-p2").hide();}
		if($("#main-p3").css('display') != 'none'){$("#main-p3").hide();}
		$("#main-p4").fadeIn('slow');
	});
	
});