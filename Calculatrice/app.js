const touches = [...document.querySelectorAll(".boutton")];
const listKeycode = touches.map((touche) => touche.dataset.key);
const ecran = document.querySelector(".ecran");

document.addEventListener("keydown", (e) => {
  const valeur = e.keyCode.toString();
  calculate(valeur);
});

document.addEventListener("click", (e) => {
  const valeur = e.target.dataset.key;
  calculate(valeur);
});

const calculate = (valeur) => {
  if (listKeycode.includes(valeur)) {
    switch (valeur) {
      case "8":
        ecran.textContent = "";
        break;
      case "13":
        const calcul = eval(ecran.textContent);
        ecran.textContent = calcul.toFixed(5);
        break;
        case "9":
            const indexKeycode1 = listKeycode.indexOf(valeur);
            const touche1 = touches[indexKeycode1];
            ecran.textContent = ecran.textContent.slice(0,-1);
        break;
      default:
        const indexKeycode = listKeycode.indexOf(valeur);
        const touche = touches[indexKeycode];
        
        if (ecran.innerHTML.length <= 14) {
            ecran.textContent += touche.innerHTML;
        }
    }
  }
};

window.addEventListener("error", (e) => {
  alert("une erreur est survenue dans votre calcul : " + e.message);
});
