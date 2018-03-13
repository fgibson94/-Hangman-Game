
// //Array of Words from Star Trek 
 var wordBank = ["trek", "star", "stun", "fleet", "borg","delta"]

// //Display Word Section

// //Random word pick
 var wordRandom = wordBank[Math.floor(Math.random() * wordBank.length)];

// // Word to Guess
 console.log(wordRandom)

// //Array location of word
 var wordPlace = wordBank.indexOf(wordRandom);

// console.log(wordPlace)

// //Find length of random word
 var wordRandomLength = wordBank[wordPlace].length;
// //Lenth of Word
 console.log("Length of Word; "+ wordRandomLength)

///////////////////////

//Counter for Incorrect Guesses- Max Length of Word
var guessCt = 0
//Guess Max = Length of Item in Array

 var guessMax= wordRandomLength

 console.log("Max Guess = Length of Word; " + guessMax)

//Display Word


var wordWindow = document.createElement("div");

textnode = document.createTextNode(wordRandom);

wordWindow.appendChild(textnode);

document.getElementById("showWord").appendChild(wordWindow);


// var guessMax = function randomWord (){

//for (var i = 0; i < wordBank.length; i++) {
//    console.log(wordBank[i].length);
//}


        //Show Letter Correct Guesses boolean true
            //Good Guess, Display letter

            //Match Word Perfect- Win Game

        //Show Incorrect Guesses boolean false
            //Lose Guess, Lose Limb

            //Out of Guesses- Lose Game

            //console.log("Hello")
                //test
            //console.log(wordBank)
                //gives items in array
            //console.log(wordBank.length)
                //number of items in array