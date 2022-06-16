// #1
let ages = [3, 9, 23, 64, 2, 8, 28, 93];
let lastElement = ages[ages.length - 1];
let firstElement = ages[0];
    console.log(lastElement - firstElement);
ages.push(44);
lastElement = ages[ages.length-1];
firstElement = ages[0];
    console.log(lastElement - firstElement);

let sum = 0
for (let i = 0; i < ages.length; i++){
    sum = ages[i] + sum;
}
// log sum divided by # of elements in ages
console.log(sum / ages.length);
    


// #2 
let names = ["Sam", "Tommy", "Tim", "Sally", "Buck",  "Bob"];
    
    let totalLetters = 0;
    for (let i = 0; i < names.length; i++){
        let currentName = names[i];
        let numLetters = currentName.length;
        totalLetters = totalLetters + numLetters;
    }
    let avg = totalLetters / names.length;
        console.log(avg);
    let totalNames = ""
    for (let i = 0; i < names.length; i++){
        let name = names[i];
        if (i == 0) {
            totalNames = totalNames + name
        } else {
            totalNames = totalNames + " " + name
        }
    }
    console.log(totalNames);

// #3 
// let lastElememnt = array[array.length - 1];

// #4 
// let firstElement = array[0];

// #5 
let namesLength = []

    for (let i = 0; i < names.length; i++){
        let totalLetters = 0
        let currentName = names[i];
        let numLetters = currentName.length;
        totalLetters = totalLetters + numLetters;
        namesLength.push(totalLetters);
        
    }
        console.log(namesLength)

// #6 
    sum = 0
    for (let i = 0; i < namesLength.length; i++){
    sum += namesLength[i]
    }
    console.log(sum);
    

// #7 
function myFunction(word, n){
    console.log(word + n);
}
    myFunction("Purple", "Purple".repeat(2));

  
// #8 
function userNames(firstName, lastName){
    console.log(firstName + " " + lastName);
}
    userNames("Sally", "Smith");

// #9 

function myNumbers(arrayOfNumbers){
    let sum = 0;
    for (let i = 0; i < arrayOfNumbers.length; i++){
        sum += arrayOfNumbers[i];
    }if (sum > 100){
            return true
        } 
    }
    console.log(myNumbers([15, 60, 50]));


//  #10 
function averageNum(arrayAverages){
    sum = 0
    for (let i = 0; i < arrayAverages.length; i++){
        sum += arrayAverages[i];
    }
    return (sum / arrayAverages.length);
}
    console.log(averageNum([2, 4, 6]));


// #11 
function combination (randomArray, randomArray1){
    if (averageNum(randomArray) > averageNum(randomArray1)){
      return true;
    }
}
    console.log(combination ([15, 1], [10, 2]));


// #12 

function willBuyDrinks(isHotOutside, moneyInPocket){
    
 if (moneyInPocket > 10.50 && isHotOutside === true){
     return true;
    }
    
}
    console.log(willBuyDrinks(true, 14.00));

// #13
// A seminar can hold 50 attendees
// add the # of attendees
// when total reaches 50, return "The seminar is full!"
// else return sum

function numberOfAttendees(totalNumber){
    let sum = 0
    for (let i = 0; i < totalNumber.length; i++){
        sum += totalNumber[i];
    } if (sum === 50){
        return ("The seminar is full!")
    }   else
        return sum;
}
    console.log(numberOfAttendees([45, 3, 2]));
    

  

  