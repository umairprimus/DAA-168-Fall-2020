var taSol1, taSol2, taSol3;
var btnRun;
var graphdata1 = [];
var graphdata2 = [];
var graphdata3 = [];

window.onload = function() {
	console.log("Hooray! Its working");
	taSol1 = document.getElementById('ta_sol1');
	taSol2 = document.getElementById('ta_sol2');
	taSol3 = document.getElementById('ta_sol3');
	btnRun = document.getElementById('btnRun');

} //end window.onload

function runEmAll() {
    console.log("Final Project of DAA Fall 2020")
    console.log("Made by Umair, Taha & Aziz (Class of MCS)")
    console.log("Start------------")
    console.log("Running All Solutions")
    taSol1.value = "";
    taSol2.value = "";
    taSol3.value = "";
    var start;
    var end;
    var n = 4;
    for (var k = 4; k <= 10; k++) {
        //Runs each solution and measures performance in microseconds
        console.log("In Forloop: Line 23, k = "+k+"\n");
        start = performance.now();
        sol1(n);
        end = performance.now();
        taSol1.value += "" + n + ", " + (end - start) * 1000 + "\n";
	graphdata1[k] = (end - start) * 1000;
	
        start = performance.now();
        sol2(n);
        end = performance.now();
        taSol2.value += "" + n + ", " + (end - start) * 1000 + "\n";
	graphdata2[k] = (end - start) * 1000;
	console.log(graphdata2[k]);

        start = performance.now();
        sol3(n);
        end = performance.now();
        taSol3.value += "" + n + ", " + (end - start) * 1000 + "\n";
	graphdata3[k] = (end - start) * 1000;
        n = n * 2;
    } //end for
	Plotly.newPlot('Graph', data, layout);
} //end runEmAll


var trace1 = {
  x: [4, 8, 16, 32, 64, 128, 256, 512, 1024, 2048, 4096, 8192, 16384],
  y: graphdata1,
  mode: 'lines+markers',
  name: 'Brute Force'
};

var trace2 = {
  x: [4, 8, 16, 32, 64, 128, 256, 512, 1024, 2048, 4096, 8192, 16384],
  y: graphdata2,
  mode: 'lines+markers',
  name: 'Backtracking'
};

var trace3 = {
  x: [4, 8, 16, 32, 64, 128, 256, 512, 1024, 2048, 4096, 8192, 16384],
  y: graphdata3,
  mode: 'lines+markers',
  name: 'Dynamic Programming'
};

var data = [ trace1, trace2, trace3 ];

var layout = {
  title:'Line and Scatter Plot'
};




function sol1(n){
	//Implement your brute-force solution here

	//--This is garbage code: Remove this--//
	for (var i = 1; i <= n; i++) {
		for (var j = 1; j <= n ; j=j*2) {
			for(var k=0;k<50;k++);
		}//end for j
	}//end for i
	//-- End of garbage code --//

	//Mention reference where you got the solution
	//Ref: http://
	//Ref: If you found any paper
}//end sol1

function sol2(n){
	//Implement your recursive back-tracking solution here

	//--This is garbage code: Remove this--//
	for (var i = 1; i <= n; i++) {
		for (var j = 1; j <= n; j++) {
			for(var k=0;k<50;k++);
		}//end for i
	}//end for j
	//-- End of garbage code --//

	//Mention reference where you got the solution
	//Ref: http://
	//Ref: If you found any paper
}//end sol2

function sol3(n){
	//Implement your dynammic programming solution here

	//--This is garbage code: Remove this--//
	for (var i = 1; i <= n; i++) {
		for(var k=0;k<50;k++);
	}//end for j
	//--End of Garbage Code--//

	//Mention reference where you got the solution
	//Ref: http://
	//Ref: If you found any paper
}//end sol3
