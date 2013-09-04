$(function(){ 
	var maxsize = 1145;
	var htmlprefix = "http://gifter.corp.ebay.com/iris/iris_reference_handbags/images_blacktotes/";
	var threerand;
	function thenum() {
		var theans = [];
		var tempans;
		theans[0] = Math.floor(Math.random()*maxsize +1);
		do {
			tempans = Math.floor(Math.random()*maxsize +1);
		} while (tempans == theans[0]);
		theans[1] = tempans;
		do {
			tempans = Math.floor(Math.random()*maxsize +1);
		} while (tempans == theans[0] || tempans == theans[1]);
		theans[2] = tempans;
		return theans;
	}
	function loadpics() {
		threerand = thenum();
		$("#picA").attr("src",htmlprefix + threerand[0] + ".jpg");
		$("#picB").attr("src",htmlprefix + threerand[1] + ".jpg");
		$("#picC").attr("src",htmlprefix + threerand[2] + ".jpg");
	}
	function recordevent(ans) {
		//alert(threerand[0] + " " + threerand[1] + " " + threerand[2] + " " + ans);
		$.get("/loadit",threerand[0] + " " + threerand[1] + " " + threerand[2] + " " + ans);
	}
	loadpics();
	$("#buttonA,#picA").click(function () {recordevent("FIRST"); loadpics();});
	$("#buttonB,#picB").click(function () {recordevent("SECOND"); loadpics();});
	$("#buttonDunno").click(function () {recordevent("DUNNO"); loadpics();});
});
