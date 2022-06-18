let scoreHome = document.getElementById('score-home');
let scoreGuest = document.getElementById('score-guest');

let pointsHome = 0;
let pointsGuest = 0;

function scorePointHome(num) {
  pointsHome += num;
  scoreHome.textContent = pointsHome;
}

function scorePointGuest(num) {
  pointsGuest += num;
  scoreGuest.textContent = pointsGuest;
}

function resetPoints() {
  pointsHome = 0;
  pointsGuest = 0;
  scoreHome.textContent = 0;
  scoreGuest.textContent = 0;
}
