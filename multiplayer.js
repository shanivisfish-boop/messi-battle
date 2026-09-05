// Messi Battle - Multiplayer
// Handles the multiplayer game logic

let multiplayer = {
  roomCode: "",
  playerName: "",
  score: 0,
  opponentScore: 0,
  connected: false,
  question: 0
};


// Create a random room code
function createMultiplayerRoom() {
  const characters = "ABCDEFGHJKLMNPQRSTUVWXYZ23456789";

  let code = "";

  for (let i = 0; i < 6; i++) {
    code += characters[
      Math.floor(Math.random() * characters.length)
    ];
  }

  multiplayer.roomCode = code;
  multiplayer.score = 0;
  multiplayer.opponentScore = 0;
  multiplayer.question = 0;

  return code;
}


// Join an existing room
function joinMultiplayerRoom(code) {
  code = String(code)
    .trim()
    .toUpperCase();

  if (code.length !== 6) {
    return false;
  }

  multiplayer.roomCode = code;
  multiplayer.score = 0;
  multiplayer.opponentScore = 0;
  multiplayer.question = 0;

  return true;
}


// Add points to the local player
function addMultiplayerPoints(points) {
  multiplayer.score += Number(points) || 0;

  return multiplayer.score;
}


// Update opponent score
function setOpponentScore(points) {
  multiplayer.opponentScore =
    Number(points) || 0;

  return multiplayer.opponentScore;
}


// Get current scores
function getMultiplayerScores() {
  return {
    player: multiplayer.score,
    opponent: multiplayer.opponentScore
  };
}


// Move to the next question
function nextMultiplayerQuestion() {
  multiplayer.question++;

  return multiplayer.question;
}


// Get room code
function getRoomCode() {
  return multiplayer.roomCode;
}


// Check whether the player is connected
function isMultiplayerConnected() {
  return multiplayer.connected;
}


// Set connection state
function setMultiplayerConnected(value) {
  multiplayer.connected = Boolean(value);
}


// Reset multiplayer data
function resetMultiplayer() {
  multiplayer = {
    roomCode: "",
    playerName: "",
    score: 0,
    opponentScore: 0,
    connected: false,
    question: 0
  };
}


// Make these functions available to index.html
window.createMultiplayerRoom =
  createMultiplayerRoom;

window.joinMultiplayerRoom =
  joinMultiplayerRoom;

window.addMultiplayerPoints =
  addMultiplayerPoints;

window.setOpponentScore =
  setOpponentScore;

window.getMultiplayerScores =
  getMultiplayerScores;

window.nextMultiplayerQuestion =
  nextMultiplayerQuestion;

window.getRoomCode =
  getRoomCode;

window.isMultiplayerConnected =
  isMultiplayerConnected;

window.setMultiplayerConnected =
  setMultiplayerConnected;

window.resetMultiplayer =
  resetMultiplayer;
