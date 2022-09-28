var minuti, secondi, ore, counter, interval, lastPressed, 
comboCount, secondiCombo, nascondiTrofeo, secondiTrofeo, numTrofei;
var audio;
var combo10Earned;

function initialize()
{
    minuti = ore = counter = secondiTrofeo = 0;
    secondi = -1;   //perchè la prima cosa che fa è aggiornarlo
    comboCount = 1;
    secondiCombo = 2;
    nascondiTrofeo = 5;
    lastPressed = 11;
    interval = 1000;
    numTrofei = 5;  //numero di trofei presenti nel gioco
    combo10Earned = counter25Earned = false;
    document.getElementById("mainBTN").innerHTML = "+";
    interval = setInterval(writeTime, interval);    //faccio partire l'intervallo di 1 secondo
    audio = document.getElementById("trophy");
    document.getElementById("trophyLabel").style.visibility = "hidden";    //nascondo la label dei trofei
    writeTime();
}

function writeTime()
{
    let display;
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
        document.getElementById("combo").style.fontSize = "5rem";
    }

    secondiTrofeo++;    //aggiungo secondi per la label del trofeo
    if (secondiTrofeo > nascondiTrofeo) {
        document.getElementById("trophyLabel").style.visibility = "hidden";
    }
}

function add1()
{
    counter++;
    document.getElementById("mainBTN").innerHTML = counter;
    if(lastPressed <= secondiCombo)
    {
        comboCount++;
        document.getElementById("combo").innerHTML = ("Combo x" + comboCount);
        //coloro la scritta combo con il colore della combo e ne cambio la dimensione
        switch (comboCount) {
            case 2:
                document.getElementById("combo").style.color = "#220901";
                break;
            case 3:
                document.getElementById("combo").style.color = "#621708";
                document.getElementById("combo").style.fontSize = "5.5rem";
            break;
            case 4:
                document.getElementById("combo").style.color = "#941B0C";
                document.getElementById("combo").style.fontSize = "6rem";
                break;
            case 5:
                document.getElementById("combo").style.color = "#BC3908";
                document.getElementById("combo").style.fontSize = "6.5rem";
            break;
            default:    //da qui in poi li voglio tutti così
                document.getElementById("combo").style.color = "#F6AA1C";
                document.getElementById("combo").style.fontSize = "7.5rem";
        }
        checkForTrophies();
    }
    lastPressed = 0;
}

function checkForTrophies()
{
    if(comboCount == 10 && !combo10Earned)  //provare a sostituirlo con un array
    {
        audio.play();
        combo10Earned = true;
        showTrophy(1);
    }
    if(counter == 25)
    {
        audio.play();
        showTrophy(2);
    }

    if(counter == 100)
    {
        audio.play();
        showTrophy(4);
    }
}

function showTrophy(code){
    switch (code) {
        case 1:     //combo x10
            //imposto i valori per il pop-up
            document.getElementById("trophyTitle").innerHTML = "Ora si ragiona";    //titolo
            document.getElementById("trophyBody").innerHTML = "Ottieni una combo x10 di domande";   //contenuto
            //imposto i valori per i trofei della paginma dei trofei (trophyPage)
            document.getElementById("t0").innerHTML = "Ora si ragiona"; //titolo
            document.getElementById("b0").innerHTML = "Ottieni una combo x10 di domande";   //contenuto
        break;
        case 2:
            document.getElementById("trophyTitle").innerHTML = "Voglia di imparare";
            document.getElementById("trophyBody").innerHTML = "Fai 25 domande";
            document.getElementById("t1").innerHTML = "Voglia di imparare";
            document.getElementById("b1").innerHTML = "Fai 25 domande";
        break;
        case 3:

        break;
        case 4:
            document.getElementById("trophyTitle").innerHTML = "100 domande?!?!?";
            document.getElementById("trophyBody").innerHTML = "Forse a questo punto ci colpa il prof";
            document.getElementById("t3").innerHTML = "100 domande?!?!?";
            document.getElementById("b3").innerHTML = "Forse a questo punto ci colpa il prof";
        break;
    }
    document.getElementById("trophyLabel").style.visibility = "visible";
    secondiTrofeo = 0;
}

function trophyPageOn()
{
    document.getElementById("trophyPage").style.display = "block";
    checkForTrophies
}
function trophyPageOff()
{
    document.getElementById("trophyPage").style.display = "none";
}

function buildTrophyList()
{
    for(var i = 0; i < numTrofei; i++)
    {
        document.writeln("<p class='TLtitle'id='t" + i + "'>Trofeo nascosto</p>");
        document.writeln("<p class='TLbody' id='b" + i + "'>Descrizione trofeo</p>");
    }
}