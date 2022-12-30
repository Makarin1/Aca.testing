var pice =[{name:"viski",percentageOfAlcohol:400},{name:"vinjak",percentageOfAlcohol:400},{name:"rakija",percentageOfAlcohol:450},{name:"vodka",percentageOfAlcohol:400},{name:"pivo",percentageOfAlcohol:1055},{name:"crno vino",percentageOfAlcohol:860},{name:"belo vino",percentageOfAlcohol:860},{name:"pelinkovac",percentageOfAlcohol:250},{name:"rum",percentageOfAlcohol:400},{name:"vermut",percentageOfAlcohol:200},{name:"sampanjac",percentageOfAlcohol:200},{name:"jeger",percentageOfAlcohol:450},{name:"gin tonik",percentageOfAlcohol:475}];

function clickEvent(){
    var userSelection = prompt(`Molimo Vas izaberite pice sa liste koje ste popili: ${pice.map(d => d.name).join(', ')}`);
    if(userSelection=="viski"||userSelection=="vinjak"||userSelection=="rakija"||userSelection=="vodka"||userSelection=="pivo"||userSelection=="crno vino"||userSelection=="belo vino"||userSelection=="sampanjac"||userSelection=="vermut"||userSelection=="rum"||userSelection=="gin tonik"||userSelection=="pelinkovac"||userSelection=="jeger"){
      var amount = prompt("Unesite kolicinu u litrama ?");}
      else{
        alert("Greska! Pokusajte ponovo");
      }
      if (!isNaN(Number(amount))) {
        var choice = prompt("Zelite li da nastavite sa odabirom ? Ako ste pili jos nesto recite: DA, ako niste pili nista vise recite: NE");
        if (choice === "da" || choice === "ne"){
          var selectedDrink = pice.find(d => d.name === userSelection);
        }
        else{
          alert("Greska! Pokusajte ponovo");
        }
      }
    //var selectedDrink = pice.find(d => d.name === userSelection);
  
    if (selectedDrink && choice=="ne") {
      var percentageOfAlcohol = (50000/(selectedDrink.percentageOfAlcohol/amount)/100);
      alert(`Popili ste: ${selectedDrink.name} i nivo Vaseg alkohola u krvi je u promilima: ${percentageOfAlcohol}%`);

    } 
    else if(selectedDrink && choice=="da"){
      var userSelection2 = prompt(`Molimo Vas izaberite pice sa liste koje ste popili: ${pice.map(d => d.name).join(', ')}`)};
      if(userSelection2=="viski"||userSelection2=="vinjak"||userSelection2=="rakija"||userSelection2=="vodka"||userSelection2=="pivo"||userSelection2=="crno vino"||userSelection2=="belo vino"||userSelection2=="sampanjac"||userSelection2=="vermut"||userSelection2=="rum"||userSelection2=="gin tonik"||userSelection2=="pelinkovac"||userSelection2=="jeger") {
        var amount2 = prompt("Unesite kolicinu u litrama ?");}
        else{
          alert("Greska! Pokusajte ponovo");
        }
        if (!isNaN(Number(amount2))) {
      var selectedDrink2 = pice.find(d => d.name === userSelection2);}
      if (selectedDrink2) {
        var percentageOfAlcohol = (50000/(selectedDrink.percentageOfAlcohol/amount)/100)+(50000/(selectedDrink2.percentageOfAlcohol/amount2)/100);
        alert(`Popili ste: ${selectedDrink.name} i ${selectedDrink2.name} i nivo Vaseg alkohola u krvi je u promilima: ${percentageOfAlcohol}%`);
    
      }
else{
      alert("Greska! Pokusajte ponovo");
    }
  }
