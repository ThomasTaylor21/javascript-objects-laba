console.log("I am here now")


const game = {
  title: 'Guess the Number!',
  biggestNum: 100,
  smallestNum: 1,
  secretNum: null,
  play: function () {
    this.secretNum = Math.floor(Math.random() *
      (this.biggestNum - this.smallestNum + 1)) + this.smallestNum
  }
}

  // ## Tasks

  // Completing the following tasks will result in a working *Guess the Number* game:
  
  // 1. Add a `prevGuesses` property to the `game` object initialized to an empty array.
do {
  this.prevGuesses.push(this.getGuess());
}
while (this.prevGuesses[this.prevGuesses.length - 1] !== this.secretNum);
this.render();
{
  

  // }
  //     (condition) {
  
  // }

    this.render()
  // }






  // 2. Add a `getGuess` method to `game` that prompts the player to enter a guess with a message formatted as: *Enter a guess between [smallestNum] and [biggestNum].

  getguesses = this.getGuess();
  if (isNaN(guesses) === false);
  console.log(guesses); {
    let guess() => parseInt(
      
  do { }
      
      prompt(
      `Please enter your guess between ${this.smallestNum} and  ${this.biggestNum}`
    )
      while {}}

    

  }
    // }



    // Hint - use a template literal for the prompt message.
    // 3. Ensure that the `getGuess` method returns a value that:
    //     - Is a *number*, not a *string*.
    //     - Is between `smallestNum` and `biggestNum`, inclusive.
    //     - Hints:
    //         - This is a great use case for a `while` loop.
    //         - `parseInt` returns `NaN` if the string cannot be parsed into a number.
    // 4. From within the `play` method, invoke the `getGuess` method from inside a loop, and add the new guess to the `prevGuesses` array.
    //     - Hint: this is an excellent use for a while loop (or even a do...while loop!)
    // 5. Add a `render` method to `game` that `play` will call after a guess has been made that alerts:
    //     - If the secret has been guessed: `Congrats! You guessed the number in [number of prevGuesses]!`
    //     - Otherwise: `Your guess is too [high|low] Previous guesses: x, x, x, x`
    //     - Hints:
    //         - `render` won’t be able to access any of `play`’s local variables, e.g., `guess`, so be sure pass `render` any arguments as needed (you may not have built your program to use any, that's ok if that's the case!)
    //         - Template literals not only have interpolation, but they also honor whitespace - including line breaks!
    //         - The list of previous guesses can be generated using the array `join` method.
    // 6. The `play` method should end (`return`) when the guess matches `secretNum`.





    // }
    // do {

  
    // //   var result = '';
    // // var i = 0;
    // // do {
    // //    i += 1;
    // //    result += i + ' ';
    // // }
    // // while (i > 0 && i < 5);
    // // Despite i == 0 this will still loop as it starts off without the test

    // console.log(result);



    //   this.prevGuesses.push(guesses);
    //   console.log(this.prevGuesses);
    //   this.render();
    //   // need to add while statement here
    //   while (x = 0; i >= {


    //   }
    // }

    //  //   console.log(prevGuesses);
    //   // const play = function () {
    //   //   if (this.biggestNum - this.smallestNum + 1)) + this.smallestNum);{
    //   //     return this.secretNum;
  
    //   // };
    //   //   console.log("game");
  
  

    // // // generate each for loop }}
  }