/**
 * @param {number} n
 * @return {number}
 */
var subtractProductAndSum = function(n) {
       let sum=0;
    let product=1;
    while(n>0){
        sum = sum + (n%10);
        product = product * (n%10);
       n = Math.floor(n / 10);
       
    }
      return product-sum;
};