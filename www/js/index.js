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
	        var db = window.openDatabase("food", 1.0, "food database", 1024 * 1024);
db.transaction(createTable, error, success);
	
function createTable(tx) {	
 	tx.executeSql("CREATE TABLE IF NOT EXISTS food(id UNIQUE, title TEXT)");
}
	
function success() {
	db.transaction(addFood, error);
}
	
function addFood(tx) {
	tx.executeSql("INSERT INTO food(id, title) VALUES (1, 'chips')");
	tx.executeSql("INSERT INTO food(id, title) VALUES (2, 'cake')");
	tx.executeSql("INSERT INTO food(id, title) VALUES (3, 'nachos')");
}
	
function error(err) {
	alert("oops something went wrong " + err.message);
}


    // device APIs are available
    //
    function onDeviceReady() {
		alert("device ready");

        
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
