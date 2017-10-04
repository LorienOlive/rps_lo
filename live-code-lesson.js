TYPES

Primitive:
string
boolean
number
undefined
null


LOOSE/DYNAMIC TYPING
"Loose typing means that variables are declared without a type.
This is in contrast to strongly typed languages that require typed declarations."

var z = 1;
z = 'abc'; //would throw an error in strong typed languages
typeof z //string
z = 1
typeof z //number

//////////////////////////

IMPLICIT COERCION

"what do these equal in JavaScript?"
7 + 7 + 7;
7 + 7 + "7";
"7" + 7 + 7;

EXPLICIT COERCION

var amountRaisedSoFar = 1000;

var newDonation = prompt("How much would you like to donate?");

amountRaisedSoFar = Number(newDonation) + amountRaisedSoFar;

console.log("We have now raised: " + amountRaisedSoFar + "!");

TYPE CASTING

"ParseInt"
"parseFloat()"
"toString()"

//////////////////////////

NULL AND UNDEFINED

var x;
var x = null;

//////////////////////////

BREAK

//////////////////////////

**CHALLENGE 1** Do you need more coffee?<br>
(3 minutes)

Write a script that:

- stores the number of cups (that a person has consumed) in a variable
- if the person has had *less than* 3 cups
 - log a message to the console saying: ("Yes I'll take another cup of coffee")
- if not
 - log a message to console saying ("I think I'm okay for now")

</br>
//////////////////////////

FALSY
0 (zero)
'' or "" (empty string)
null
undefined
NaN (e.g. the result of 1/0)


TRUTHY
"everything else!"


"Pretty much all objects and variables are coerced to `true`"

 if('abc') {
 	//true
 }

 if(10 && 'abc' && true) {
 	//true
 }

"Only falsey values: `false`, `0`, `null` or `undefined` evaluate to false"

var whatever;
if(false || 0 || null || whatever) {
	console.log(true)
} else {
	console.log(false);
}

//////////////////////////

COMPARISON OPERATORS
<
>
<=
>=
==
===
!=
!==

//////////////////////////

SHORT-CIRCUIT EVALUATION
"As soon as the interpreter knows that a statement will evaluate to `true` or `false`,
the rest of the statement is not executed."

true || somethingTotallyUndefined;  //true, no error
false && somethingTotallyUndefined; //false, no error


"Sometimes this is used in place of if statements"

somevar && myFunction() //equivalant to if(somevar)
somevar || myFunction() //equivalant to if(!somevar)

//////////////////////////

EXAMPLE

function shortCircuitEvaluation() {
  // logical OR (||)
  doSomething() || doSomethingElse();

  // logical AND (&&)
  doSomething() && doSomethingElse();
}

function equivalentEvaluation() {

  // logical OR (||)
  var orFlag = doSomething();
  if (!orFlag) {
    doSomethingElse();
  }


  // logical AND (&&)
  var andFlag = doSomething();
  if (andFlag) {
    doSomethingElse();
  }
}

//////////////////////////

**CHALLENGE 2**
(10 minutes)

1. Create a variable for the temperature and set it to 80
2. Write a statement that outputs the temperature as "The temperature is 80 degrees";
3. If the temp is greater than 80, output "time to swim" (set temp to 60, 90) and test;
4. Create a precipitation variable and set it to false
5. Only output "time to swim" if temp is greater than 80 and its not raining
6. Set the precipitation variable to 'raining' or 'snowing' and only output 'time to swim' if there is no precipitation
7. Create an 'indoors' variable and set it to true
8. If indoors, then output 'time to swim' regardless of the temp and precip.

//////////////////////////

ITERATION

FOR LOOP

for (var i = 0; i <= 9; i ++) {
    console.log( i );
}

"Let's work through each part of the loop."


**CHALLENGE 3** - 99 Bottles
(5 minutes)

- Using a `for` loop.
- Write a simple version of "99 bottles of beer on the wall"
  (note: make sure you're logging the result to the console)
- Once you get the program running, log "Hey! We need more beer!" to the console when your counter hit's 0



**CHALLENGE 3 ANSWER:**

var bottle = 99;

for (bottle; bottle >= 0; bottle --){

  if (bottle === 0) {
    console.log("Hey! Go buy more beer!");
  } else {
      console.log(bottle + " bottles of beer on the wall");
  }
}

//////////////////////////

WHILE LOOP/STATEMENT

// var x = 0;
// while(x < 10) {
// 	x = x + 1;
// }

//////////////////////////

SWITCH STATEMENT
"Cases fall through unless you remember to `break` after each case."

var x = 1
switch(x) {
	case 3:
		console.log('three')
	case 1:
		console.log(1);
		//break;
	case 2:
		console.log(2);
		break;
	default:
		console.log('default')
}

//////////////////////////

BREAK V. CONTINUE

A `break` statement jumps *out* of the loop.

for(var i = 0; i < 10; i++) {
	console.log(i);
	console.log('before break');
	break; // exits the next loop
	console.log('after break'); //never happens
}

A `continue` statement jumps to the next *iteration*

for(var i = 0; i < 10; i++) {
	console.log(i);
	console.log('before continue');
	continue; // continues to the next iteration
	console.log('after continue'); //never happens
}
