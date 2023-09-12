

let inputAr=["Alexandre Vandewiele","Antoine Lansman", "Bastien Venturi","Carole Gérard","Dorian Vanden Eynde","Elisabeth Leyder","Elodie Ali","Justin Michel","Justine Frigo","Justine Leleu","Kimi Lefort","Layla","Lidwine Careme","Lucas Beauloi","Marie Tara","Mathias Barbier","Okly","Pierre Marien","Robin Piot","Rosalie Boulard","Stephane Comblez","Tim Desmet","Toms","Valentin Lefort","Vens Alexandre","Virginie Dourson"];
function pickLearner(inputAr, n) {
    for (let i = inputAr.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [inputAr[i], inputAr[j]] = [inputAr[j], inputAr[i]]; 
    }
    return inputAr.slice(0, n);
  }

  let n = Math.floor(Math.random() * inputAr.length) + 1; 
console.log("Here are the " + n + " learners selected :");
const randomLearners = pickLearner(inputAr, n);
console.log(randomLearners);







