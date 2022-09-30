var minuti, secondi, ore, counter, interval, lastPressed, 
comboCount, secondiCombo, nascondiTrofeo, secondiTrofeo, hideInc, hideIncTimer;
var numTrofei = 10;
var combo, tBody, tTitle, tLabel, inc;
//^ lo inizializzo fuori perchè, dato che initialize() accade dopo buildTrophyList(), non sarebbe inizializzata
var audio;
var combo10Earned, counter25Earned, counter100Earned, gameOver;

function initialize()
{
    minuti = ore = counter = secondiTrofeo = 0;
    secondi = -1;   //perchè la prima cosa che fa è aggiornarlo
    comboCount = 1;
    secondiCombo = 2;
    nascondiTrofeo = 5;
    lastPressed = 11;
    interval = 1000;
    combo10Earned = counter25Earned = counter100Earned = gameOver = false;
    interval = setInterval(writeTime, interval);    //faccio partire l'intervallo di 1 secondo
    audio = document.getElementById("trophy");
    document.getElementById("intro").style.display = "none";
    combo = document.getElementById("combo");
    tTitle = document.getElementById("trophyTitle");
    tBody = document.getElementById("trophyBody");
    tLabel = document.getElementById("trophyLabel");
    inc = document.getElementById("increment");
    hideInc = 2;
    writeTime();
}

let display;
function writeTime()
{
    //aggiorno il timer
    secondi++;
    if(secondi >= 60)
    {
        secondi -= 60;
        minuti ++;
        if(minuti >= 60)
        {
            minuti -= 60;
            ore++;
        }
    }
    //mettere gli zeri per completezza
    if (ore >= 0 && ore <=9) display = "0" + ore;
    else display = ore;
    if(minuti >= 0 && minuti <= 9) display += ":0" + minuti;
    else display += ":" + minuti;
    if(secondi >= 0 && secondi <= 9) display += ":0" + secondi;
    else display += ":" + secondi;
    document.getElementById("stopwatch").innerHTML = display;   //aggiorno il display

    lastPressed++;  //aggiungo secondi per la combo
    if(lastPressed > secondiCombo)
    {
        comboCount = 1;
        document.getElementById("combo").innerHTML = "";
        document.getElementById("combo").style.fontSize = "4.5rem";
    }

    secondiTrofeo++;    //aggiungo secondi per la label del trofeo
    if (secondiTrofeo > nascondiTrofeo) {
        document.getElementById("trophyLabel").style.visibility = "hidden";
    }

    hideIncTimer++;      //aggiungo secondi per il +1
    if (hideIncTimer >= hideInc) {
        inc.style.visibility = "hidden";
    }
}

function add1()
{
    counter++;
    document.getElementById("mainBTN").innerHTML = counter;

    //resetto l'animazione del +1
    inc.style.visibility = "visible";
    inc.style.animation = 'none';
    inc.offsetHeight; /* trigger reflow */
    inc.style.animation = null;
    hideIncTimer = 0;

    checkForTrophies();     //per i trofei di counter
    if(lastPressed <= secondiCombo)
    {
        printCombo();
    }
    lastPressed = 0;
}

function printCombo()
{
    comboCount++;
    document.getElementById("combo").innerHTML = ("Combo x" + comboCount);
    //coloro la scritta combo con il colore della combo e ne cambio la dimensione
    switch (comboCount) {
        case 2:
            combo.style.color = "#220901";
            break;
        case 3:
            combo.style.color = "#621708";
            combo.style.fontSize = "5rem";
        break;
        case 4:
            combo.style.color = "#941B0C";
            combo.style.fontSize = "5.5rem";
            break;
        case 5:
        case 6:
        case 7:
        case 8:
        case 9:
            combo.style.color = "#BC3908";
            combo.style.fontSize = "6rem";
        break;
        case 10:
            combo.style.color = "purple";
            combo.style.fontSize = "6.5rem";
            checkForTrophies();
        break;
        default:    //da qui in poi li voglio tutti così
            combo.style.color = "purple";
            combo.style.fontSize = "6.5rem";
    }
}

function checkForTrophies()
{
    if(comboCount == 10 && !combo10Earned)  //provare a sostituirlo con un array
    {
        audio.play();
        combo10Earned = true;
        showTrophy(1);
    }
    if(counter == 25 && !counter25Earned)
    {
        audio.play();
        counter25Earned = true;
        showTrophy(2);
    }

    if(counter == 100 && !counter25Earned)
    {
        audio.play();
        counter100Earned = true;
        showTrophy(4);
    }

    if(endgame && counter == 0)
    {
        audio.play();
        showTrophy(9);
    }
}

function showTrophy(code){
    switch (code) {
        case 1:     //combo x10
            //imposto i valori per il pop-up
            tTitle.innerHTML = "Ora si ragiona";    //titolo
            tBody.innerHTML = "Ottieni una combo x10 di domande";   //contenuto
            //imposto i valori per i trofei della paginma dei trofei (trophyPage)
            document.getElementById("t0").innerHTML = "Ora si ragiona"; //titolo
            document.getElementById("b0").innerHTML = "Ottieni una combo x10 di domande";   //contenuto
        break;
        case 2:
            tTitle.innerHTML = "Voglia di imparare";
            tBody.innerHTML = "Fai 25 domande";
            document.getElementById("t1").innerHTML = "Voglia di imparare";
            document.getElementById("b1").innerHTML = "Fai 25 domande";
        break;
        case 3:

        break;
        case 4:
            tTitle.innerHTML = "100 domande?!?!?";
            tBody.innerHTML = "Forse a questo punto ci colpa il prof";
            document.getElementById("t3").innerHTML = "100 domande?!?!?";
            document.getElementById("b3").innerHTML = "Forse a questo punto ci colpa il prof";
        break;
        case 9:
            tTitle.innerHTML = "ERROR 404";
            tBody.innerHTML = "Nessuna domanda trovata.";
            document.getElementById("t0").innerHTML = "ERROR 404";
            document.getElementById("b0").innerHTML = "Nessuna domanda trovata.";
            //lo metto nel primo perchè tanto è l'unico
        break;
    }
    tLabel.style.visibility = "visible";
    tLabel.style.animation = 'none';
    tLabel.offsetHeight; /* trigger reflow */
    tLabel.style.animation = null; 
    secondiTrofeo = 0;
}

function trophyPageOn()
{
    document.getElementById("trophyPage").style.display = "block";
    //checkForTrophies
    if(gameOver)
    {
        document.getElementById("score").style.display = "none";
    }
}
function trophyPageOff()
{
    document.getElementById("trophyPage").style.display = "none";
    if(gameOver)
    {
        document.getElementById("score").style.display = "block";
    }
}

function buildTrophyList()
{
    for(var i = 0; i < numTrofei; i++)
    {
        document.writeln("<p class='TLtitle'id='t" + i + "'>Trofeo nascosto</p>");
        document.writeln("<p class='TLbody' id='b" + i + "'>???</p>");
    }
}

function endgame()
{
    gameOver = true;
    clearInterval(interval);    //interrompo la conta dei secondi
    document.getElementById("titoloFine").innerHTML = ("Lezione terminata!");
    document.getElementById("bodyFine").innerHTML = ("Ivan ha chiesto " + counter + " domande in " + display);
    document.getElementById("score").style.display = "block";
    document.getElementById("stopTimer").disabled = "true";
    checkForTrophies();     //vedo se ho ottenuto il trofeo 9
}

function reload()
{
    location.reload();
}