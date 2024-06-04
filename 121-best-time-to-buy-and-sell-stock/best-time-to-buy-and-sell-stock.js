/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
      let i;
    let buyvalue=prices[i];
    let currentprofit=0;
    let maxprofit=0;
    for(i=0;i<prices.length;i++){
        if(prices[i]>buyvalue){
            currentprofit=prices[i]-buyvalue;
            maxprofit=Math.max(maxprofit,currentprofit);
        }else{
            buyvalue=prices[i];
        }

    }
     return maxprofit;
};