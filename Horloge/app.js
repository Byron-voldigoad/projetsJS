// fait jeudi le 19 octobre 2023

var heuresDiv = document.querySelector(".heures");
var dateDiv = document.querySelector(".date");

var affichageHeure = function () {
  //declaration des variable qui seront utilisees
  var today,
    annee,
    listeMois,
    mois,
    listeJours,
    jourNumero,
    jourNom,
    heures,
    minutes,
    seconde,
    deuxChiffres;

  //Récuperer la data actuele:
  today = new Date();

  //recuperer l'année:
  annee = today.getFullYear();

  //recuperer le mois:
  listeMois = [
    "janvier",
    "Fevrier",
    "Mars",
    "Avril",
    "Mai",
    "Juin",
    "Juillet",
    "Aout",
    "Septembre",
    "Octobre",
    "Novembre",
    "Decembre"
  ];
  mois = listeMois[today.getMonth()]; //getMoutn donne l'indice 9 comme on est en octobre, ce qui donne la valeur "octobre" depuis notre liste

  //recuperer le numero du jour du mois:
  jourNumero = today.getDate(); // donne 19

  //recuperer le jour; NB la semaine commence le dimanche en JS
  listeJours = [
    "Dimance",
    "Lundi",
    "Mardi",
    "Mercredi",
    "Jeudi",
    "Vendredi",
    "Samedi"
  ];
  jourNom = listeJours[today.getDay()]; //get date donne l'index 4 donc jeudi

  //afficher les heures minute et seconde avec 2 chiffres
  deuxChiffres = function (element) {
    if (element < 10) {
      return (element = "0" + element);
    } else {
      return element;
    }
  };

  //recupere les heures
  heures = deuxChiffres(today.getHours());

  // recuperer les minutes;
  minutes = deuxChiffres(today.getMinutes());

  // recuperer les secondes;
  seconde = deuxChiffres(today.getSeconds());

  //Affiche nos DIV HTML:
  heuresDiv.textContent = heures + ":" + minutes + ":" + seconde;
  dateDiv.textContent = jourNom + ", " + jourNumero + " " + mois + " " + annee;

  //lancer la fonction affichage d'heure toute les 1s
  setTimeout(affichageHeure, 1000);
};

//lancer la fonction une fois au debut:
affichageHeure();
