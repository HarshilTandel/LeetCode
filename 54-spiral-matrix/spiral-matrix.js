/**
 * @param {number[][]} matrix
 * @return {number[]}
 */
var spiralOrder = function(matrix) {
 let m = matrix.length;
  let n = matrix[0].length;
  let totalNum = m * n;

  let startingRow = 0;
  let endingCol = n - 1;
  let endingRow = m - 1;
  let startingCol = 0;

  let count = 0;
  let ans=[]

  while (count < totalNum) {
  
    for (let i = startingCol; i <= endingCol && count < totalNum; i++) {
      ans.push(matrix[startingRow][i]);
      count++;
    }
    startingRow++;


    for (let i = startingRow; i <= endingRow && count < totalNum; i++) {
      ans.push(matrix[i][endingCol]);
      count++;
    }
    endingCol--;

    for (let i = endingCol; i >= startingCol && count < totalNum; i--) {
      ans.push(matrix[endingRow][i]);
      count++;
    }
    endingRow--;


    for (let i = endingRow; i >= startingRow && count < totalNum; i--) {
      ans.push(matrix[i][startingCol]);
      count++;
    }
    startingCol++;
  }
  return ans;
};