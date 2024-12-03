//In un array sono contenuti i nomi degli invitati alla festa del grande Gatsby, 
//chiedi all’utente il suo nome e comunicagli se può partecipare o no alla festa.

const party = [
    'Nathan',
    'Ed',
    'Fabio',
    'Phil',
    'Carlo',
    'Lewis',
    'Luca'];

    const  myName = prompt("Inserisci il nome");
    let access = false; 

    for (let i = 0; i < party.length; i++) 
        if (party[i] === myName) 
            {access = true;}
    
    if (access) {alert("Puoi entrare");}

    else {alert("Non puoi entrare vai al MC");}
    