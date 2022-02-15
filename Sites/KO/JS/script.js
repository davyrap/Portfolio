let alunni = [
    {"nome": "Davide", "cognome": "Cocivera"},
    {"nome": "Damiano", "cognome": "Corallo"},
    {"nome": "Samuele", "cognome": "De Vita"},
    { "nome": "Ivan", "cognome": "Di Maria"},
    {"nome": "Andrea", "cognome": "Gambino"},
    {"nome": "Lorenzo", "cognome": "Gioia"},
    {"nome": "Marzia", "cognome": "Mannino"},
    {"nome": "Valerio", "cognome": "Pisano"},
    {"nome": "Davide", "cognome": "Rapisarda"},
    {"nome": "Domenico", "cognome": "Ribaudo"},
    {"nome": "Lorenzo", "cognome": "Saia"},
    {"nome": "Lorenzo", "cognome": "Schinaia"},
    {"nome": "Fabio", "cognome": "Scirè"},
    {"nome": "Samuele", "cognome": "Scuderi"},
    {"nome": "Gianluca", "cognome": "Spampinato"},
    {"nome": "Salvatore", "cognome": "Toscano"},
    {"nome": "Alessandro", "cognome": "Zizza"},
];
let domande = [     //la 1 è sempre quella giusta
    //rap
    {"domanda": "A che serve il CIDR?", "r1": "Supernettare delle reti", "r2": "Subnettare con SM a lunghezza variabile", "r3": "Subnettare con SM a lunghezza fissa", "r4": "Subnettare 3 reti"},
    {"domanda": "Per supernettare una rete devo:", "r1": "Rimuovere dei bit al net ID", "r2": "Aggiungere un bit all'host ID", "r3": "Aggiungere dei bit al net ID", "r4": "Controllare che i criteri di divisibilità siano verificati"},
    {"domanda": "Per supernettare 4 reti che devo fare:", "r1": "Riservare 2 bit destinati al Host-ID Net-ID", "r2": "Riservare 4 bit agli host ID", "r3": "Sottrarre 4 bit agli host ID", "r4": "Sottrarre 2 bit agli host ID"},
    {"domanda": "Quali sono i criteri da verificare prima di supernettare delle reti?", "r1": "Contiguità, stessa classe di appartenenza, indirizzi da unire multipli di 2, divisibilità", "r2": "Contiguità, divisibilità", "r3": "Contiguità, stessa classe di appartenenza, classe A o classe B,indirizzi da unire multipli di 2, divisibilità", "r4": "Contiguità, classe A o classe B, divisibilità"},
    {"domanda": "Che vantaggi porta una rete supernettata?", "r1": "Tanti indirizzi ad un costo ridotto rispetto ad un indirizzo di classe B", "r2": "Nessuno, il supernetting è una pratica superflua ed obsoleta", "r3": "Tanti indirizzi, ma una rete di classe B costa di meno", "r4": "Vantarsi coi propri amici di saper fare il supernetting"},
    //andrea, marzia, valerio
    {"domanda": "Quale parte dell'ip viene modificata nel subnetting?", "r1": "Il NET-ID", "r2": "Il primo byte", "r3": "L'HOST-ID", "r4": "L'ultimo byte"},
    {"domanda": "Come otteniamo il numero di sottoreti?", "r1": "Facendo 2^n", "r2": "Vedendo il valore del terzo byte", "r3": "Contando il numero di bit a 1", "r4": "Facendo 2^n-1"},
    {"domanda": "In base a cosa si sceglie la subnet-mask nel VLSM?", "r1": "In base al numero degli host per ogni sottorete", "r2": "In base al terzo bit del secondo byte", "r3": "In base agli host della prima sottorete", "r4": "In base al numero dopo lo /"},
    {"domanda": "Qual'è il problema del subnetting con maschera a lunghezza fissa?", "r1": "Lo spreco di indirizzi ip", "r2": "Non ci permette di navigare su internet", "r3": "Se ci sono troppi host si rischia di cambiare il NET-ID", "r4": "Se ci sono troppi host si rischia di rovinare la rete"},
    {"domanda": "Come si fa il VLSM?", "r1": "Creando una maschera variabile per ogni sottorete in base al numero di host", "r2": "Facendo il traceroute", "r3": "Modificando ipconfig", "r4": "Impostando il DHCP"},
    {"domanda": "Che problema risolve il VLSM?", "r1": "Non si sprecano indirizzi ip", "r2": "La maschera diventa più precisa", "r3": "Non si cambia il NET-ID", "r4": "Permette di eseguire i comandi del ICMP"},
    {"domanda": "Che caratteristica ha il VLSM?", "r1": "Maschera a lunghezza variabile", "r2": "Maschera a lunghezza fissa", "r3": "Maschera più corta", "r4": "Nessuna delle precedenti"},
    {"domanda": "Qual è l'acronimo del VLSM?", "r1": "Variable Length Subnet Mask", "r2": "Volumetric Large Subnet Mask", "r3": "Variable Large Subnet Maschera", "r4": "Nessuna delle precedenti"},
    {"domanda": "A cosa serve il subnetting?", "r1": "Serve per dividere una rete in più sottoreti", "r2": "Per creare una rete", "r3": "Per unire più sottoreti", "r4": "Per cambiare il NET-ID"},
    //devita
    {"domanda": "Dato l'indirizzo IP: 192.168.0.1, specificare la subnet mask", "r1": "255.255.255.0", "r2": "255.0.0.0", "r3": "255.255.0.0", "r4": "255.255.255.255"},
    {"domanda": "Che cos è un indirizzo IP?", "r1": "È un indirizzo univoco che identifica un dispositivo su internet o in una rete locale", "r2": "Nessuna delle precedenti", "r3": "È un indirizzo che non fa nulla", "r4": "È un indirizzo univoco che non identifica un dispositivo su internet o in una rete locale"},
    {"domanda": "Cos'è e a cosa serve la subnet Mask?", "r1": "La subnet mask è una sequenza di bit posti al valore 1 in corrispondenza dei bit dedicati al Network-ID e servono per effettuare una maschera per determinare l indirizzo della rete di una classe", "r2": "Nessuna delle precedenti", "r3": "La subnet mask non serve a niente", "r4": "La subnet mask è una sequenza di bit posti al valore 0 in corrispondenza dei bit dedicati al Network-ID e servono per agire su una maschera che non serve per determinare l indirizzo della rete di una classe"},
    {"domanda": "Quante e quali sono le classificazioni di un indirizzo IP?", "r1": "Sono 5 e sono: classe A,B,C,D,E", "r2": "Sono 4 e sono: A,B,C,D", "r3": "Sono 6 e sono A,B,C,D,E,F,G ", "r4": "Sono 3 e sono: A,B,C "},
    {"domanda": "Come si calcola il numero massimo di Host-Id in una sottorete?", "r1": "2^s-2 dove (s) sono i numeri di bit settati a 1", "r2": "2^s-2 dove (s) sono i numeri di bit settati a 0", "r3": "2^s dove (s) sono i numeri di bit settati a 1", "r4": "2^s-2 dove (s) sono i numeri di bit settati a 3 "},
    {"domanda": "Come si calcola il numero massimo di sottoreti?", "r1": "2^s dove (s) sono i numeri di bit settati a 1", "r2": "2^z dove (z) sono i numeri di bit settati a 1", "r3": "2^s dove (s) sono i numeri di bit settati a 0", "r4": "2^s-4 dove (s) sono i numeri di bit settati a 7 "},
    {"domanda": "Da cosa è composto un indirizzo IP?", "r1": "Network id e Host id", "r2": "Network id, Subnet id, Host id,indirizzo di broadcast, gateway", "r3": "Network id", "r4": "Indirizzo di broadcast, network id, host id"},
    //schinaia
    {"domanda": "Quali sono i parametri di configurazione di un host?", "r1": "L'indirizzo ip, subnet mask, indirizzo di broadcast, default gateway, dns", "r2": "L'indirizzo ip, subnet mask, indirizzo di broadcast, default gateway", "r3": "L'indirizzo ip, subnet mask, indirizzo di broadcast, default gateway, dns, indirizzo Mac dell'host", "r4": "L'indirizzo ip, subnet mask, indirizzo di broadcast"},
    {"domanda": "Quali sono le fasi del dhcp in ordine?", "r1": "DHCPDISCOVER, DHCPOFFER, DHCPREQUEST, DHCPACK", "r2": "DHCPREQUEST, DHCPOFFER, DHCPACCEPT, DHCPDISCOVER", "r3": "DHCPOFFER, DHCPREQUEST, DHCPLEASE, DHCPDISCOVER", "r4": "DHCPDISCOVER, DHCPACK, DHCPREQUEST, DHCPOFFER"},
    {"domanda": "Per cosa sta ARP?", "r1": "Address Resolution Protocol", "r2": "Address Resolution Program", "r3": "Address Resolving Program", "r4": "Address Resolving Protocol"},
    //gianluca
    {"domanda": "Perché si preferisce l'utilizzo del supernetting al subnetting?", "r1": "Per rendere più flessibile la gestione degli indirizzi IP, ed evitare sprechi di indirizzi", "r2": "Per semplificare i calcoli", "r3": "Per velocizzare la rete", "r4": "Per semplificare il funzionamento della subnet mask"},
    //turi
    {"domanda": "Come si chiama il sistema operativo utilizzato nei router?", "r1": "Internetwork Operating System", "r2": "Internet Operating System", "r3": "Internet Open System", "r4": "Internetwork Open System"},
    {"domanda": "A cosa servono le porte console in un router?", "r1": "Le porte console serve per lo startup del router. Può servire anche per il recupero della password", "r2": "Nessuna delle precedenti", "r3": "Le porte console serve per compiere monitoraggio o troubleshooting", "r4": "La porta console serve per 'comandare' il router in maniera remota"},
    {"domanda": "A cosa serve la porta AUX in un router?", "r1": "Non è presente in tutti i router, ma serve per connettere il router alle reti per compiere monitoraggio o troubleshooting", "r2": "Nessuna delle precedenti", "r3": "Serve per il recupero della password", "r4": "Non esiste una porta del genere"},
    {"domanda": "Quale delle seguenti affermazioni sulla Privileged EXEC Mode è corretta?", "r1": "Serve per poter effettuare la configurazione e la manutenzione del dispositivo", "r2": "È necessario impostare una password per accedere a questa modalità", "r3": "Serve per assegnare e revocare permessi speciali all'interno del dispositivo", "r4": "Non è necessario impostare alcuna password per accedere a questa modalità"},
    {"domanda": "In un router, cosa farà il comando 'enable'?", "r1": "Farà avvenire il passaggio da modalità User a Privileged", "r2": "Non è un comando esistente", "r3": "Farà avvenire il passaggio da modalità Privileged a User", "r4": "Accenderà il router"},
    {"domanda": "In un router, a cosa serve la modalità di accesso di tipo 'Console' alla Command Line Interface (CLI)", "r1": "Serve per la configurazione iniziale del dispositivo di rete e procedure di recupero password", "r2": "Entrambe sono corrette", "r3": "Nessuna delle precedenti", "r4": "Serve per monitare un host in maniera remota"},
    //ribba
    {"domanda": "Cos'è l'ICMP? ", "r1": "È un protocollo di controllo", "r2": "È un applicativo", "r3": "È un programma", "r4": "È un comando"},
    {"domanda": "Per cosa si usa l'ICMP?", "r1": "Si usa per trasmettere informazioni", "r2": "Si usa per conoscere Mac address e ARP", "r3": "Si usa come sostitutivo delle API di Windows", "r4": "Si usa per l'assegnazione degli indirizzi"},
    {"domanda": "Chi può inviare messaggi ICMP?", "r1": "Router e host", "r2": "Host", "r3": "Tutti i tipi di router", "r4": "Router appartenenti alla famiglia Cisco"},
    {"domanda": "Quali di questi campi sono presenti nel record ICMP?", "r1": "Tutti quelli elencati", "r2": "Codice e checksum", "r3": "Add field e data", "r4": "Nessuno di questi"},
    //coci
    {"domanda": "Che cos'è la NAT?", "r1": "Un servizio che permette a host privati di accedere tramite indirizzi pubblici ", "r2": "Un programma che richiede la configurazione di un host", "r3": "Un servizio che permette a host privati di comunicare con host della stessa rete ", "r4": "Un protocollo internet"},
    {"domanda": "Qual è la differenza tra NAT dinamica e NAT statica?", "r1": "La NAT dinamica è più efficiente e sicura", "r2": "La NAT statica mette in relazione gli indirizzi uno ad uno mentre la NAT dinamica mette in relazione solo all'occorrenza", "r3": "Nella NAT statica c'è un solo indirizzo pubblico invece nella NAT dinamica ci sono più indirizzi", "r4": "Non ci sono differenze "},
    {"domanda": "Che cos'è la PAT?", "r1": "È un Protocollo che traduce sia gli indirizzi IP sia i numeri delle porte TCP e UDP", "r2": "È un protocollo che mette in relazione un solo host con un singolo indirizzo IP", "r3": "È un protocollo che svolge le stesse funzioni della NAT ", "r4": "È un servizio che traduce i numeri delle porte TCP e UDP"},
    //saia
    {"domanda": "Nella espansione delle schede aggiuntive del router 2600 Series, qual è lo slot dove vengono aggiunte le porte di tipo ethernet?", "r1": "Networking Module Slot", "r2": "Wirless Module Processing", "r3": "WAN Interface Card Slot", "r4": "Nessuna delle precedenti"},
    {"domanda": "Quali tra questi è un servizio offerto dall'IOS Cisco?", "r1": "Sono tutte giuste", "r2": "Accesso sicuro e affidabile alla risorse della rete", "r3": "Funzioni base di routing e switching", "r4": "Scalabilità della rete"},
    {"domanda": "In quale modalità possono operare i device cisco?", "r1": "ROM monitor", "r2": "Nessuna delle precedenti", "r3": "Interface RAM", "r4": "Boot RAM"},
    {"domanda": "Per poter effettuare la configurazione e la manutenzione del dispositivo è necessario essere in modalità?", "r1": "Privileged EXEC", "r2": "Nessuna delle 3", "r3": "Offline", "r4": "Administrator"},
    // {"domanda": "", "r1": "", "r2": "", "r3": "", "r4": ""},
];
var Gdestratto = -1;     //-1 perchè la prima cosa che fa lo incrementa
var Gpestratto = -1;
var corrette = new Array();
var eliminati = new Array();
function avvia() {
    for (let i = 0; i < 75; i++) {
        random1 = Math.floor(Math.random() * domande.length) + 0;
        random2 = Math.floor(Math.random() * domande.length) + 0;
        copia = domande[random1];
        domande[random1] = domande[random2];
        domande[random2] = copia;
    }
    document.getElementById("main").style.display = "none";
    document.getElementById("domanda").style.display = "block";
    estrai();
}
//===============================================================================================================
let intervallo, ridondanza = false;
function estrai() {
    document.documentElement.scrollTop = 0;
    if(eliminati.length == 16) getback();       //schermata di vittoria
    else{
        document.getElementById("cNum").innerHTML = "15";
        for(let i = 1; i < 5; i++){     //abilito le risposte che avevo precedentemente disabilitato
            document.getElementById("b"+i).disabled = false;
        }
        document.getElementById("back").disabled = true;
        do{     //controllo che il giocatore non abbia perso
            nuovo = false;
            if (Gpestratto == 16) {
                Gpestratto = 0;
            }
            else Gpestratto++;
            if (eliminati.indexOf(alunni[Gpestratto]) == -1) {
                nuovo = true;
            }
        }while(!nuovo);
        document.getElementById("lbl_nome").innerHTML = "È il turno di " + alunni[Gpestratto].nome + " " + alunni[Gpestratto].cognome;
        if (!ridondanza) {
            do{     //controllo che la domanda non sia stata già indovinata
                nuovo = false;
                if (Gdestratto == corrette.length - 1) {
                    Gdestratto = 0;
                }
                else Gdestratto++;
                if (corrette.indexOf(domande[Gdestratto]) == -1) {
                    nuovo = true;
                }
            }while(!nuovo);
        }
        else Gdestratto++;
        document.getElementById("lbl_domanda").innerHTML = domande[Gdestratto].domanda;
        document.getElementById("b1").innerHTML = domande[Gdestratto].r1;
        document.getElementById("b2").innerHTML = domande[Gdestratto].r2;
        document.getElementById("b3").innerHTML = domande[Gdestratto].r3;
        document.getElementById("b4").innerHTML = domande[Gdestratto].r4;
        for (let i = 1; i <= 4; i++) {
            document.getElementById("b"+i).style.backgroundColor = "white";
            document.getElementById("b"+i).style.color = "black";
        }
        mescola();
        colora();
        tiempo = document.getElementById("quantity").innerHTML;     //resetto il timer
        document.getElementById("cNum").innerHTML = document.getElementById("quantity").innerHTML;      //resetto il numero del timer
        intervallo = setInterval(timeExpired, 1000);
    }
}
//===============================================================================================================
function timeExpired() {
    if(tiempo == 0){
        clearInterval(intervallo);
        fatto = true;
        for(let i = 1; i < 5; i++){
            document.getElementById("b"+i).style.backgroundColor = "red";
            document.getElementById("b"+i).disabled = true;
        }
        eliminati.push(alunni[Gpestratto]);
        audio = document.getElementById("s.wrong");
        audio.play();
        document.getElementById("back").disabled = false;
    }
    else {
        tiempo--;
        document.getElementById("cNum").innerHTML = tiempo;
    } 
}
//===============================================================================================================
function mescola() {
    var appoggio, random1, random2;
    for (let i = 0; i < 5; i++) {
        random1 = Math.floor(Math.random() * 4) + 1;
        random2 = Math.floor(Math.random() * 4) + 1;
        appoggio = document.getElementById("b"+random1).innerHTML;
        document.getElementById("b"+random1).innerHTML = document.getElementById("b"+random2).innerHTML;
        document.getElementById("b"+random2).innerHTML = appoggio;
    }
}
//===============================================================================================================
function check(chi){
    clearInterval(intervallo);
    var audio;
    document.getElementById("back").disabled = false;
    if(document.getElementById("b"+chi).innerHTML == domande[Gdestratto].r1){
        document.getElementById("b"+chi).style.backgroundColor = "green";
        document.getElementById("b"+chi).style.color = "white";
        corrette.push(domande[Gdestratto]);
        if (!muteSN) {
            audio = document.getElementById("s.correct");
            audio.play();
        }
    }
    else{
        document.getElementById("b"+chi).style.backgroundColor = "red";
        eliminati.push(alunni[Gpestratto]);
        if(!muteSN) {
            audio = document.getElementById("s.wrong");
            audio.play();
        }
    }
    for(let i = 1; i < 5; i++){
        document.getElementById("b"+i).disabled = true;
    }
}
//===============================================================================================================
function colora() {
    for(let i = 0; i < alunni.length; i++){
        if (eliminati.indexOf(alunni[i]) != -1) {
            document.getElementById("n"+i).style.color = "black";
            document.getElementById("n"+i).style.background = "red";
        }
        else if (eliminati.indexOf(alunni[i]) == -1) {
            document.getElementById("n"+i).style.color = "#F4EDED";
            document.getElementById("n"+i).style.background = "#36827F";
        }
        if(i == Gpestratto){
            document.getElementById("n"+i).style.background = "#343f80";
        }
    }
}
//===============================================================================================================
function getback() {
    document.getElementById("main").style.display = "block";
    document.getElementById("domanda").style.display = "none";
    document.getElementById("impostazioni").style.display = "none";
    let pos;
    for(let i = 0; i < alunni.length; i++){
        if (eliminati.indexOf(alunni[i]) == -1) {
            pos = i;
        }
    }
    document.getElementById("play").innerHTML = "Ha vinto " + alunni [pos].nome + " " + alunni[pos].cognome + "!";
    document.getElementById("play").disabled = true;
    document.getElementById("credits").style.display = "block";
}
//===============================================================================================================
function crea() {
    for(let i = 0; i < 17; i++){
        document.write("<p id='p", i,"'>", alunni[i].cognome,"</p> | &nbsp")
    }
}
//===============================================================================================================
function listap() {
    for (let i = 0; i < 25; i++) {
        let random1 = Math.floor(Math.random() * 17) + 0;
        let random2 = Math.floor(Math.random() * 17) + 0;
        let copia = alunni[random1];
        alunni[random1] = alunni[random2];
        alunni[random2] = copia;
    }
    document.write("<hr>");
    for (let i = 0; i < 17; i++) {
        document.write("<p id='n", i ,"'>", alunni[i].cognome, "</p><hr>");
    }
}
//===============================================================================================================
let tiempo = 15;
function time(chi) {
    if (chi == 'M'){
        if (tiempo != 1) {
            tiempo--;
        }
    }
    else tiempo++;
    document.getElementById("quantity").innerHTML = tiempo;
    document.getElementById("cNum").innerHTML = tiempo;
}
//===============================================================================================================
function rido() {
    if (ridondanza) {
        ridondanza = false;
        document.getElementById("siNo").innerHTML = "No";
    }
    else {
        ridondanza = true;
        document.getElementById("siNo").innerHTML = "Si";
    }
}
//===============================================================================================================
let muteSN = false;
function mute() {
    if (muteSN){
        muteSN = false;
        document.getElementById("lbl_vol").innerHTML = "Si";
    }
    else {
        muteSN = true;
        document.getElementById("lbl_vol").innerHTML = "No";
    }
}