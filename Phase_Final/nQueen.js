var taSol1, taSol2, taSol3;
var btnRun;
var graphdata1 = [];
var graphdata2 = [];
var graphdata3 = [];



window.onload = function() {
  console.log("Hooray! Its working");
  console.log("Final Project of DAA Fall 2020")
  console.log("Made by Umair, Taha & Aziz (Class of MCS)")
	taSol1 = document.getElementById('ta_sol1');
	taSol2 = document.getElementById('ta_sol2');
	taSol3 = document.getElementById('ta_sol3');
  btnRun = document.getElementById('btnRun');
  btnBF = document.getElementById('btnBF');
  btnBT = document.getElementById('btnBT');
  btnBF = document.getElementById('btnBF');

} //end window.onload

function runBrute() {
    console.log("Start------------")
    console.log("Running Brute Force -- The browser will be not responding since brute force takes days to complete.")
    taSol1.value = "";
    var start;
    var end;
    var n = 4;
    for (var k = 4; k <= 7; k++) {
        //Runs each solution and measures performance in microseconds
        console.log("In Forloop: Line 23, k = "+k+"\n");
        start = performance.now();
        sol1(n);
        end = performance.now();
        taSol1.value += "" + n + ", " + (end - start) * 1000 + "\n";
	      graphdata1[k-4] = (end - start) * 1000;
        n = n * 2;
    } //end for
	Plotly.newPlot('Graph', data, layout);
} //end BF


function runBacktrack() {
  console.log("Start------------")
  console.log("Running Backtracking solution:")
  taSol1.value = "";
  taSol2.value = "";
  taSol3.value = "";
  var start;
  var end;
  var n = 4;
  for (var k = 4; k <= 16; k++) {
      console.log("In Forloop: Line 23, k = "+k+"\n");
      start = performance.now();
      sol2(n);
      end = performance.now();
      taSol2.value += "" + n + ", " + (end - start) * 1000 + "\n";
      graphdata2[k-4] = (end - start) * 1000;
  } //end for 
Plotly.newPlot('Graph', data, layout);
} //end backtracking


function runDP() {
  console.log("Start------------")
  console.log("Running Dynamic Programming Solution:")
  taSol3.value = "";
  var start;
  var end;
  var n = 4;
  for (var k = 4; k <= 6; k++) {
      console.log("In Forloop: Line 23, k = "+k+"\n");
      start = performance.now();
      sol3(n);
      end = performance.now();
      taSol3.value += "" + n + ", " + (end - start) * 1000 + "\n";
      graphdata3[k-4] = (end - start) * 1000;
      n = n * 2;
  } //end for
Plotly.newPlot('Graph', data, layout);
} //end DP


function runEmAll() {
  console.log("Start------------")
  console.log("Running All Solutions")
  taSol1.value = "";
  taSol2.value = "";
  taSol3.value = "";
  var start;
  var end;
  var n = 4;
  for (var k = 4; k <= 7; k++) {
      //Runs each solution and measures performance in microseconds
      console.log("In Forloop: Line 23, k = "+k+"\n");
      start = performance.now();
      sol1(n);
      end = performance.now();
      taSol1.value += "" + n + ", " + (end - start) * 1000 + "\n";
      graphdata1[k-4] = (end - start) * 1000;

      start = performance.now();
      //sol2(n);
      end = performance.now();
      taSol2.value += "" + n + ", " + (end - start) * 1000 + "\n";
      graphdata2[k-4] = (end - start) * 1000;

      start = performance.now();
      //sol3(n);
      end = performance.now();
      taSol3.value += "" + n + ", " + (end - start) * 1000 + "\n";
      graphdata3[k-4] = (end - start) * 1000;
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
	     //Brute-force solution:
	     i = 0;
	     var columns=[];
       bruteforce(columns, i, n)
}

function bruteforce(columns, i, n) {
    if (i === n) {
        return columns;
    }

	for (var j=0; j<n; j++) {
        columns[i] = j;
        if (noClash(columns, i)) {
            var solution = bruteforce(columns, i+1, n);
            if (solution) {
                return solution;
            }
        }
    }   
    return false;
}

function noClash(columns, i) {
    for (var j=0; j<i; j++) {
        if (columns[j] === columns[i]) {
            return false;
        }
        if (i-j === Math.abs(columns[j]-columns[i])) {
            return false;
        }
    }
    return true;

//Mention reference where you got the solution
	//Ref: http://
	//Ref: Mukherjee, Soham, et al. "TO SOLVE NQueens PROBLEM."
}//end sol2




function sol2(n) {
	//Implement your recursive back-tracking solution here
  //Starting from 0 Row and 0 column:
  directionBacktracking(Board(n), 0, 0 , n)

	function directionBacktracking(board, row, col,n){
     
     // Checking the conflicts:

     for(var i=0; i<col; i++){
       if (board[row][i] === 1) {
         return false;
       }
     }
       for(var i=row, j=col; i>=0 && j>=0; i--, j--){
       if (board[i][j] === 1) {
         return false;
       }
     }
       for(var i=row, j=col; j>=0 && i<n; i++, j--){
       if (board[i][j] === 1){
         return false;
       }
     }
   
     return true;
     
   }
   function Backtracking(board, col,n){
      
     if(col===n){
       return;  
     }
   
     for(var i=0; i<n; i++){
       if(isSafe(board, i, col,n)){
         board[i][col]=1;
   
         Backtracking(board, col+1,n);
            
         board[i][col]=0;
       }
     }
     return false;
   }
   
   function Board(n){
     var board=[];
     for(var i=0; i<n; i++){
       board[i]=[];
       for(var j=0; j<n; j++){
         board[i][j]=0;
       }
     }
     return board;
   }

	//Mention reference where you got the solution
	//Ref: http://
	//Ref: Güldal, Serkan, Veronica Baugh, and Saleh Allehaibi. "N-Queens solving algorithm by sets and backtracking." SoutheastCon 2016. IEEE, 2016.
}//end sol2

function sol3(n){
	//Implement your dynammic programming solution here

	solveNQ();

function printSolution(board){
  for(var i=0; i<n; i++){
    for(var j=0; j<n; j++){
      document.write(" "+board[i][j]+" ");
    }
    document.write("<br>");
  }
  document.write("<br>");
}

function isSafe(board, row, col){

  // Checks the ← direction
  for(var i=0; i<col; i++){
    if (board[row][i] === 1) {
      return false;
    }
  }

  // Checks the ↖ direction 
  for(var i=row, j=col; i>=0 && j>=0; i--, j--){
    if (board[i][j] === 1) {
      return false;
    }
  }

  // Checks the ↙ direction 
  for(var i=row, j=col; j>=0 && i<n; i++, j--){
    if (board[i][j] === 1){
      return false;
    }
  }

  return true;
}


function recurseNQ(board, col){
  if(col===n){
      printSolution(board); // <-- print another solution when n==8
    return;  
  }

  for(var i=0; i<n; i++){
    if(isSafe(board, i, col)){
      board[i][col]=1;

      recurseNQ(board, col+1);
      //if(recurseNQ(board, col+1)===true) //<-- you don't need this
          // return true;

      board[i][col]=0;
    }
  }
  return false;
}


function solveNQ(){
  var board = generateBoard(n);
  recurseNQ(board, 0);
  //if(recurseNQ(board, 0)===false){
    //console.log("No solution found");
   // return false;
 // }
 // printSolution(board);
}

function generateBoard(n){
  var board=[];
  for(var i=0; i<n; i++){
    board[i]=[];
    for(var j=0; j<n; j++){
      board[i][j]=0;
    }
  }
  return board;
}


	//Mention reference where you got the solution
	//Ref: http://
	//Ref: Gwee, Bah-Hwee, and Meng-Hiot Lim. "An evolution search algorithm for solving N-queen problems." International journal of computer applications in technology 24.1 (2005): 43-48.
}//end sol3
