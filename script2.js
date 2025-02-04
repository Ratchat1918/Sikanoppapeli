const pelaa = document.getElementById("pelaa");
const restarBtn = document.getElementById("restart");
const lopeta=document.getElementById("lopeta");
let tulokset = [];
let vuoro=1;
let pisteet1=0; let pisteet2=0; let pisteet3=0; let pisteet4=0;
let nykyiset_pisteet=0;
let nimi1; let nimi2; let nimi3; let nimi4;

function RollDice(){
    lopeta.disabled=false;
    console.log(`Vouro:${vuoro}`);
    const pisteet = document.getElementById("pisteet");
    const noppaKuvat = document.getElementById("kuvat");
    let kuvat = [];
    let num1 = Math.floor(Math.random() * 6) + 1;
    let num2 = Math.floor(Math.random() * 6) + 1;
    kuvat.push(`<img src="dice_kuvat/${num1}.png">`);
    kuvat.push(`<img src="dice_kuvat/${num2}.png">`);
    noppaKuvat.innerHTML = kuvat.join(" ");
    if(document.getElementById("valinta").value=="kaksi_pelaaja"){
        if(nimi1===undefined || nimi2===undefined || nimi1===null || nimi2===null || nimi1==='' || nimi2===''){
            nimi1=prompt("Syöttö pelaajan 1 nimi:");
            nimi2=prompt("Syöttö pelaajan 2 nimi:");
        }
        let summa = 0;
        switch(vuoro) {
            case 1:
                let tupla_maara1=0;
                console.log(`Pisteet1: ${pisteet1}`);
                pisteet.textContent=`Pisteet: ${pisteet1}`;
                document.getElementById("nykyinen_pelaaja").textContent = `Pelaajan ${nimi1} vuoro`;
                if(tupla_maara1===3){
                    nykyiset_pisteet=pisteet1;
                    stopTurn()
                }
                if ((num1 === 1 && num2 !== 1) || (num2 === 1 && num1 !== 1)) {
                    nykyiset_pisteet=pisteet1;
                    pisteet.textContent = "Tappio, seuravan pelaajan vuoro";
                    lopeta.disabled=true;
                    stopTurn();
                } else {
                    for (let i of tulokset) {
                        summa += i;
                    }
                    if (num1 === 1 && num2 === 1) {
                        tupla_maara1+=1;
                        let a = 25;
                        tulokset.push(a);
                    } else if (num1 === num2) {
                        tupla_maara1+=1;
                        let b = (num1 + num2) * 2;
                        tulokset.push(b);
                    } else {
                        let c = num1 + num2;
                        tulokset.push(c);
                    }
                    summa = tulokset.reduce((acc, val) => acc + val, 0);
                    nykyiset_pisteet=pisteet1+summa;
                    if (nykyiset_pisteet >= 100) {
                        pelaa.disabled=true;
                        pisteet.textContent = "Voitto, paina 'Restart' pelaamaan uudelleen";
                        tulokset.length = 0;
                    } else {
                        pisteet.textContent = `Pisteet: ${nykyiset_pisteet}`;
                    }
                }
                break;
            case 2:
                let tupla_maara2=0;
                console.log(`Pisteet2: ${pisteet1}`);
                document.getElementById("nykyinen_pelaaja").textContent = `Pelaajan ${nimi2} vuoro`;
                if(tupla_maara2===3){
                    nykyiset_pisteet=pisteet2;
                    stopTurn()
                }
                if ((num1 === 1 && num2 !== 1) || (num2 === 1 && num1 !== 1)) {
                    nykyiset_pisteet=pisteet2;
                    pisteet.textContent = "Tappio, seuravan pelaajan vuoro";
                    lopeta.disabled=true;
                    stopTurn();
                } else {
                    for (let i of tulokset) {
                        summa += i;
                    }
                    if (num1 === 1 && num2 === 1) {
                        tupla_maara2+=1;
                        let a = 25;
                        tulokset.push(a);
                    } else if (num1 === num2) {
                        tupla_maara2+=1;
                        let b = (num1 + num2) * 2;
                        tulokset.push(b);
                    } else {
                        let c = num1 + num2;
                        tulokset.push(c);
                    }
                    summa = tulokset.reduce((acc, val) => acc + val, 0);
                    nykyiset_pisteet=pisteet2+summa;
                    if (nykyiset_pisteet >= 100) {
                        pisteet.textContent = "Voitto, paina 'Restart' pelaamaan uudelleen";
                        tulokset.length = 0;
                        pelaa.disabled=true;
                    } else {
                        pisteet.textContent = `Pisteet: ${nykyiset_pisteet}`;
                    }
                }
                break;
            }
        }
        else if(document.getElementById("valinta").value=="nelja_pelaaja"){
            if(nimi1===undefined || nimi2===undefined || nimi3===undefined || nimi4===undefined || nimi1===null || nimi2===null || nimi3===null || nimi4===null || nimi1==='' || nimi2===''|| nimi3==='' || nimi4===''){
                nimi1=prompt("Syöttö pelaajan 1 nimi:");
                nimi2=prompt("Syöttö pelaajan 2 nimi:");
                nimi3=prompt("Syöttö pelaajan 3 nimi:");
                nimi4=prompt("Syöttö pelaajan 4 nimi:");
            }
            let summa = 0;
            switch(vuoro) {
                case 1:
                    let tupla_maara1=0;
                    console.log(`Pisteet1: ${pisteet1}`);
                    document.getElementById("nykyinen_pelaaja").textContent = `Pelaajan ${nimi1} vuoro`;
                    if(tupla_maara1===3){
                        nykyiset_pisteet=pisteet1;
                        stopTurn();
                    }
                    if ((num1 === 1 && num2 !== 1) || (num2 === 1 && num1 !== 1)) {
                        nykyiset_pisteet=pisteet1;
                        pisteet.textContent = "Tappio, seuravan pelaajan vuoro";
                        lopeta.disabled=true;
                        stopTurn();
                    } else {
                        for (let i of tulokset) {
                            summa += i;
                        }
                        if (num1 === 1 && num2 === 1) {
                            tupla_maara1+=1;
                            let a = 25;
                            tulokset.push(a);
                        } else if (num1 === num2) {
                            tupla_maara1+=1;
                            let b = (num1 + num2) * 2;
                            tulokset.push(b);
                        } else {
                            let c = num1 + num2;
                            tulokset.push(c);
                        }
                        summa = tulokset.reduce((acc, val) => acc + val, 0);
                        nykyiset_pisteet=pisteet1+summa;
                        if (nykyiset_pisteet >= 100) {
                            pisteet.textContent = "Voitto, paina 'Restart' pelaamaan uudelleen";
                            tulokset.length = 0;
                            pelaa.disabled=true;
                        } else {
                            pisteet.textContent = `Pisteet: ${nykyiset_pisteet}`;
                        }
                    }
                    break;
                
                case 2:
                    let tupla_maara2=0;
                    console.log(`Pisteet2: ${pisteet2}`);
                    document.getElementById("nykyinen_pelaaja").textContent = `Pelaajan ${nimi2} vuoro`;
                    if(tupla_maara2===3){
                        nykyiset_pisteet=pisteet2;
                        stopTurn();
                    }
                    if ((num1 === 1 && num2 !== 1) || (num2 === 1 && num1 !== 1)) {
                        nykyiset_pisteet=pisteet2;
                        pisteet.textContent = "Tappio, seuravan pelaajan vuoro";
                        lopeta.disabled=true;
                        stopTurn();
                    } else {
                        for (let i of tulokset) {
                            summa += i;
                        }
                        if (num1 === 1 && num2 === 1) {
                            tupla_maara2+=1;
                            let a = 25;
                            tulokset.push(a);
                        } else if (num1 === num2) {
                            tupla_maara2+=1;
                            let b = (num1 + num2) * 2;
                            tulokset.push(b);
                        } else {
                            let c = num1 + num2;
                            tulokset.push(c);
                        }
                        summa = tulokset.reduce((acc, val) => acc + val, 0);
                        nykyiset_pisteet=pisteet2+summa;
                        if (nykyiset_pisteet >= 100) {
                            pisteet.textContent = "Voitto, paina 'Restart' pelaamaan uudelleen";
                            tulokset.length = 0;
                            pelaa.disabled=true;
                        } else {
                            pisteet.textContent = `Pisteet: ${nykyiset_pisteet}`;
                        }
                    }
                    break;
                    case 3:
                        let tupla_maara3=0;
                        console.log(`Pisteet3: ${pisteet3}`);
                        document.getElementById("nykyinen_pelaaja").textContent = `Pelaajan ${nimi3} vuoro`;
                        if(tupla_maara3===3){
                            nykyiset_pisteet=pisteet3;
                            stopTurn();
                        }
                        if ((num1 === 1 && num2 !== 1) || (num2 === 1 && num1 !== 1)) {
                            nykyiset_pisteet=pisteet3;
                            pisteet.textContent = "Tappio, seuravan pelaajan vuoro";
                            lopeta.disabled=true;
                            stopTurn();
                        } else {
                            for (let i of tulokset) {
                                summa += i;
                            }
                            if (num1 === 1 && num2 === 1) {
                                tupla_maara3+=1;
                                let a = 25;
                                tulokset.push(a);
                            } else if (num1 === num2) {
                                tupla_maara3+=1;
                                let b = (num1 + num2) * 2;
                                tulokset.push(b);
                            } else {
                                let c = num1 + num2;
                                tulokset.push(c);
                            }
                            summa = tulokset.reduce((acc, val) => acc + val, 0);
                            nykyiset_pisteet=pisteet3+summa;
                            if (nykyiset_pisteet >= 100) {
                                pisteet.textContent = "Voitto, paina 'Restart' pelaamaan uudelleen";
                                tulokset.length = 0;
                                pelaa.disabled=true;
                            } else {
                                pisteet.textContent = `Pisteet: ${nykyiset_pisteet}`;
                            }
                        }
                        break;
                        case 4:
                            let tupla_maara4=0;
                            console.log(`Pisteet4: ${pisteet4}`);
                            document.getElementById("nykyinen_pelaaja").textContent = `Pelaajan ${nimi4} vuoro`;
                            if(tupla_maara4===3){
                                nykyiset_pisteet=pisteet4;
                                stopTurn();
                            }
                            if ((num1 === 1 && num2 !== 1) || (num2 === 1 && num1 !== 1)) {
                                nykyiset_pisteet=pisteet4;
                                pisteet.textContent = "Tappio, seuravan pelaajan vuoro";
                                lopeta.disabled=true;
                                stopTurn();
                            } else {
                                for (let i of tulokset) {
                                    summa += i;
                                }
                                if (num1 === 1 && num2 === 1) {
                                    tupla_maara4+=1;
                                    let a = 25;
                                    tulokset.push(a);
                                } else if (num1 === num2) {
                                    tupla_maara4+=1;
                                    let b = (num1 + num2) * 2;
                                    tulokset.push(b);
                                } else {
                                    let c = num1 + num2;
                                    tulokset.push(c);
                                }
                                summa = tulokset.reduce((acc, val) => acc + val, 0);
                                nykyiset_pisteet=pisteet4+summa;
                                if (nykyiset_pisteet >= 100) {
                                    pisteet.textContent = "Voitto, paina 'Restart' pelaamaan uudelleen";
                                    tulokset.length = 0;
                                    pelaa.disabled=true;
                                } else {
                                    pisteet.textContent = `Pisteet: ${nykyiset_pisteet}`;
                                }
                            }
                            break;
                        }
                    }
                };


function stopTurn(){
    if(document.getElementById("valinta").value=="kaksi_pelaaja"){
        switch(vuoro){
            case 1:
                pisteet1=nykyiset_pisteet;
                document.getElementById("pisteet1").textContent=`Pelaajan ${nimi1} pisteet: ${pisteet1}`;
                vuoro=2;
                tulokset.length = 0;
                nykyiset_pisteet=0;
                break;
            case 2:
                pisteet2=nykyiset_pisteet;
                document.getElementById("pisteet2").textContent=`Pelaajan ${nimi2} pisteet: ${pisteet2}`;
                vuoro=1;
                tulokset.length = 0;
                nykyiset_pisteet=0;
                break;  
        }
    }
    else if(document.getElementById("valinta").value=="nelja_pelaaja"){
        switch(vuoro){
            case 1:
                pisteet1=nykyiset_pisteet;
                document.getElementById("pisteet1").textContent=`Pelaajan ${nimi1} pisteet: ${pisteet1}`;
                vuoro=2;
                tulokset.length = 0;
                nykyiset_pisteet=0;
                break;
            case 2:
                pisteet2=nykyiset_pisteet;
                document.getElementById("pisteet2").textContent=`Pelaajan ${nimi2} pisteet: ${pisteet2}`;
                vuoro=3;
                tulokset.length = 0;
                nykyiset_pisteet=0;
                break;
            case 3:
                pisteet3=nykyiset_pisteet;
                document.getElementById("pisteet3").textContent=`Pelaajan ${nimi3} pisteet: ${pisteet3}`;
                vuoro=4;
                tulokset.length = 0;
                nykyiset_pisteet=0;
                break;
            case 4:
                pisteet4=nykyiset_pisteet;
                document.getElementById("pisteet4").textContent=`Pelaajan ${nimi4} pisteet: ${pisteet4}`;
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
restarBtn.addEventListener("click", Restart);
lopeta.addEventListener("click",stopTurn);
