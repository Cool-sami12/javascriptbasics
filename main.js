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

console.log (golfScore(5, 8));

