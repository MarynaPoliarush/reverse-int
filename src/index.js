module.exports = function reverse (n) {
    let reversedArray='';
    let string = Math.abs(n).toString();
   for (let i=string.length-1;i>=0; i--){
      reversedArray=reversedArray+string[i]; 
   }
    return Number(reversedArray)
}
