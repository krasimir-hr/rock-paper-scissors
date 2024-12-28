const GameController = (() => {
   const getComputerChoice = () => {
      const choices = ['Rock', 'Paper', 'Scissors']
      const randomIndex = Math.floor(Math.random() * choices.length);
      return choices[randomIndex]
   }

   const getPlayerChoice = () => {
      let playerChoice
      while (true) {
         playerChoice = prompt('Choose your sign:')
         if (playerChoice === "Rock" || playerChoice === "Paper" || playerChoice === "Scissors") {
            return playerChoice;
      }
      alert("Invalid choice. Please choose Rock, Paper or Scissors.")
      }
   }

   const determineWinner = (playerChoice, computerChoice) => {
      if (playerChoice === computerChoice) {
         return "tie";
      }
      
      if (
         (playerChoice === "Rock" && computerChoice === "Scissors") ||
         (playerChoice === "Paper" && computerChoice === "Rock") ||
         (playerChoice === "Scissors" && computerChoice === "Paper")
      ) {
         return "player";
      }
      return "computer"
   };

   const playGame = () => {
      let playerScore = 0;
      let computerScore = 0;
      let draws = 0;

      while (true) {
         const playerChoice = getPlayerChoice();
         const computerChoice = getComputerChoice();
         console.log(`You chose ${playerChoice}.\nThe computer chose ${computerChoice}.`);
         winner = determineWinner(playerChoice, computerChoice)

         if (winner === "player") {
            playerScore++;
            console.log('You win this round.');
         } else if (winner === "computer") {
            computerScore++;
            console.log('The computer wins this round.');
         } else {
            draws++;
            console.log("It's a draw.");
         }

         console.log(`Score:\nYou: ${playerScore}\nThe computer: ${computerScore}`);
         const playAgain = prompt('Do you want to play again? (yes or no)');
         if (playAgain.toLowerCase() !== "yes") {
            console.log("Thanks for playing!");
            break;
         }
      }
   }
   return { playGame }
})();

document.addEventListener('DOMContentLoaded', () => {
   GameController.playGame();
})