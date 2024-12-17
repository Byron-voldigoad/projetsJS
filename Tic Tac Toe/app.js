//recuperer les element du dom
let cases = [...document.getElementsByClassName("case")];
let joueur = document.getElementById("joueur");
let score1 = document.getElementById("score1");
let score2 = document.getElementById("score2");
let scorenull = document.getElementById("scorenul");

let state = {
  joueurEncour: 1,
  scorej1: 0,
  scorej2: 0,
  matchnulls: 0,
  c1: 0,
  c2: 0,
  c3: 0,
  c4: 0,
  c5: 0,
  c6: 0,
  c7: 0,
  c8: 0,
  c9: 0,
};

const resetState = () => {
  joueurEncour = 1;
  state.c1 = 0;
  state.c2 = 0;
  state.c3 = 0;
  state.c4 = 0;
  state.c5 = 0;
  state.c6 = 0;
  state.c7 = 0;
  state.c8 = 0;
  state.c9 = 0;
};

const verifierVictoire = () => {
  if (
    (state.c1 == state.c2 && state.c2 == state.c3 && state.c1 > 0) ||
    (state.c4 == state.c5 && state.c5 == state.c6 && state.c4 > 0) ||
    (state.c7 == state.c8 && state.c8 == state.c9 && state.c7 > 0) ||
    (state.c1 == state.c4 && state.c4 == state.c7 && state.c1 > 0) ||
    (state.c2 == state.c5 && state.c5 == state.c8 && state.c2 > 0) ||
    (state.c3 == state.c6 && state.c6 == state.c9 && state.c3 > 0) ||
    (state.c1 == state.c5 && state.c5 == state.c9 && state.c1 > 0) ||
    (state.c3 == state.c5 && state.c5 == state.c7 && state.c7 > 0)
  ) {
    return true;
  } else if (
    state.c1 != 0 &&
    state.c2 != 0 &&
    state.c3 != 0 &&
    state.c4 != 0 &&
    state.c5 != 0 &&
    state.c6 != 0 &&
    state.c7 != 0 &&
    state.c8 != 0 &&
    state.c9 != 0
  ) {
    return null;
  } else {
    return false;
  }
};

const jouerCase = (e) => {
  let idCase = e.target.id;
  if (state[idCase != 0]) return;

  state[idCase] = state.joueurEncour;

  let isVictoire = verifierVictoire();

  if (isVictoire == true) {
    alert("Le gagnant est le joueur" + state.joueurEncour);
    if (state.joueurEncour == 1) {
      state.scorej1++;
      score1.textContent = state.scorej1;
    } else {
      state.scorej2++;
      score2.textContent = state.scorej2;
    }
    resetState();
    cases.forEach((c) => (c.textContent = ""));
  } else if (isVictoire === null) {
    alert("Match null");
    state.matchnulls++;
    scorenull.textContent = state.matchnulls;
    resetState();
    cases.forEach((c) => (c.textContent = ""));
  } else if (isVictoire === false) {
    if (state.joueurEncour == 1) {
      e.target.textContent = "X";
      state.joueurEncour = 2;
      joueur.textContent = "2";
    } else {
      e.target.textContent = "O";
      state.joueurEncour = 1;
      joueur.textContent = "1";
    }
  }
};

cases.forEach((el) => {
  el.addEventListener("click", jouerCase);
});
