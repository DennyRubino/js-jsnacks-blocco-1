//L’utente inserisce due numeri in successione, con due prompt.
//Il software stampa il maggiore

let number1 = Number(prompt("inserisci numero1"))

while(isNaN(number1)) {
    number1 = Number(prompt("inserisci numero1"))}


let number2 = Number(prompt("inserisci numero2"))

while(isNaN(number2)) {
    number2 = Number(prompt("inserisci numero2"))}

if (number1 > number2) {alert(`Il numero maggiore è: ${number1}`);}
    
else if (number1 < number2) {alert(`Il numero maggiore è: ${number2}`);} 

else (number1 === number2); {alert("il numero è uguale")} 