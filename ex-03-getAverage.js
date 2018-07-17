/**
 * getAverage()
 * ------------------------------------------------------
 * Write a function called getAverage that takes two numbers
 * as inputs and returns the average of the two. To avoid
 * repeating yourself, use your sum function inside
 * of your average function.
 *
 **/


 // ++ YOUR Code below (write the 'getAverage' function): ++

 function getAverage (val1, val2) {
    var vals = val1 + val2;
    return vals/2;
 }

 var average = getAverage(5, 15);
 var average1 = getAverage(18, 22);
 var average2 = getAverage(100, 100);
 var average3 = getAverage(-12, 12);
 var average4 = getAverage(-20, -10);
 var average5 = getAverage(0, -10);
 
 console.log(average);
 console.log(average1);
 console.log(average2);
 console.log(average3);
 console.log(average4);
 console.log(average5);








// *~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*
// *~*~*~*~*~*~*~* Tests (Don't Touch) *~*~*~*~*~*~*~*~*
// *~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*


/*-------------------TEST-1-------------------------*/
//  function accepts two numbers as argument and
//    should return the average of the two numbers
/*--------------------------------------------------*/

console.log("==== ex-03-getAverage : TEST 1 ====");

console.assert( getAverage(5,15) === 10 )
console.assert( getAverage(18,22) === 20 )
console.assert( getAverage(100,200) === 150 )
console.assert( getAverage(-12,12) === 0 )
console.assert( getAverage(-20,-10) === -15 )
console.assert( getAverage(0,-10) === -5 )


/*------------------------------------------------*/
/*-------------------END-------------------------*/
console.log('\n\n');
