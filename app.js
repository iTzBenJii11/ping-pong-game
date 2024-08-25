// Select elements

// Player 1 button
const player1 = document.querySelector("#addScoreP1Btn");

// Player 2 button
const player2 = document.querySelector("#addScoreP2Btn");

// Reset Button
const reset = document.querySelector("#resetBtn");

// Current Score which is shown on screen (h1)
const scoreCount = document.querySelector("#currentScore");

// Game Amount Value
// This is the value which is selected by the user
const playingToValue = document.querySelector("#number");

playingToValue.addEventListener("click", () => {
  // Stores the value of the number which is selected by the user
  const gameValue = playingToValue.value;

  console.log(gameValue);
});

// Keeps track of players scores
let player1Score = 0;
let player2Score = 0;

// Prompts use to start the game when the user hasn't select anything
const selectGameAlert = () => {
  const gameValue = playingToValue.value;
  if (gameValue == 0) {
    alert("You must choose the amount you're playing too before starting");
  }
};

// Player 1
player1.addEventListener("click", (e) => {
  selectGameAlert();
  const gameValue = playingToValue.value;

  if ((e.type = "click" && player1Score < gameValue)) {
    player1Score++;
    scoreCount.textContent = `${player1Score} to ${player2Score}`;
    if (player1Score > player2Score && player1Score == gameValue) {
      alert("PLAYER 1 HAS WON!!!");
      alert("Please reset to start again");
    }
  }
});

// Player 2
player2.addEventListener("click", (e) => {
  selectGameAlert();
  const gameValue = playingToValue.value;

  if ((e.type = "click" && player2Score < gameValue)) {
    player2Score++;
    scoreCount.textContent = `${player1Score} to ${player2Score}`;
    if (player2Score > player1Score && player2Score == gameValue) {
      alert("PLAYER 2 HAS WON!!!");
      alert("Please reset to start again");
    }
  }
});

// Resets the game
reset.addEventListener("click", () => {
  if (true) {
    scoreCount.textContent = `0 to 0`;

    // Refresh page to refresh state.
    location.reload();
  }
});
