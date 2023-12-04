import './style.css'



let randomNbr = Math.floor(Math.random() * (101));
let randomValue = randomNbr;
// console.log(randomValue);

let i = 0;
while(i < 1){
  
  let nbrUser = prompt("Essaye de deviner un nombre entre 0 et 100");
  if (nbrUser < randomValue) {
    console.log("C'est plus !");
  } else if (nbrUser > randomValue){
    console.log("C'est moins!");
  } else if (nbrUser == randomValue){
    
    i++;
  }
}
console.log("C'est gagné");