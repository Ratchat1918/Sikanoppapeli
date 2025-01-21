const versio1 = document.getElementById("versio1");
const versio2 = document.getElementById("versio2");
const pelaa = document.getElementById("pelaa");
const lopeta=document.getElementById("lopeta");
const tulokset = [];
const restartBtn = document.getElementById("restart");
let vuoro=1;
console.log(vuoro);
let pelaaja1_pisteet=0;
let pelaaja2_pisteet=0;
let pelaaja3_pisteet=0;
let pelaaja4_pisteet=0;
let nimi1;
let nimi2;
let nimi3;
let nimi4;

function RollDice() {
    checkPisteet()
    const valinta=document.getElementById("valinta");
    if(valinta.value==="kaksi_pelaaja"){
        if(nimi1===undefined || nimi2===undefined || nimi1===null || nimi2===null){
            nimi1=prompt("Syöttö pelaajan 1 nimi:");
            nimi2=prompt("Syöttö pelaajan 2 nimi:");
        }
    }
    else if(valinta.value==="nelja_pelaaja"){
        if(nimi1===undefined || nimi2===undefined || nimi3===undefined || nimi4===undefined || nimi1===null || nimi2===null || nimi3===null || nimi4===null){
            nimi1=prompt("Syöttö pelaajan 1 nimi:");
            nimi2=prompt("Syöttö pelaajan 2 nimi:");
            nimi3=prompt("Syöttö pelaajan 3 nimi:");
            nimi4=prompt("Syöttö pelaajan 4 nimi:"); 
        }
    }
    const noppaKuvat = document.getElementById("kuvat");
    let kuvat = [];
    const pisteet = document.getElementById("pisteet");
    let tulos = Math.floor(Math.random() * 6) + 1;
    tulokset.push(tulos);
    kuvat.push(`<img src="dice_kuvat/${tulos}.png">`);
    if(vuoro===1){
        document.getElementById("nykyinen_pelaaja").textContent=`Pelaajan ${nimi1} vuora`;
    }
    if(vuoro===2){
        document.getElementById("nykyinen_pelaaja").textContent=`Pelaajan ${nimi2} vuora`;
    }
    if(vuoro===3){
        document.getElementById("nykyinen_pelaaja").textContent=`Pelaajan ${nimi3} vuora`;
    }
    if(vuoro===4){
        document.getElementById("nykyinen_pelaaja").textContent=`Pelaajan ${nimi4} vuora`;
    }

    if (tulos === 1) {
        stopTurn()
        pisteet.textContent = "Tappio, seuravan pelaajan vuoro";
        tulokset.length = 0;
    } else {
        let summa = 0;
        for (let i of tulokset) {
            summa += i;
            pisteet.textContent = `Pisteet: ${summa}`;
        }
        if (summa >= 25) {
            pisteet.textContent = "Voitto, paina 'Restart' pelaamaan uudelleen";
        } else {
            pisteet.textContent = `Pisteet: ${summa}`;
        }
    }
    noppaKuvat.innerHTML = kuvat.join(" ");
}
function stopTurn(){
    if(valinta.value==="kaksi_pelaaja"){
        if(vuoro===1){
            for (let i of tulokset) {
                pelaaja1_pisteet += i;
            }
            vuoro=2;
            console.log(vuoro);
            tulokset.length = 0;
            const pisteet = document.getElementById("pisteet");
            pisteet.textContent = "Pisteet: 0";
            const noppaKuvat = document.getElementById("kuvat");
            noppaKuvat.innerHTML = "";
        }
        else if(vuoro===2){
            for (let i of tulokset) {
                pelaaja2_pisteet += i;
            }
            vuoro=1;
            console.log(vuoro);
            tulokset.length = 0;
            const pisteet = document.getElementById("pisteet");
            pisteet.textContent = "Pisteet: 0";
            const noppaKuvat = document.getElementById("kuvat");
            noppaKuvat.innerHTML = "";
        }
    }
    if(valinta.value==="nelja_pelaaja"){
        if(vuoro===1){
            for (let i of tulokset) {
                pelaaja1_pisteet += i;
            }
            vuoro=2;
            console.log(vuoro);
            tulokset.length = 0;
            const pisteet = document.getElementById("pisteet");
            pisteet.textContent = "Pisteet: 0";
            const noppaKuvat = document.getElementById("kuvat");
            noppaKuvat.innerHTML = "";
        }
        else if(vuoro===2){
            for (let i of tulokset) {
                pelaaja2_pisteet += i;
            }
            vuoro=3;
            console.log(vuoro);
            tulokset.length = 0;
            const pisteet = document.getElementById("pisteet");
            pisteet.textContent = "Pisteet: 0";
            const noppaKuvat = document.getElementById("kuvat");
            noppaKuvat.innerHTML = "";
        }
        else if(vuoro===3){
            for (let i of tulokset) {
                pelaaja3_pisteet += i;
            }
            vuoro=4;
            console.log(vuoro);
            tulokset.length = 0;
            const pisteet = document.getElementById("pisteet");
            pisteet.textContent = "Pisteet: 0";
            const noppaKuvat = document.getElementById("kuvat");
            noppaKuvat.innerHTML = "";
        }
        else if(vuoro===4){
            for (let i of tulokset) {
                pelaaja4_pisteet += i;
            }
            vuoro=1;
            console.log(vuoro);
            tulokset.length = 0;
            const pisteet = document.getElementById("pisteet");
            pisteet.textContent = "Pisteet: 0";
            const noppaKuvat = document.getElementById("kuvat");
            noppaKuvat.innerHTML = "";
        }
    }
}
function checkPisteet(){
    if(pelaaja1_pisteet>=25){
        pisteet.textContent = `${nimi1} voitti, paina 'Restart' pelaamaan uudelleen`;
        stopTurn()
    }
    else if(pelaaja2_pisteet>=25){
        pisteet.textContent = `${nimi2} voitti, paina 'Restart' pelaamaan uudelleen`;
        stopTurn()
    }
    else if(pelaaja3_pisteet>=25){
        pisteet.textContent = `${nimi3} voitti, paina 'Restart' pelaamaan uudelleen`;
        stopTurn()
    }
    else if(pelaaja4_pisteet>=25){
        pisteet.textContent = `${nimi4} voitti, paina 'Restart' pelaamaan uudelleen`;
        stopTurn()
    }
}

function Restart() {
    location.reload();
}

pelaa.addEventListener("click", RollDice);
lopeta.addEventListener("click",stopTurn);
restartBtn.addEventListener("click", Restart);