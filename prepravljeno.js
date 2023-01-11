var drinks = [
  { name: 'viski', percentageOfAlcohol: 400 },
  { name: 'vinjak', percentageOfAlcohol: 400 },
  { name: 'rakija', percentageOfAlcohol: 450 },
  { name: 'vodka', percentageOfAlcohol: 400 },
  { name: 'pivo', percentageOfAlcohol: 1055 },
  { name: 'crno vino', percentageOfAlcohol: 860 },
  { name: 'belo vino', percentageOfAlcohol: 860 },
  { name: 'pelinkovac', percentageOfAlcohol: 250 },
  { name: 'rum', percentageOfAlcohol: 400 },
  { name: 'vermut', percentageOfAlcohol: 200 },
  { name: 'sampanjac', percentageOfAlcohol: 200 },
  { name: 'jeger', percentageOfAlcohol: 450 },
  { name: 'gin tonik', percentageOfAlcohol: 475 },
];

function calculateAlcoholPercentage(drinks, selectedDrink, amount) {
  return 50000 / (selectedDrink.percentageOfAlcohol / amount) / 100;
}
function clickEvent() {
  var selectedDrink;
  var totalAlcohol = 0;
  var selectedDrinks = [];
  var choice = 'da';
  while (choice === 'da') {
    var userSelection = prompt(
      `Molimo Vas izaberite pice sa liste koje ste popili: ${drinks
        .map((d) => d.name)
        .join(', ')}`
    ).toLowerCase();
    if (
      drinks
        .map((d) => d.name)
        .join(', ')
        .toLowerCase()
        .indexOf(userSelection) > -1
    ) {
      var amount = prompt('Unesite kolicinu u litrama ?');
    } else {
      alert('Greska! Pokusajte ponovo');
    }
    if (!isNaN(Number(amount))) {
      choice = prompt(
        'Zelite li da nastavite sa odabirom ? Ako ste pili jos nesto recite: DA, ako niste pili nista vise recite: NE'
      ).toLowerCase();
      if (choice === 'da' || choice === 'ne') {
        selectedDrink = drinks.find(
          (d) => d.name.toLowerCase() === userSelection
        );
      } else {
        alert('Greska! Pokusajte ponovo');
      }
      totalAlcohol += calculateAlcoholPercentage(drinks, selectedDrink, amount);
      selectedDrinks.push(selectedDrink.name);
    }
    if (selectedDrink && choice == 'ne') {
      alert(
        `Ukupno ste popili sledeca pica :${selectedDrinks.join(
          ', '
        )} ,i imate ${totalAlcohol}% alkohola u krvi.`
      );
      break;
    }
  }
}
