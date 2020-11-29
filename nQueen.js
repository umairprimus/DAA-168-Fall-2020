var taSol1, taSol2, taSol3;
var btnRun;

window.onload = function() {
        console.log("Hooray! Its working");
        taSol1 = document.getElementById('ta_sol1');
        taSol2 = document.getElementById('ta_sol2');
        taSol3 = document.getElementById('ta_sol3');
        btnRun = document.getElementById('btnRun');
    } //end window.onload

function runEmAll() {
    console.log("Running All Solutions")
    taSol1.value = "";
    taSol2.value = "";
    taSol3.value = "";
    var start;
    var end;
    var n = 4;
    for (var k = 4; k <= 16; k++) {
        //Runs each solution and measures performance in microseconds
        console.log("In Forloop: Line 18, k = " + k + "\n");
        start = performance.now();
        sol1(n);
        end = performance.now();
        taSol1.value += "" + n + ", " + (end - start) * 1000 + "\n";

        start = performance.now();
        sol2(n);
        end = performance.now();
        taSol2.value += "" + n + ", " + (end - start) * 1000 + "\n";

        start = performance.now();
        sol3(n);
        end = performance.now();
        taSol3.value += "" + n + ", " + (end - start) * 1000 + "\n";
        n = n * 2;
    } //end for

} //end runEmAll

function sol1(n) {
    //Implement your brute-force solution here

    countNQueensSolutions = function(n) {
        return countNQueensHelper(new Board(n), 0);

        function countNQueensHelper(board, numPlaced) {
            var n = board.size();
            // numPlaced is both our current row and the number of queens on the board
            // if we've placed n queens, we've found a solution
            if (numPlaced === n) {
                return 1;
            }

            var nSols = 0;

            // go through each column, testing if placement is valid
            for (var c = 0; c < n; c++) {
                board.togglePiece(numPlaced, c);
                // if current position is unconflicted, recur and 
                // count the solutions stemming from our current position
                if (!board.hasAnyQueenConflictsOn(numPlaced, c)) {
                    nSols += countNQueensHelper(board, numPlaced + 1);
                }
                // undo the current position when we've finished exploring this subtree
                board.togglePiece(numPlaced, c);
            }
            return nSols;
        }
    }; 

    //Mention reference where you got the solution
    //Ref: https://www.coursera.org/lecture/what-is-a-proof/n-queens-brute-force-search-optional-OPyaT
    //Ref: https://www.freecodecamp.org/news/lets-backtrack-and-save-some-queens-1f9ef6af5415/
    //Ref: https://www.sololearn.com/Discuss/?query=javascript
} //end sol1

function sol2(n) {
    //Implement your recursive back-tracking solution here

    countNQueensSolutions = function(n) {
        return countNQueensHelper(
            0,
            new Array(n).fill(false),
            new Array(2 * n - 1).fill(false),
            new Array(2 * n - 1).fill(false)
        );

        function countNQueensHelper(numPlaced, qInCol, qInLDiag, qInRDiag) {
            var n = qInCol.length;
            if (numPlaced === n) return 1;

            var r = numPlaced;
            var nSols = 0;

            // go through each column, testing if placement is valid
            for (var c = 0; c < n; c++) {
                var ld = c - r;
                var rd = r + c;

                // if current position is valid, recur
                if (!qInCol[c] && !qInLDiag[ld] && !qInRDiag[rd]) {
                    (qInCol[c] = true), (qInLDiag[ld] = true), (qInRDiag[rd] = true);

                    nSols += countNQueensHelper(r + 1, qInCol, qInLDiag, qInRDiag);

                    (qInCol[c] = false), (qInLDiag[ld] = false), (qInRDiag[rd] = false);
                }
            }
            return nSols;
        }
    };
  

    //Mention reference where you got the solution
    //Ref: https://www.codesdope.com/blog/article/backtracking-explanation-and-n-queens-problem/
    //Ref: https://citeseerx.ist.psu.edu/viewdoc/download?doi=10.1.1.735.6147&rep=rep1&type=pdf
} //end sol2

function sol3(n) {
    //Implement your dynammic programming solution here

    countNQueensSolutions = function(n) {
        return countNQueensHelper(
            0,
            new Array(n).fill(false),
            new Array(2 * n - 1).fill(false),
            new Array(2 * n - 1).fill(false)
        );

        function countNQueensHelper(numPlaced, qInCol, qInLDiag, qInRDiag) {
            var n = qInCol.length;
            if (numPlaced === n) return 1;

            var r = numPlaced;
            var nSols = 0;

            // go through each column, testing if placement is valid
            for (var c = 0; c < n; c++) {
                var ld = c - r;
                var rd = r + c;

                // if current position is valid, recur
                if (!qInCol[c] && !qInLDiag[ld] && !qInRDiag[rd]) {
                    (qInCol[c] = true), (qInLDiag[ld] = true), (qInRDiag[rd] = true);

                    nSols += countNQueensHelper(r + 1, qInCol, qInLDiag, qInRDiag);

                    (qInCol[c] = false), (qInLDiag[ld] = false), (qInRDiag[rd] = false);
                }
            }
            return nSols;
        }
    };

    //Mention reference where you got the solution
    //Ref: https://www.cs.bgu.ac.il/~michaluz/seminar/nqueen.pdf
    //Ref: https://www.researchgate.net/publication/258651417_An_Unique_Solution_for_N_queen_Problem
} //end sol3
