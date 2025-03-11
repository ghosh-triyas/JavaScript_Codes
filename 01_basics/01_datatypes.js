// to treat all the old javascript codes essence according to the newer version use "strict"
"use strict";

// alert(3+3) does not print 6 as this is nodejs. in brower's console if we write alert(6+6) it create brower's window object by executing alert function call in brower's js environment V8. then the dialog box is created and shows 12 and on pressing "ok" it closes.

console.log(6+6) //in node js it happens in this way

// Different datatypes :
// number => range is upto 2^53
// bigint => range more than number. generally used in big data or stock market.
// boolean 
// string => represented in ""
// null => an object to represnet empty values
// undefined => represents no value in uninitialized variable

// object

// typeof gives the type of object

console.log(typeof "hello");

let num = 2^53 +1

console.log(typeof num);


