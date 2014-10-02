#JS Functions Exercise Solutions

####1. Define a function max() that takes two numbers as arguments and returns the largest of them. Use the if-then-else construct available in Javascript.

```
function max(number1, number2) {
    if (number1 > number2 && number1 !== number2) {
        return number1;
    } else if (number1 < number2 && number1 !== number2) {
        return number2;
    } else {
        console.log("The two numbers are equal.");
    }
}
```

####2. Define a function maxOfThree() that takes three numbers as arguments and returns the largest of them.

```
function maxOfThree(number1, number2, number3) {
    return Math.max(number1, number2, number3);    
}
```

####3. Write a function that takes a character (i.e. a string of length 1) and returns true if it is a vowel, false otherwise.

```
function vowelTest(character) {
    var vowels = ["a","e","i","o","u"];
    
    var arrayIndex = vowels.indexOf(character.toLowerCase());
    
    if (arrayIndex >= 0) {
        return true;
    } else {
        return false;
    }
}
```

####4. Define a function sum() and a function multiply() that sums and multiplies (respectively) all the numbers in an array of numbers. For example, sum([1,2,3,4]) should return 10, and multiply([1,2,3,4]) should return 24.

```
function sum(array) {
    var newSum = 0;
    
    for (var i = 0; i < array.length; i++) {
        newSum += array[i];
        console.log(newSum);
    }
    
    return newSum;
}
```

```
function multiply(array) {
    var result = 1;
    
    for (var i = 0; i < array.length; i++) {
        result = result * array[i];
    }
    
    return result;
}
```

####5. Define a function reverse() that computes the reversal of a string. For example, reverse("jag testar") should return the string "ratset gaj".

```
function reverse(string) {
    var stringLen = string.length;
    var newString = "";
    
    for (var i = stringLen - 1; i >= 0; i--) {
        newString += string[i];
    }
    
    return newString;
}
```

####6. Write a function findLongestWord() that takes an array of words and returns the length of the longest one.

```
function findLongestWord(array) {
    var numberArray = [];
    
    for (var i = 0; i < array.length; i++) {
        var indexLen = array[i].length;
        numberArray.push(indexLen);
    }
    
    return Math.max.apply(Math, numberArray);
}
```

####7. Write a function filterLongWords() that takes an array of words and an integer i and returns the array of words that are longer than i.

```
function filterLongWords(array, len) {
    var shortArray = [];
    
    for (var i = 0; i < array.length; i++) {
        if (array[i].length > len) {
            shortArray.push(array[i]);
        }
    }
    
    return shortArray;
}
```

##Bonus: Hard Questions

####8. Write a function translate() that will translate a text into "rövarspråket". That is, double every consonant and place an occurrence of "o" in between. For example, translate("this is fun") should return the string "tothohisos isos fofunon".

```
function checkConsonants(letterToCheck) {
    var consonants = ['b', 'c', 'd', 'f', 'g', 'h', 'j', 'k', 'l', 'm', 'n', 'p', 'q', 'r', 's', 't', 'v', 'w', 'x', 'y', 'z'];
    var isConsonant = false;

    for (i = 0; i < consonants.length; i++) {
        if (letterToCheck == consonants[i]) {
            isConsonant = true;
        }
    }

    return isConsonant;
}

function translate(funString, letterO) {
    var newString = '';

    for (var i = 0; i < funString.length; i++) {
        if (checkConsonants(funString[i])) {
            newString += funString[i] + letterO + funString[i];
        } else {
            newString += funString[i];
        }
    }
    
    console.log('The "rövarspråket" result is: ' + '"' + newString + '"');
}
```

####9. Write a function to sort a list of words (an array) in alphabetical order.

```
function sortArray(array) {
	var placesWeight = new Array();
	var placesWeightSorted = new Array();
	var sortedArray = new Array();
	var weight = {
		"A":1,
		"B":2,
		"C":3,
		"D":4,
		"E":5,
		"F":6,
		"G":7,
		"H":8,
		"I":9,
		"J":10,
		"K":11,
		"L":12,
		"M":13,
		"N":14,
		"O":15,
		"P":16,
		"Q":17,
		"R":18,
		"S":19,
		"T":20,
		"U":21,
		"V":22,
		"W":23,
		"X":24,
		"Y":25,
		"Z":26
	}
	
	for (var i = 0; i < array.length; i++) {
		var letter = array[i][0];
		var letterWeight = weight[letter];
		placesWeight.push(letterWeight);
	}
	
	for (var i = 0; i <= 26; i++) {
		if (placesWeight.indexOf(i) >= 0) {
			placesWeightSorted.push(i);
		}
	}
	
	for (var i = 0; i < array.length; i++) {
		sortedArray[placesWeightSorted.indexOf(weight[array[i][0]])] = array[i];
	}
	
	return sortedArray;
}
```

####10. Write a function charFreq() that takes a string and builds a frequency listing of the characters contained in it. Represent the frequency listing as a Javascript object. Try it with something like charFreq("abbabcbdbabdbdbabababcbcbab").

```
function charFreq(string) {
	var list = {};
	var length = string.length;
	
	for (var i = 0; i < length; i++) {  
		if (string.charAt(i) in list) {
			list[string.charAt(i)] += +1;
		} else { 
			list[string.charAt(i)] = 1;
		}
	}
	
	return list;
}
```