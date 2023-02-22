// const returnComonDivison = (x, y) => {
//     let comonDivison = 2
//     while (true) {
//         if((x % comonDivison === 0) && (y % comonDivison === 0)){
//             return comonDivison
//         }
//         comonDivison = comonDivison + 1
//     }
// }
// console.log(returnComonDivison(17 , 13));

const getGCD = (x, y) => {
  if (y === 0) return x;
  if (x < y) return getGCD(y, x);
  return getGCD(y, x % y);
};
console.log(getGCD(14, 49));
