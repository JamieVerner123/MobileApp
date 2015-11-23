var paused_count =0;
var resumed_count = 0;
var launched_count = 0;
        
        window.localStorage.setItem("pen", "red");
	window.localStorage.setItem("food", "burger");
	window.localStorage.setItem("drink", "coke");
	


    function onLoad() {
        document.addEventListener("deviceready", onDeviceReady, false);
		console.log("device ready");
    }
	
	function updateDisplay() {
		$("#launched").text("Application launched: " + launched_count);
		$("#resumed").text("Application paused: " + paused_count);
		$("#paused").text("Application resumed: " + resumed_count);
	}
	



    // device APIs are available
    //
    function onDeviceReady() {
		alert("device ready");
		
				
    var location =	navigator.geolocation.getCurrentPosition(
			geolocationSuccess,
			geolocationError,
			geolocationOptions);
			
			alert(location);

	var key = alert(window.localStorage.getItem("pen"));
		document.addEventListener("resume", onResume, false);
		document.addEventListener("pause", onPause, false);
		
		launched_count++;
		updateDisplay(); 
    }

    // Handle the pause event
    //
    function onPause() {
		alert("pause");
		paused_count++;
		updateDisplay();
    }
	
	function onResume() {
		alert("resume");
		resumed_count++;
		updateDisplay();
    }
