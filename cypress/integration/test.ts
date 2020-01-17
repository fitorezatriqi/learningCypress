// //start our application code
// function add(a,b){
//     return a+b;
// }
// function subtract(a,b){
//     return a-b;
// }
// function divide(a,b)
// {
//     return a/b;
// }
// function multiply(a,b){
//     return a*b;
// }
// //finish our application code
// //start out Cypress test
// describe('Unit test our math functions', function(){
//     describe('math', function () {
//         it('can add numbers', function(){
//             expect(add(1,2)).to.eq(3)
//         })
//
//         it('can subtract numbers', function(){
//             expect(subtract(5,12)).to.eq(-7)
//         })
//
//         it('can divide numbers', function(){
//             expect(divide(27,9)).to.eq(3)
//         })
//
//         it('can multiply numbers', function(){
//             expect(multiply(5,4)).to.eq(20)
//         })
//
//     })
//
// })
//----------------------------------------------------------------------------------------------------------------------
// //-- Start: Our Application Code --
// function fizzbuzz (num) {
//     if(num % 3 === 0 && num % 5 === 0){
//         return 'fizzbuz'
//     }
//     if(num % 3 === 0){
//         return 'fizz'
//     }
//     if(num % 5 === 0){
//         return 'buzz'
//     }
// }
// //-- End: Our Application code --
//
// //-- Start: Our Cypress test --
// describe('Unit Test FizzBuzz', function () {
//     function numsExpectedToEq (arr, expected) {
//         // loop through the array of nums and make
//         // sure they equal what is expected
//         arr.forEach((num) => {
//             expect(fizzbuzz(num)).to.eq(expected)
//         })
//     }
//
//     it.only('returns "fizz" when number is multiple of 3', function () {
//         numsExpectedToEq([9, 12, 18], 'fizz')
//     })
//
//     it('returns "buzz" when number is multiple of 5', function () {
//         numsExpectedToEq([10, 20, 25], 'buzz')
//     })
//
//     it('returns "fizzbuzz" when number is multiple of both 3 and 5', function () {
//         numsExpectedToEq([15, 30, 60], 'fizzbuzz')
//     })
// })
//---------------------------------------------------------------------------------------------------------------------
