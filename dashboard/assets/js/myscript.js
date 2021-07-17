
var cont = 0;
var run;

function sleep(ms) {
	return new Promise(resolve => setTimeout(resolve, ms));
}

async function Tutor() {
	run = true;
	while(run){        
		await sleep(1000);
		LoadDoc();
  }
}

function LoadDoc() {
	var xhttp = new XMLHttpRequest();
	xhttp.onreadystatechange = function() {
	if (this.readyState == 4 && this.status == 200) {
		document.getElementById("demo").innerHTML =
		 this.responseText;}
	};
	if( cont === 0 ){
		xhttp.open("GET", "ajax.txt", true);
		cont = 1;
		xhttp.send();}
	else if (cont === 1){
		xhttp.open("GET", "ajax1.txt", true);
		cont = 2;
		xhttp.send();} 
	else if (cont === 2){
		xhttp.open("GET", "ajax2.txt", true);
		cont = 3;
		xhttp.send();}
	else if (cont === 3){
		xhttp.open("GET", "ajax3.txt", true);
		cont = 0;
		xhttp.send();}
}

function Stop() {
	run = false;
	var xhttp = new XMLHttpRequest();
	xhttp.onreadystatechange = function() {
	if (this.readyState == 4 && this.status == 200) {
		document.getElementById("demo").innerHTML =
		 this.responseText;}
	};
	xhttp.open("GET", "stop.txt", true);
	xhttp.send();}


