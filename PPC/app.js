let resetBtn = document.getElementById("reset");
let scoreJoueur = document.getElementById("score-joueur");
let scoreOrdinateur = document.getElementById("score-ordinateur");
let btnJoueur = [...document.getElementsByClassName("btn-joueur")];
let opierreBtn = document.getElementById("opierre");
let ofeuilleBtn = document.getElementById("ofeuille");
let ociseauxBtn = document.getElementById("ociseaux");
let message = document.getElementById("message");
let nextBtn = document.getElementById("next");

const jouerManche = (e) => {
  let choix = e.target.closest(".btn-joueur");

  btnJoueur.forEach((btn) => {
    btn.classList.add("desactivated");
    btn.removeEventListener("click", jouerManche);
  });

  choix.classList.remove("desactivated");
  choix.classList.add("active");

  let choixJoueur = choix.id;

  let choixOrdi = faireChoixOridnateur();

  verifierGagnant(choixJoueur, choixOrdi);

  nextBtn.style.visibility = "visible";
};
const PIERRE = "pierre";
const FEUILLE = "feuille";
const CISEAUX = "ciseaux";
const faireChoixOridnateur = () => {
  // 0= pierre
  // 1=feuille
  // 2=ciseaux

  let nbAleatoire = Math.floor(Math.random() * 3);

  switch (nbAleatoire) {
    case 0:
      opierreBtn.classList.add("active");
      return PIERRE;
    case 1:
      ofeuilleBtn.classList.add("active");
      return FEUILLE;
    default:
      ociseauxBtn.classList.add("active");
      return CISEAUX;
  }
};

const verifierGagnant = (choixJoueur, choixordi) => {
  if (choixJoueur == choixordi) {
    message.textContent = "Egalité !";
    return;
  }
  if (choixJoueur == PIERRE) {
    if (choixordi == FEUILLE) {
      return victoireOrdinateur();
    } else if (choixordi == CISEAUX) {
      return victoireJoueur();
    }
  }

  if (choixJoueur == FEUILLE) {
    if (choixordi == CISEAUX) {
      return victoireOrdinateur();
    } else if (choixordi == PIERRE) {
      return victoireJoueur();
    }
  }

  if (choixJoueur == CISEAUX) {
    if (choixordi == PIERRE) {
      return victoireOrdinateur();
    } else if (choixordi == FEUILLE) {
      return victoireJoueur();
    }
  }
};

const victoireOrdinateur = () => {
  message.textContent = "L'ordinateur gangne ....";
  scoreOrdinateur.textContent++;
};

const victoireJoueur = () => {
  message.textContent = "Vous avez gangne !";
  scoreJoueur.textContent++;
};
const preparerNouvelleManche = () => {
  btnJoueur.forEach((btn) => {
    btn.classList.remove("desactivated");
    btn.classList.remove("active");

    btn.addEventListener("click", jouerManche);
  });
  nextBtn.style.visibility = "hidden";

  opierreBtn.classList.remove("active");
  ofeuilleBtn.classList.remove("active");
  ociseauxBtn.classList.remove("active");

  message.textContent = "A vous de jouer !";
};

nextBtn.addEventListener("click", preparerNouvelleManche);

btnJoueur.forEach((btn) => btn.addEventListener("click", jouerManche));

resetBtn.addEventListener("click", () => {
  scoreJoueur.textContent = 0;
  scoreOrdinateur.textContent = 0;

  preparerNouvelleManche();
});
