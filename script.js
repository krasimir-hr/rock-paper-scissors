const GameController = (() => {
   const getComputerChoice = () => {
      const choices = ['rock', 'paper', 'scissors']
      const randomIndex = Math.floor(Math.random() * choices.length);
      return choices[randomIndex]
   }

   const getPlayerChoice = () => {
      let playerChoice
      while (true) {
         playerChoice = prompt('Choose your sign:').toLowerCase();
         if (playerChoice === "rock" || playerChoice === "paper" || playerChoice === "scissors") {
            return playerChoice;
      }
      alert("Invalid choice. Please choose rock, paper or scissors.")
      }
   }

   const determineWinner = (playerChoice, computerChoice) => {
      if (playerChoice === computerChoice) {
         return "tie";
      }
      
      if (
         (playerChoice === "rock" && computerChoice === "scissors") ||
         (playerChoice === "paper" && computerChoice === "rock") ||
         (playerChoice === "scissors" && computerChoice === "paper")
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
         if (playerScore === 3 || computerScore === 3){
            if (playerScore == 3) {
               console.log(`End result: ${playerScore} - ${computerScore}. You win`);
            } else if (computerScore == 3) {
               console.log(`End result: ${playerScore} - ${computerScore}. You lost`);
            }
            break;
         }
      }
   }
   return { playGame }
})();

document.addEventListener('DOMContentLoaded', () => {
   GameController.playGame();
})