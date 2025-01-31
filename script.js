const pelaa = document.getElementById("pelaa");
const lopeta=document.getElementById("lopeta");
const tulokset = [];
const restartBtn = document.getElementById("restart");
let vuoro=1;
let nykyinen_pelaaja;
let nykyiset_pisteet=0;
let panki1; let panki2; let panki3; let panki4;
let pisteet1=0; let pisteet2=0; let pisteet3=0; let pisteet4=0;
let game_over=false;

function RollDice(){
    let nimi1; let nimi2; let nimi3; let nimi4;
    if(game_over===false){
        const valinta=document.getElementById("valinta");
        if(valinta.value==="kaksi_pelaaja"){
            if(nimi1===undefined || nimi2===undefined || nimi1===null || nimi2===null || nimi1 === "" || nimi2 === "" || nimi3 === "" || nimi4 === ""){
                nimi1==prompt("Syöttö pelaajan 1 nimi:");
                nimi2==prompt("Syöttö pelaajan 2 nimi:");
            }
            document.getElementById("pelaaja1").textContent=`Pelaajan ${nimi1} pisteet: ${pisteet1}`;
            document.getElementById("pelaaja2").textContent=`Pelaajan ${nimi2} pisteet: ${pisteet2}`;
        }
        else if(valinta.value==="nelja_pelaaja"){
            if(nimi1===undefined || nimi2===undefined || nimi3===undefined || nimi4===undefined || nimi1===null || nimi2===null || nimi3===null || nimi4===null){
                nimi1=prompt("Syöttö pelaajan 1 nimi:");
                nimi2=prompt("Syöttö pelaajan 2 nimi:");
                nimi3=prompt("Syöttö pelaajan 3 nimi:");
                nimi4=prompt("Syöttö pelaajan 4 nimi:"); 
            }
            document.getElementById("pelaaja1").textContent=`Pelaajan ${nimi1} pisteet: ${pisteet1}`;
            document.getElementById("pelaaja2").textContent=`Pelaajan ${nimi2} pisteet: ${pisteet2}`;
            document.getElementById("pelaaja3").textContent=`Pelaajan ${nimi3} pisteet: ${pisteet3}`;
            document.getElementById("pelaaja4").textContent=`Pelaajan ${nimi4} pisteet: ${pisteet4}`;
        }
    }
//Luodaan random numero ja laitetaan sopiva kuva
        const noppaKuvat = document.getElementById("kuvat");
        let kuvat = [];
        const pisteet = document.getElementById("pisteet");
        let  dice_side= Math.floor(Math.random() * 6) + 1;
        tulokset.push(dice_side);
        kuvat.push(`<img src="dice_kuvat/${dice_side}.png">`);
        noppaKuvat.innerHTML = kuvat.join(" ");
//Jos valinta on kaksi pelaajaa käsitellään kaksi pelaajaa
    if(valinta.value==="kaksi_pelaaja"){
        let summa = 0;
        switch(vuoro) {
            case 1:
                document.getElementById("nykyinen_pelaaja").textContent = `Pelaajan ${nimi1} vuoro`;
                for (let i of tulokset) {
                    summa += i;
                }
                nykyiset_pisteet = summa + pisteet2;
                pisteet.textContent = `Pisteet: ${nykyiset_pisteet}`;
                if (dice_side === 1) {
                    nykyiset_pisteet = 0;
                    pisteet.textContent = 'Tappio, seuravan pelaajan vuoro';
                    stopTurn();
                }
                else if (nykyiset_pisteet >= 25) {
                    pisteet.textContent = 'Voitto, paina "Restart" aloitamaan peli uudelleen';
                    stopTurn();
                    game_over = true;
                }
                break;
            
            case 2:
                document.getElementById("nykyinen_pelaaja").textContent = `Pelaajan ${nimi2} vuoro`;
                summa = 0;
                for (let i of tulokset) {
                    summa += i;
                }
                nykyiset_pisteet = summa + pisteet2;
                pisteet.textContent = `Pisteet: ${nykyiset_pisteet}`;
                if (dice_side === 1) {
                    nykyiset_pisteet = 0;
                    pisteet.textContent = 'Tappio, seuravan pelaajan vuoro';
                    stopTurn();
                }
                else if (nykyiset_pisteet >= 25) {
                    pisteet.textContent = 'Voitto, paina "Restart" aloitamaan peli uudelleen';
                    stopTurn();
                    game_over = true;
                }
                break;
    };
//Jos valinta on nelja pelaaja käsitellään neljä pelaaja
if(valinta.value === "nelja_pelaaja") {
            let summa = 0;
            switch(vuoro) {
                case 1:
                    document.getElementById("nykyinen_pelaaja").textContent = `Pelaajan ${nimi1} vuoro`;
                    for (let i of tulokset) {
                        summa += i;
                    }
                    nykyiset_pisteet = summa + pisteet2;
                    pisteet.textContent = `Pisteet: ${nykyiset_pisteet}`;
                    if (dice_side === 1) {
                        nykyiset_pisteet = 0;
                        pisteet.textContent = 'Tappio, seuravan pelaajan vuoro';
                        stopTurn();
                    }
                    else if (nykyiset_pisteet >= 25) {
                        pisteet.textContent = 'Voitto, paina "Restart" aloitamaan peli uudelleen';
                        stopTurn();
                        game_over = true;
                    }
                    break;
                
                case 2:
                    document.getElementById("nykyinen_pelaaja").textContent = `Pelaajan ${nimi2} vuoro`;
                    summa = 0;
                    for (let i of tulokset) {
                        summa += i;
                    }
                    nykyiset_pisteet = summa + pisteet2;
                    pisteet.textContent = `Pisteet: ${nykyiset_pisteet}`;
                    if (dice_side === 1) {
                        nykyiset_pisteet = 0;
                        pisteet.textContent = 'Tappio, seuravan pelaajan vuoro';
                        stopTurn();
                    }
                    else if (nykyiset_pisteet >= 25) {
                        pisteet.textContent = 'Voitto, paina "Restart" aloitamaan peli uudelleen';
                        stopTurn();
                        game_over = true;
                    }
                    break;
        
                case 3:
                    document.getElementById("nykyinen_pelaaja").textContent = `Pelaajan ${nimi3} vuoro`;
                    summa = 0;
                    for (let i of tulokset) {
                        summa += i;
                    }
                    nykyiset_pisteet = summa + pisteet2;
                    pisteet.textContent = `Pisteet: ${nykyiset_pisteet}`;
                    if (dice_side === 1) {
                        nykyiset_pisteet = 0;
                        pisteet.textContent = 'Tappio, seuravan pelaajan vuoro';
                        stopTurn();
                    }
                    else if (nykyiset_pisteet >= 25) {
                        pisteet.textContent = 'Voitto, paina "Restart" aloitamaan peli uudelleen';
                        stopTurn();
                        game_over = true;
                    }
                    break;
        
                case 4:
                    document.getElementById("nykyinen_pelaaja").textContent = `Pelaajan ${nimi4} vuoro`;
                    summa = 0;
                    for (let i of tulokset) {
                        summa += i;
                    }
                    nykyiset_pisteet = summa + pisteet2;
                    pisteet.textContent = `Pisteet: ${nykyiset_pisteet}`;
                    if (dice_side === 1) {
                        nykyiset_pisteet = 0;
                        pisteet.textContent = 'Tappio, seuravan pelaajan vuoro';
                        stopTurn();
                    }
                    else if (nykyiset_pisteet >= 25) {
                        pisteet.textContent = 'Voitto, paina "Restart" aloitamaan peli uudelleen';
                        stopTurn();
                        game_over = true;
                    }
                    break;
            }
        }
    }
};

function stopTurn(){
    if(valinta.value==="kaksi_pelaaja"){
        switch(vuoro){
            case 1:
                pisteet1+=nykyiset_pisteet;
                vuoro=2;
                tulokset.length = 0;
                nykyiset_pisteet=0;
                break;
            case 2:
                pisteet2+=nykyiset_pisteet;
                vuoro=1;
                tulokset.length = 0;
                nykyiset_pisteet=0;
                break;  
        }
    }
    else if(valinta.value==="nelja_pelaaja"){
        switch(vuoro){
            case 1:
                pisteet1+=nykyiset_pisteet;
                vuoro=2;
                tulokset.length = 0;
                nykyiset_pisteet=0;
                break;
            case 2:
                pisteet2+=nykyiset_pisteet;
                vuoro=3;
                tulokset.length = 0;
                nykyiset_pisteet=0;
                break;
            case 3:
                pisteet3+=nykyiset_pisteet;
                vuoro=4;
                tulokset.length = 0;
                nykyiset_pisteet=0;
                break;
            case 4:
                pisteet4+=nykyiset_pisteet;
                vuoro=1;
                tulokset.length = 0;
                nykyiset_pisteet=0;
                break;
    }
}};

function Restart() {
    location.reload();
}

pelaa.addEventListener("click", RollDice);
lopeta.addEventListener("click",stopTurn);
restartBtn.addEventListener("click", Restart);
