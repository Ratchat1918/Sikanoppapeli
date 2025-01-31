const pelaa = document.getElementById("pelaa");
const restarBtn = document.getElementById("restart");
const lopeta=document.getElementById("lopeta");
let tulokset = [];
let vuoro=1;
console.log(vuoro);
let nimi1;
let nimi2;
let nimi3;
let nimi4;

function RollDice() {
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
    const pisteet = document.getElementById("pisteet");
    const noppaKuvat = document.getElementById("kuvat");
    let kuvat = [];
    let num1 = Math.floor(Math.random() * 6) + 1;
    let num2 = Math.floor(Math.random() * 6) + 1;
    kuvat.push(`<img src="dice_kuvat/${num1}.png">`);
    kuvat.push(`<img src="dice_kuvat/${num2}.png">`);
    console.log(num1, num2);
    noppaKuvat.innerHTML = kuvat.join(" ");
    if(vuoro===1){
        document.getElementById("nykyinen_pelaaja").textContent=`${nimi1} vuora`;
    }
    if(vuoro===2){
        document.getElementById("nykyinen_pelaaja").textContent=`${nimi2} vuora`;
    }
    if(vuoro===3){
        document.getElementById("nykyinen_pelaaja").textContent=`${nimi3} vuora`;
    }
    if(vuoro===4){
        document.getElementById("nykyinen_pelaaja").textContent=`${nimi4} vuora`;
    }

    if ((num1 === 1 && num2 !== 1) || (num2 === 1 && num1 !== 1)) {
        tulokset.length = 0; 
        pisteet.textContent = "Tappio, seuravan pelaajan vuoro";
        stopTurn();
    } else {
        let summa = 0;
        for (let i of tulokset) {
            summa += i;
        }

        if (num1 === 1 && num2 === 1) {
            let a = 25;
            tulokset.push(a);
        } else if (num1 === num2) {
            let b = (num1 + num2) * 2;
            tulokset.push(b);
        } else {
            let c = num1 + num2;
            tulokset.push(c);
        }

        summa = tulokset.reduce((acc, val) => acc + val, 0); 

        if (summa >= 100) {
            pisteet.textContent = "Voitto, paina 'Restart' pelaamaan uudelleen";
            tulokset.length = 0;
        } else {
            pisteet.textContent = `Pisteet: ${summa}`;
        }
    }
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
        }
    }
}

function Restart() {
    vuoro=1;
    tulokset.length = 0;
    const pisteet = document.getElementById("pisteet");
    pisteet.textContent = "Pisteet:";
    const noppaKuvat = document.getElementById("kuvat");
    noppaKuvat.innerHTML = "";
}

pelaa.addEventListener("click", RollDice);
restarBtn.addEventListener("click", Restart);
lopeta.addEventListener("click",stopTurn);
