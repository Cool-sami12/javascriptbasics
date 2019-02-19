// inline comment or /*multi line   */
var number = 3;//declaring variable and assiging value
sum = number + 10;
console.log (sum);
var n = 11;
n++;//increment
n--;//decrement
 var remainder;
 remainder = 11 % 3;
 console.log(remainder);
 var myArray =[["Bulls", 23], ["White " 45]];//nested myArray
 myArray.push(["cool", "sami"]);//added an array to the original array 
var removedFromMyArray = myArray.pop();// remove array 
var removedFromMyArray = myArray.shift();//  remove the first ekement in te array
/*function funcName(){

}*/
var process = 0;
function processArg(num){
	 
	 return (num + 4) / 2;

}
process = processArg(7);
console.log(process);

function nextInLine(arr, item){
// your code here
	arr.push(item);
	return arr.shift();
}
var testArr = [1,2,3,4,5];
console.log("Before: " + JSON.stringify(testArr));//a way to change the array to string Json.stringify
console.log(nextInLine(testArr, 6));
console.log("After: " + JSON.stringify(testArr));

/*  equal ==
strict equals ===
!= not equal
&& and || or
*/
var names = ["S", "A", "M","U","E" ,"L", "S"];
function golfScore(par, strokes){
	if (strokes == 1){
		return names[0]
	} else if (strokes <= par -2){
		return names[1]
	
	} else if (strokes == par -1){
		return names[2]
	
	} else if (strokes == par) {
		return names[3]
	]
	} else if (strokes <= par + 1){
		return names[4]
	]
	} else if (strokes <= par + 2){
		return names[5]
	} else if (strokes >= par + 3){
		return names[6]
	}

}

console.log (golfScore(5, 4));
// plaing withe switch case
function switchOfStuff(val){
	var answer = "";
	switch (val){
		case "a":
		answer = "apple";
		break;
		case "b":
		answer = "bird";
		break;
		case "c":
		answer = "cat";
		break; 
		default:
		answer = "stuff";
		break;
	}
	return answer;
}
console.log(switchOfStuff("c"));

// objects
var ourDog = {
	"name": "camper",
	"legs": 4,
	"tails": 1,
	"friends": ["everything"]
};
ourDog.name = "Happy Camper";

//setup
var myDog = {
	"name": "Coders",
	"legs": 4,
	"tails": 1,
	"friends": ["freeCodeCamp Campers"]
};
 
 myDog.name = "Happy Coder";
 //adding a new property to an objects
 myDog['bark'] = "woof!!";
 delete myDog.tails;
 // 
 function phoneticLookup(val){
 	var result = "";

 	var lookup = {
 		"alpha": "Adams",
 		"bravo": "Boston",
 		"charlie": "Chicago",
 		"delta": "Denver",
 		"echo": "Easy",
 		"foxtrot": "frank",

 	};
 	result = lookup[val];
 	return result;
 }
console.log(phoneticLookup("charlie"));
//checking if an objeect have a property 
var myObj = {
	gift: "pony",
	pet: "kitten",
	bed: "sleigh"
};
function checkObj(checkProp){
	if (myObj.hasOwnProperty(checkProp)){
		return myObj[checkProp];

	} else {
		return "Not Found"
	}
}
  console.log(checkObj("hello"));

  //
   var collectionCopy = JSON.parse(JSON.stringify(collection));
   function updateRecords(id, prop, value){
   	if (value === ""){
   		delete collection[id][prop];
    } else if (prop === "tracks"){
    	collection[id][prop] = collection[id][prop] || [];
    	collection[id][prop].push(value);


     } else {
     	collection[id][prop] = value;

     }
     return collection;
   }
   updateRecords(2468, "tracks", "test");

   console.log(updateRecords(5439, "artist", "ABBA"));

// while loop iterations
var myArray = [];
var i = 0;
while(i < 5){
	myArray.push(i);
	i++;
}
console.log(myArray);
//for loop 

var ourArray = [];
for (var i =0; i < 5; i++){
	ourArray.push(i);

}
var ourArr = [ 9, 10, 11, 12];
var ourTotal = 0;

for (var i = 0; i < ourArr.length; i++){
	ourTotal += ourArr[i];
}
console.log(ourTotal);
// nested for loop
function multiplyAll(arr) {
	var product = 1;
	for(var i=0; i < arr.length; i++) {
		for (var j=0;j<arr[i].length; j++){
			product *= arr[i][j];
		}

	}
	return product;

}
 var product = multiplyAll([[1,2][3,4][5,6,7]]);
 console.log (product);

// lookup profile
function lookUpProfile(name, prop){
	for(var i = 0; i < contacts.length; i++) {
		if (contacts[i].firstName === name) {
			return contacts[i][prop] || "No such property";

		}
	}
	return "No such contact";
}
 
 var data = lookUpProfile("Shirlock", "lastName");
 console.log(data);
 // random number
 var randomNumberBetween0and19 = Math.floor(Math.random() * 20);
 function randomWholeNum(){
 	return Math.floor(Math.random()* 10);
 }

console.log(randomWholeNum());

// random number between max and min
function randomRange(myMin, myMax) {
	return Math.floor(Math.random() * (myMax - myMin + 1)) + myMin;
}
var myRandom = randomRange(5,15);
console.log(myRandom);

// converting str to intege
function convertToInteger(str){
	return parseInt(str, 2);

}
convertToInteger("10011");

//
function checkEqual(a, b) {
	return a === b ? true : false; 
	// return === b;
}
checkEqual(1, 2);

let catName = "Quincy";
let quote;

catName= "Beau";
function catTalk(){
	"use strict";//enable strict mode ..catch mistakes
	catName = "Oliver";
	quote = catName + "says Meow!";
}
catTalk();
//objects.freezed whenever you dont an object element to change

//Arrow function
const magic = () => new Date();
// converting a normal function to an arrow function
var myConcat = function(arr1, arr2) {
	return	arr1.concat(arr2);
};
console.log(myConcat([1, 2], [3, 4, 5]));
//
const myConcat = (arr1, arr2) => arr1.concat(arr2);
console.log(myConcat([1, 2], [3, 4, 5]));

// spread operator [...]
arr2 = [...arr1];
// destructuring
const Avg_Temperatures = {
	today : 77.5,
	tommorrow : 79
};
 function	 getTempOfTmrw(avgTemperatures) {
 	"use strict";

 	 const { tommorrow : tempOfTommorrow} = avgTemperatures;// get tommorow field from the avg temperature objects and assign it to the temp of tommorow variable  
 	 return tempOfTommorrow;

 }
 console.log(getTempOfTmrw(Avg_Temperatures));// anwser  79
}
// still on destructuring
const LOCAL_FORECAST = {
	today: { min: 72, max: 83}
	tomorrow: { min: 73.3, max: 84.6}
};

function getMaxOfTmrw(forecast) {
	"use strict";
	const { tomorrow : { max : ,maxOfTomorrow}} = forecast; //destructuring

	return	maxOfTomorrow;
}

console.log(getMaxOfTmrw(LOCAL_FORECAST));