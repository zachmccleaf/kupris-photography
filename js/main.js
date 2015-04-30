$(document).ready(function() {

	$(".navigation").click(function() {  //show mobile navigation drop down
		var X=$(this).attr('id');
		if(X==1) {
			$(".menu").hide();
			$(this).attr('id', '0'); 
		}
		else {
			$(".menu").show();
			$(this).attr('id', '1');
		}
	});

	$(".menu").mouseup(function() {  //hide navigation drop down
		return false
	});

	$(".navigation").mouseup(function() {
		return false
	});

	$(document).mouseup(function() {
		$(".menu").hide();
		$(".navigation").attr('id', '');
	});
});

$(function(){        //this will add active class to nav
    // this will get the full URL at the address bar
    var url = window.location.href; 

    // passes on every "a" tag 
    $("nav a").each(function() {
            // checks if its the same on the address bar
        if(url == (this.href)) { 
            $(this).closest("a").addClass("active");
        }
    });
});