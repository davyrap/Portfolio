/*-------------------------------------------------------------------------------------------------------------
|                                        FUNZIONI DI INIZIALIZZAZIONE
-------------------------------------------------------------------------------------------------------------*/
let cartelle = {
    "1": [17, 21, 43, 67, 84, 9, 14, 58, 74, 85, 28, 37, 45, 54, 75],
    "2": [8, 38, 53, 64, 86, 6, 15, 26, 33, 73, 18, 49, 51, 79, 88],
    "3": [24, 30, 41, 57, 68, 16, 39, 65, 78, 87, 1, 19, 29, 46, 52],
    "4": [13, 32, 44, 55, 83, 7, 12, 20, 47, 69, 5, 36, 66, 76, 80],
    "5": [2, 25, 56, 61, 77, 11, 31, 59, 72, 82, 4, 22, 48, 63, 81],   //si scrive     cartelle["1"][0]
    "6": [3, 23, 35, 62, 89, 10, 42, 50, 60, 71, 27, 34, 40, 70, 90],
    "7": [11, 28, 49, 62, 85, 3, 18, 55, 70, 81, 22, 34, 47, 57, 75],
    "8": [2, 31 ,56 ,68 ,90 ,4 ,19 ,25 ,32 ,78 ,14 ,43 ,51 ,71, 82],
    "9": [29 ,37 ,42 ,58 ,67 ,13 ,33 ,65 ,77 ,86 ,5 ,17 ,26 ,48 ,50],
    "10":[16 ,36 ,45 ,52 ,88 ,1 ,12 ,24 ,41, 61 ,9 ,30 ,66 ,74 ,80],
    "11":[6 ,20 ,59 ,69 ,73 ,10 ,39 ,53 ,76 ,89 ,8 ,23 ,46 ,63 ,87],
    "12":[7 ,27 ,38 ,60 ,84 ,15 ,44 ,54 ,64 ,79 ,21 ,35 ,40 ,72 ,83],
    "13":[13, 20, 41, 67, 87, 5, 10, 57, 72, 83, 24, 36, 47, 55, 77],
    "14":[4, 33, 52, 69, 84, 2, 11, 28, 34, 70, 16, 42, 54, 73, 90],
    "15":[21, 39, 43, 59, 60, 14, 35, 63, 79, 88, 6, 12, 26, 49, 53],
    "16":[15, 38, 44, 58, 81, 7, 19, 27, 46, 68, 3, 32, 61, 76, 89],
    "17":[1, 22, 51, 65, 75, 18, 37, 56, 78, 86, 8, 25, 45, 64, 82],
    "18":[9, 29, 31, 62, 85, 17, 48, 50, 66, 71, 23, 30, 40, 74, 80],
    "19":[12, 23, 49, 64, 82, 4, 10, 55, 77, 83, 22, 30, 41, 58, 70],
    "20":[3, 36, 59, 69, 80, 1, 15, 29, 32, 71, 13, 44, 57, 75, 90],
    "21":[21, 35, 47, 52, 67, 11, 33, 68, 78, 89, 5, 14, 25, 40, 54], 
    "22":[19, 34, 45, 51, 86, 2, 18, 26, 46, 63, 6, 38, 61, 73, 81],
    "23":[8, 24, 53, 60, 76, 17, 37, 50, 74, 88, 7, 27, 43, 62, 87],
    "24":[9, 28, 31, 66, 84, 16, 48, 56, 65, 79, 20, 39, 42, 72, 85],
    "25":[2, 11, 18, 23, 24, 39, 46, 47, 52, 58, 69, 71, 75, 81, 89],
    "26":[3, 9, 15, 19, 22, 33, 37, 40, 56, 57, 64, 77, 78, 82, 83],
    "27":[4, 12, 16, 20, 27, 32, 38, 42, 43, 50, 54, 66, 67, 76, 84],
    "28":[1, 6, 13, 14, 29, 31, 34, 45, 49, 55, 62, 63, 74, 80, 88],
    "29":[7, 8, 10, 26, 28, 35, 48, 51, 59, 65, 68, 70, 79, 85, 87],
    "30":[5, 17, 21, 25, 30, 36, 41, 44, 53, 60, 61, 72, 73, 86, 90],
    "31":[5, 13, 10, 24, 27, 36, 40, 47, 59, 58, 65, 79, 70, 87, 86],
    "32":[4, 2 ,11 ,16 ,21 ,33 ,34 ,41 ,53 ,56 ,61 ,77 ,73 ,88 ,90],
    "33":[6 ,12 ,15 ,20 ,28 ,39 ,35 ,42 ,43 ,54 ,51 ,64 ,69 ,78 ,81],
    "34":[7 ,3 ,19 ,18 ,26 ,38 ,32 ,49 ,44 ,52 ,63 ,67 ,71 ,82, 89],
    "35":[1 ,8 ,14 ,22 ,25 ,37 ,46 ,57 ,50 ,62 ,68 ,75 ,74 ,84 ,85],
    "36":[9 ,17 ,29 ,23 ,31 ,30 ,45 ,48 ,55 ,66 ,60 ,72 ,76 ,80 ,83],
    "37":[13, 24, 40, 65, 87, 10, 36, 59, 79, 86, 5, 27, 47, 58, 70],
    "38":[4, 11, 33, 61, 88, 2, 21, 34, 53, 77, 16, 41, 56, 73, 90],
    "39":[6, 20, 39, 54, 64, 12, 35, 42, 69, 78, 15, 28, 43, 51, 81],
    "40":[19, 38, 49, 52, 82, 7, 18, 44, 63, 89, 3, 26, 32, 67, 71],
    "41":[1, 22, 57, 62, 75, 14, 37, 50, 74, 84, 8, 25, 46, 68, 85],
    "42":[9, 31, 45, 66, 80, 17, 29, 55, 60, 72, 23, 30, 48, 76, 83],
    "43":[11 ,23 ,42 ,67 ,83 ,14 ,35 ,55 ,73 ,86 ,5 ,26 ,48 ,51 ,74],
    "44":[2, 13, 37, 66, 87, 6, 27, 36, 50, 71, 16, 49, 58, 77, 85],
    "45":[4, 25, 39, 59, 68, 12, 33, 40, 61, 72, 15, 20, 45, 54, 80],
    "46":[19, 32, 46, 52, 90, 3, 18, 43, 62, 82, 7, 22, 30, 69, 79],
    "47":[1, 29, 53, 64, 78, 17, 38, 57, 75, 89, 9, 28, 41, 65, 88],
    "48":[8, 31, 44, 60, 81, 10, 21, 56, 63, 76, 24, 34, 47, 70, 84],
    "49":[13, 23, 41, 65, 87, 16, 34, 58, 70, 85, 8, 27, 42, 53, 76],
    "50":[7, 14, 35, 60, 88, 5, 21, 36, 55, 78, 19, 43, 57, 71, 90],
    "51":[9, 24, 31, 56, 64, 17, 32, 46, 66, 73, 15, 29, 49, 52, 84], 
    "52":[18, 33, 47, 50, 82, 4, 12, 44, 63, 81, 2, 26, 37, 62, 77],
    "53":[1, 25, 51, 69, 74, 11, 39, 54, 72, 83, 3, 28, 45, 68, 86],
    "54":[6, 30, 40, 61, 89, 10, 22, 59, 67, 75, 20, 38, 48, 79, 80],
    "55":[12, 29, 40, 63, 88, 19, 33, 56, 75, 84, 4, 23, 46, 57, 72],
    "56":[3, 15, 38, 69, 83, 1, 26, 35, 59, 79, 11, 48, 53, 73, 90],
    "57":[5, 20, 34, 54, 68, 14, 37, 49, 66, 71, 18, 27, 43, 50, 81],
    "58":[17, 37, 44, 58, 80, 6, 10, 42, 62, 87, 2, 25, 30, 67, 74],
    "59":[7, 21, 52, 60, 78, 13, 39, 51, 77, 82, 9, 24, 47, 61, 89],
    "60":[8, 36, 45, 64, 86, 16, 28, 55, 65, 76, 22, 37, 41, 70, 85],
};
let copia = {
    "1": [17, 21, 43, 67, 84, 9, 14, 58, 74, 85, 28, 37, 45, 54, 75],
    "2": [8, 38, 53, 64, 86, 6, 15, 26, 33, 73, 18, 49, 51, 79, 88],
    "3": [24, 30, 41, 57, 68, 16, 39, 65, 78, 87, 1, 19, 29, 46, 52],
    "4": [13, 32, 44, 55, 83, 7, 12, 20, 47, 69, 5, 36, 66, 76, 80],
    "5": [2, 25, 56, 61, 77, 11, 31, 59, 72, 82, 4, 22, 48, 63, 81],   //si scrive     cartelle["1"][0]
    "6": [3, 23, 35, 62, 89, 10, 42, 50, 60, 71, 27, 34, 40, 70, 90],
    "7": [11, 28, 49, 62, 85, 3, 18, 55, 70, 81, 22, 34, 47, 57, 75],
    "8": [2, 31 ,56 ,68 ,90 ,4 ,19 ,25 ,32 ,78 ,14 ,43 ,51 ,71, 82],
    "9": [29 ,37 ,42 ,58 ,67 ,13 ,33 ,65 ,77 ,86 ,5 ,17 ,26 ,48 ,50],
    "10":[16 ,36 ,45 ,52 ,88 ,1 ,12 ,24 ,41, 61 ,9 ,30 ,66 ,74 ,80],
    "11":[6 ,20 ,59 ,69 ,73 ,10 ,39 ,53 ,76 ,89 ,8 ,23 ,46 ,63 ,87],
    "12":[7 ,27 ,38 ,60 ,84 ,15 ,44 ,54 ,64 ,79 ,21 ,35 ,40 ,72 ,83],
    "13":[13, 20, 41, 67, 87, 5, 10, 57, 72, 83, 24, 36, 47, 55, 77],
    "14":[4, 33, 52, 69, 84, 2, 11, 28, 34, 70, 16, 42, 54, 73, 90],
    "15":[21, 39, 43, 59, 60, 14, 35, 63, 79, 88, 6, 12, 26, 49, 53],
    "16":[15, 38, 44, 58, 81, 7, 19, 27, 46, 68, 3, 32, 61, 76, 89],
    "17":[1, 22, 51, 65, 75, 18, 37, 56, 78, 86, 8, 25, 45, 64, 82],
    "18":[9, 29, 31, 62, 85, 17, 48, 50, 66, 71, 23, 30, 40, 74, 80],
    "19":[12, 23, 49, 64, 82, 4, 10, 55, 77, 83, 22, 30, 41, 58, 70],
    "20":[3, 36, 59, 69, 80, 1, 15, 29, 32, 71, 13, 44, 57, 75, 90],
    "21":[21, 35, 47, 52, 67, 11, 33, 68, 78, 89, 5, 14, 25, 40, 54], 
    "22":[19, 34, 45, 51, 86, 2, 18, 26, 46, 63, 6, 38, 61, 73, 81],
    "23":[8, 24, 53, 60, 76, 17, 37, 50, 74, 88, 7, 27, 43, 62, 87],
    "24":[9, 28, 31, 66, 84, 16, 48, 56, 65, 79, 20, 39, 42, 72, 85],
    "25":[2, 11, 18, 23, 24, 39, 46, 47, 52, 58, 69, 71, 75, 81, 89],
    "26":[3, 9, 15, 19, 22, 33, 37, 40, 56, 57, 64, 77, 78, 82, 83],
    "27":[4, 12, 16, 20, 27, 32, 38, 42, 43, 50, 54, 66, 67, 76, 84],
    "28":[1, 6, 13, 14, 29, 31, 34, 45, 49, 55, 62, 63, 74, 80, 88],
    "29":[7, 8, 10, 26, 28, 35, 48, 51, 59, 65, 68, 70, 79, 85, 87],
    "30":[5, 17, 21, 25, 30, 36, 41, 44, 53, 60, 61, 72, 73, 86, 90],
    "31":[5, 13, 10, 24, 27, 36, 40, 47, 59, 58, 65, 79, 70, 87, 86],
    "32":[4, 2 ,11 ,16 ,21 ,33 ,34 ,41 ,53 ,56 ,61 ,77 ,73 ,88 ,90],
    "33":[6 ,12 ,15 ,20 ,28 ,39 ,35 ,42 ,43 ,54 ,51 ,64 ,69 ,78 ,81],
    "34":[7 ,3 ,19 ,18 ,26 ,38 ,32 ,49 ,44 ,52 ,63 ,67 ,71 ,82, 89],
    "35":[1 ,8 ,14 ,22 ,25 ,37 ,46 ,57 ,50 ,62 ,68 ,75 ,74 ,84 ,85],
    "36":[9 ,17 ,29 ,23 ,31 ,30 ,45 ,48 ,55 ,66 ,60 ,72 ,76 ,80 ,83],
    "37":[13, 24, 40, 65, 87, 10, 36, 59, 79, 86, 5, 27, 47, 58, 70],
    "38":[4, 11, 33, 61, 88, 2, 21, 34, 53, 77, 16, 41, 56, 73, 90],
    "39":[6, 20, 39, 54, 64, 12, 35, 42, 69, 78, 15, 28, 43, 51, 81],
    "40":[19, 38, 49, 52, 82, 7, 18, 44, 63, 89, 3, 26, 32, 67, 71],
    "41":[1, 22, 57, 62, 75, 14, 37, 50, 74, 84, 8, 25, 46, 68, 85],
    "42":[9, 31, 45, 66, 80, 17, 29, 55, 60, 72, 23, 30, 48, 76, 83],
    "43":[11 ,23 ,42 ,67 ,83 ,14 ,35 ,55 ,73 ,86 ,5 ,26 ,48 ,51 ,74],
    "44":[2, 13, 37, 66, 87, 6, 27, 36, 50, 71, 16, 49, 58, 77, 85],
    "45":[4, 25, 39, 59, 68, 12, 33, 40, 61, 72, 15, 20, 45, 54, 80],
    "46":[19, 32, 46, 52, 90, 3, 18, 43, 62, 82, 7, 22, 30, 69, 79],
    "47":[1, 29, 53, 64, 78, 17, 38, 57, 75, 89, 9, 28, 41, 65, 88],
    "48":[8, 31, 44, 60, 81, 10, 21, 56, 63, 76, 24, 34, 47, 70, 84],
    "49":[13, 23, 41, 65, 87, 16, 34, 58, 70, 85, 8, 27, 42, 53, 76],
    "50":[7, 14, 35, 60, 88, 5, 21, 36, 55, 78, 19, 43, 57, 71, 90],
    "51":[9, 24, 31, 56, 64, 17, 32, 46, 66, 73, 15, 29, 49, 52, 84], 
    "52":[18, 33, 47, 50, 82, 4, 12, 44, 63, 81, 2, 26, 37, 62, 77],
    "53":[1, 25, 51, 69, 74, 11, 39, 54, 72, 83, 3, 28, 45, 68, 86],
    "54":[6, 30, 40, 61, 89, 10, 22, 59, 67, 75, 20, 38, 48, 79, 80],
    "55":[12, 29, 40, 63, 88, 19, 33, 56, 75, 84, 4, 23, 46, 57, 72],
    "56":[3, 15, 38, 69, 83, 1, 26, 35, 59, 79, 11, 48, 53, 73, 90],
    "57":[5, 20, 34, 54, 68, 14, 37, 49, 66, 71, 18, 27, 43, 50, 81],
    "58":[17, 37, 44, 58, 80, 6, 10, 42, 62, 87, 2, 25, 30, 67, 74],
    "59":[7, 21, 52, 60, 78, 13, 39, 51, 77, 82, 9, 24, 47, 61, 89],
    "60":[8, 36, 45, 64, 86, 16, 28, 55, 65, 76, 22, 37, 41, 70, 85],
};
var napoletana = [
    {"number": "1", "text": "L'Italia", "translation": "L'Italia"},
    {"number": "2", "text": "'A piccerella", "translation": "La bambina"},
    {"number": "3", "text": "'A jatta", "translation": "La gatta"},
    {"number": "4", "text": "'O puorco", "translation": "Il maiale"},
    {"number": "5", "text": "'A mano", "translation": "La mano"},
    {"number": "6", "text": "Chella che guarda 'nterra", "translation": "Quella che guarda a terra"},
    {"number": "7", "text": "'O vase", "translation": "Il vaso"},
    {"number": "8", "text": "'A maronna", "translation": "La madonna"},
    {"number": "9", "text": "'A figliata", "translation": "La prole"},
    {"number": "10", "text": "'E fasule", "translation": "I fagioli"},
    {"number": "11", "text": "'E suricille", "translation": "I topi"},
    {"number": "12", "text": "'E surdate", "translation": "I soldati"},
    {"number": "13", "text": "Sant'Antonio", "translation": "Sant'Antonio"},
    {"number": "14", "text": "'O mbriaco", "translation": "L'ubriaco"},
    {"number": "15", "text": "'O guaglione", "translation": "Il ragazzo"},
    {"number": "16", "text": "'O culo", "translation": "Il deretano"},
    {"number": "17", "text": "'A disgrazia", "translation": "La disgrazia"},
    {"number": "18", "text": "'O sanghe", "translation": " Il sangue"},
    {"number": "19", "text": "'A resata", "translation": "La risata"},
    {"number": "20", "text": "'A festa", "translation": "La festa"},
    {"number": "21", "text": "'A femmena annura", "translation": "La donna nuda"},
    {"number": "22", "text": "'O pazzo", "translation": "Il pazzo"},
    {"number": "23", "text": "'O scemo", "translation": "Lo scemo"},
    {"number": "24", "text": "'E gguardie", "translation": "I poliziotti"},
    {"number": "25", "text": "Natale", "translation": "Natale"},
    {"number": "26", "text": "Nanninella", "translation": "Anna"},
    {"number": "27", "text": "'O cantero", "translation": "Il vaso da notte"},
    {"number": "28", "text": "'E zzizze", "translation": "Il seno"},
    {"number": "29", "text": "'O pate d'e criature", "translation": "Il padre dei bimbi"},
    {"number": "30", "text": "'E palle d'o tenente", "translation": "Le palle del tenente"},
    {"number": "31", "text": "'O padrone ' e casa", "translation": "Il padrone di casa"},
    {"number": "32", "text": "'O capitone", "translation": "Il capitone"},
    {"number": "33", "text": "Ll'anne ' e Cristo", "translation": "Gli anni di Cristo"},
    {"number": "34", "text": "'A capa", "translation": "La testa"},
    {"number": "35", "text": "L'aucielluzzo", "translation": "L'uccellino"},
    {"number": "36", "text": "'E castagnelle", "translation": "Le nacchere spagnole"},
    {"number": "37", "text": "'O monaco", "translation": "Il frate"},
    {"number": "38", "text": "'E mmazzate", "translation": "Le botte"},
    {"number": "39", "text": "'A funa 'nganna", "translation": "La corda al collo"},
    {"number": "40", "text": "'A paposcia", "translation": "L'ernia inguinale"},
    {"number": "41", "text": "'O curtiello", "translation": "Il coltello"},
    {"number": "42", "text": "'O ccafè", "translation": "Il caffè"},
    {"number": "43", "text": "'Onna pereta fore 'o barcone", "translation": "La donna pettegola"},
    {"number": "44", "text": "'E ccancelle", "translation": "Il carcere"},
    {"number": "45", "text": "'O vino", "translation": "Il vino"},
    {"number": "46", "text": "'E denare", "translation": "I soldi"},
    {"number": "47", "text": "'O muorto", "translation": "Il morto"},
    {"number": "48", "text": "'O muorto che parla", "translation": "Il morto che parla"},
    {"number": "49", "text": "'O piezzo ' e carne", "translation": "La donna prosperosa"},
    {"number": "50", "text": "'O ppane", "translation": "Il pane"},
    {"number": "51", "text": "'O ciardino", "translation": "Il giardino"},
    {"number": "52", "text": "'A mamma", "translation": "La mamma"},
    {"number": "53", "text": "'O viecchio", "translation": "Ll vecchio"},
    {"number": "54", "text": "'O cappiello", "translation": "Ll cappello"},
    {"number": "55", "text": "'A museca", "translation": "La musica"},
    {"number": "56", "text": "'A caruta", "translation": "La caduta"},
    {"number": "57", "text": "'O scartellato", "translation": "Il gobbo"},
    {"number": "58", "text": "'O paccotto", "translation": "Il pacchetto"},
    {"number": "59", "text": "'E pile", "translation": "I peli"},
    {"number": "60", "text": "Se lamenta", "translation": "Si lamenta"},
    {"number": "61", "text": "'O cacciatore", "translation": "Il cacciatore"},
    {"number": "62", "text": "'O muorto acciso", "translation": "Il morto ammazzato"},
    {"number": "63", "text": "'A sposa", "translation": "La sposa"},
    {"number": "64", "text": "'A sciammeria", "translation": "La marsina"},
    {"number": "65", "text": "'O chianto", "translation": "Il pianto"},
    {"number": "66", "text": "'E ddoie zetelle", "translation": "Le due zitelle"},
    {"number": "67", "text": "'O totano int''a chitarra", "translation": "Il totano nella chitarra"},
    {"number": "68", "text": "'A zuppa cotta", "translation": "La zuppa cotta"},
    {"number": "69", "text": "Sott'e'ncoppa", "translation": "Sottosopra"},
    {"number": "70", "text": "'O palazzo", "translation": "Il palazzo"},
    {"number": "71", "text": "L'ommo 'e merda", "translation": "L'uomo senza princìpi"},
    {"number": "72", "text": "'A meraviglia", "translation": "La meraviglia"},
    {"number": "73", "text": "'O spitale", "translation": "L'ospedale"},
    {"number": "74", "text": "'A rotta", "translation": "La grotta"},
    {"number": "75", "text": "Pullecenella", "translation": "Pulcinella"},
    {"number": "76", "text": "'A funtana", "translation": "La fontana"},
    {"number": "77", "text": "'E riavulille", "translation": "I diavoletti"},
    {"number": "78", "text": "'A bella figliola", "translation": "La prostituta"},
    {"number": "79", "text": "'O mariuolo", "translation": "Il ladro"},
    {"number": "80", "text": "'A vocca", "translation": "La bocca"},
    {"number": "81", "text": "'E sciure", "translation": "I fiori"},
    {"number": "82", "text": "'A tavula 'mbandita", "translation": "La tavola imbandita"},
    {"number": "83", "text": "'O maletiempo", "translation": "Il maltempo"},
    {"number": "84", "text": "'A cchiesa", "translation": "La Chiesa"},
    {"number": "85", "text": "Ll'aneme 'o priatorio", "translation": "Le anime del purgatorio"},
    {"number": "86", "text": "'A puteca", "translation": "Il negozio"},
    {"number": "87", "text": "'E perucchie", "translation": "I pidocchi"},
    {"number": "88", "text": "'E casecavalle", "translation": "I caciocavalli"},
    {"number": "89", "text": "'A vecchia", "translation": "La vecchia"},
    {"number": "90", "text": "'A paura", "translation": "La paura"}
];

let estratto, cart;
let c1 = new Array();
let usciti = new Array();
function inizializza () {
    let pos = 1;
    for(i = 0; i < 9; i++){
        document.writeln("<tr class'row'>");
        for(j=0; j<10; j++){
            document.writeln("<th class='num' id='", pos,  "'>", pos, "</th>");
            pos++;
        }
        document.writeln("</tr>");
    }
}
/*-------------------------------------------------------------------------------------------------------------
|                                        FUNZIONI DEL DIV "SELECT"
-------------------------------------------------------------------------------------------------------------*/
function start() {
    document.getElementById("soldi").style.display = "inline";
    document.getElementById("select").style.display = "none";
    document.body.style.backgroundImage = "url('assets/secondosf.jpg')";
    if (document.getElementById("volume").checked == true) {
        var audio = document.getElementById("audio3");
    audio.play();
    }
    document.getElementById("txb_id").value = attive[0];
    show();
    for (let i = 0; i < 91; i++) {
        usciti[i] = -1;
    }
}
/*-------------------------------------------------------------------------------------------------------------
|                                        FUNZIONI DEL DIV "GIOCO"
-------------------------------------------------------------------------------------------------------------*/
function gioco() {
    document.getElementById("gioco").style.display = "inline";
    document.getElementById("soldi").style.display = "none";
}
/*-------------------------------------------------------------------------------------------------------------
|                                        FUNZIONI DEL DIV "BUTTONS"
-------------------------------------------------------------------------------------------------------------*/
let primo = true;

function estrai() {
    let uscito;
    if (!endgame) {     //se il gioco non è finito
        do{
            estratto = Math.floor(Math.random() * 90) + 1;
            if (usciti [estratto] == estratto) {
                uscito = false;
            }
            else uscito = true;
        } while (uscito == false);
        usciti[estratto] = estratto;
        for (let d = 1; d < 60; d++) {
            for (let s = 0; s < 15; s++) {
                if (copia[d][s] == estratto) {
                    copia[d][s] = -1;
                }
            }
        }
        document.getElementById(estratto).style.backgroundColor="#D90429";
        document.getElementById(estratto).style.color="#EDF2F4";
        if (document.getElementById("lng").checked==true) {
            document.getElementById("smorfia").innerHTML = estratto + "<br><hr>" + napoletana[--estratto].translation;
        }
        else document.getElementById("smorfia").innerHTML = estratto + "<br><hr>" + napoletana[--estratto].text;
        if (document.getElementById("volume").checked == true) {
            var audio = document.getElementById("audio2");
            audio.play();
        }
        show();     //mostra achievement cartella
        controlla();    //controlla se c'è qualche achievment
    }
    else window.location.reload();
}
function show() {
    for(i=0;i<15;i++){
        document.getElementById("c"+i).style.backgroundColor = "#8D99AE";
        document.getElementById("c"+i).style.color = "#2B2D42";
    }
    cart = document.getElementById("txb_id").value;
    console.log("cartella ", cart);
    for(i=0; i<15; i++){
        document.getElementById("c"+i).innerHTML = cartelle[cart][i];
        for(j=0;j<90;j++){
            if(cartelle[cart][i]==usciti[j]){
                document.getElementById("c"+i).style.backgroundColor="#D90429";
                document.getElementById("c"+i).style.color="#EDF2F4";
            }
        }
    }
    if (document.getElementById("volume").checked == true) {
        var audio = document.getElementById("audio3");
        audio.play();
    }
}
/*-------------------------------------------------------------------------------------------------------------
|                                    FUNZIONI RELATIVE ALLA CARTELLA SINGOLA
-------------------------------------------------------------------------------------------------------------*/
function stampa() {
    console.log(cartelle[cart]);
    let pos = 0;
    for(i=0; i<3; i++){
        document.write("<tr class'row'>");
        for(j=0; j<5; j++){
            document.write("<th class='num' id='c", pos, "'>", pos, "</th>");
            pos++;
        }
        document.write("</tr>");
    }
}
/*-------------------------------------------------------------------------------------------------------------
|                                        FUNZIONI RELATIVE ALLE CHECKBOX
-------------------------------------------------------------------------------------------------------------*/
let attive = new Array();
let ambo = terno = quaterno = cinquina = tombola = false;

function creaBTN() {
    let pos = 1;
    for (let i = 0; i < 6; i++) {
        for (let j = 0; j < 10; j++) {
            document.write("<input type='checkbox' class='bx' name='numero_cartella' id='b", pos, "' onclick='addsub(", pos, ")'>");
            if(pos<10) document.write("0", pos);
            else document.write(pos);   
            pos++;
            document.write("&nbsp&nbsp");
        }
        document.write("<br><br>");
    }
}
function addsub(quale) {
    let nuovo = true;
    document.getElementById("begin").disabled = false;
    document.getElementById("begin").style.backgroundColor = "#EDF2F4";
    for (let i = 0; i < attive.length; i++) {
        if(attive[i]==quale){
            attive[i] = null;       //funge, ma cerca un'altra soluzione se possibile
            nuovo = false;
        }
    }
    if(nuovo){
        attive.push(quale);
    }
    if (document.getElementById("volume").checked == true) {
        var audio = document.getElementById("audio1");
        audio.play();
    }
}
let endgame = false;
function controlla() {    
    for (let i = 0; i < attive.length; i++) {       //per tutte le cartelle attive
        cart = attive[i];
        for (let h=1, j=2, k=3, l=4, a=5; h < 15; h++, j++, k++, l++, a++) {
            if (!ambo) {
                if (copia[cart][h] == copia[cart][j] && h != 4 && h != 9) {
                    alert("La cartella " + cart + " ha fatto ambo!");
                    ambo = true;
                    if (document.getElementById("volume").checked == true){
                        var sound = document.getElementById("ambo");
                        sound.play();
                    }
                    document.getElementById("a"+1).innerHTML = "Cartella " + cart;
                    document.getElementById("a"+1).style.backgroundColor = "#EF233C";
                    document.getElementById("e"+1).style.backgroundColor = "#EF233C";
                    document.getElementById("a"+1).style.color = "#EDF2F4";
                    document.getElementById("e"+1).style.color = "#EDF2F4";
                }
            }
            if(!terno) {
                if (copia[cart][h] == copia[cart][j] && copia[cart][h] == copia[cart][k] &&
                    h != 4 && h != 9 && h != 3 && h != 8) {
                        alert("La cartella " + cart + " ha fatto terno!");
                    terno = true;
                    if (document.getElementById("volume").checked == true){
                        var sound = document.getElementById("terno");
                        sound.play();
                    }
                    document.getElementById("a"+2).innerHTML = "Cartella " + cart;
                    document.getElementById("a"+2).style.backgroundColor = "#EF233C";
                    document.getElementById("e"+2).style.backgroundColor = "#EF233C";
                    document.getElementById("a"+2).style.color = "#EDF2F4";
                    document.getElementById("e"+2).style.color = "#EDF2F4";
                }
            }
            if(!quaterno) {
                if (copia[cart][h] == copia[cart][j] && copia[cart][h] == copia[cart][k] && copia[cart][h] == copia[cart][l] &&
                    h != h != 4 && h != 9 && h != 3 && h != 8 && h != 2 && h != 7) {
                        alert("La cartella " + cart + " ha fatto quaterna!");
                    quaterno = true;
                    if (document.getElementById("volume").checked == true){
                        var sound = document.getElementById("quaterno");
                        sound.play();
                    }
                    document.getElementById("a"+3).innerHTML = "Cartella " + cart;
                    document.getElementById("a"+3).style.backgroundColor = "#EF233C";
                    document.getElementById("e"+3).style.backgroundColor = "#EF233C";
                    document.getElementById("a"+3).style.color = "#EDF2F4";
                    document.getElementById("e"+3).style.color = "#EDF2F4";
                }
            }
            if(!cinquina) {
                if (copia[cart][h] == copia[cart][j] && copia[cart][h] == copia[cart][k] && copia[cart][h] == copia[cart][l] && copia[cart][h] == copia[cart][a] &&
                    h != 4 && h != 9 && h != 3 && h != 8 && h != 2 && h != 7 && h != 1 && h != 6) {
                    alert("La cartella " + cart + " ha fatto cinquina!");
                    cinquina = true;
                    if (document.getElementById("volume").checked == true){
                        var sound = document.getElementById("cinquina");
                        sound.play();
                    }
                    document.getElementById("a"+4).innerHTML = "Cartella " + cart;
                    document.getElementById("a"+4).style.backgroundColor = "#EF233C";
                    document.getElementById("e"+4).style.backgroundColor = "#EF233C";
                    document.getElementById("a"+4).style.color = "#EDF2F4";
                    document.getElementById("e"+4).style.color = "#EDF2F4";
                }
            }
            if (!tombola) {
                if (copia[cart][1] == copia[cart][2] && copia[cart][2] == copia[cart][3] && copia[cart][3] == copia[cart][4] && copia[cart][4] == copia[cart][5] &&
                copia[cart][5] == copia[cart][6] && copia[cart][6] == copia[cart][7] &&copia[cart][7] == copia[cart][8] && copia[cart][8] == copia[cart][9] &&
                copia[cart][9] == copia[cart][10] && copia[cart][10] == copia[cart][11] &&copia[cart][11] == copia[cart][12] && copia[cart][12] == copia[cart][13] &&
                copia[cart][13] == copia[cart][14]) {
                    alert("La cartella " + cart + " ha fatto tombola");
                    if (document.getElementById("volume").checked == true){
                        var sound = document.getElementById("tombola");
                        sound.play();
                    }
                    document.getElementById("a"+5).innerHTML = "Cartella " + cart;
                    document.getElementById("a"+5).style.backgroundColor = "#EF233C";
                    document.getElementById("e"+5).style.backgroundColor = "#EF233C";
                    document.getElementById("a"+5).style.color = "#EDF2F4";
                    document.getElementById("e"+5).style.color = "#EDF2F4";
                    tombola = true;
                    document.getElementById("estrai").innerHTML = "Ricomincia";
                    document.getElementById("estrai").style.fontSize = "2.2rem";
                    endgame = true;
                }
            }
            
        }
    }
}
/*-------------------------------------------------------------------------------------------------------------
|                                        FUNZIONI RELATIVE ALLA LINGUA
-------------------------------------------------------------------------------------------------------------*/
function cambialingua() {
    if(document.getElementById("lng").checked==true){
        document.getElementById("lang").innerHTML = "Italiano";
    }
    else document.getElementById("lang").innerHTML = "Dialetto";
    var audio = document.getElementById("audio2");
    audio.play();
}
/*-------------------------------------------------------------------------------------------------------------
|                                        FUNZIONI RELATIVE AI SOLDI
-------------------------------------------------------------------------------------------------------------*/
function costo() {
    if (document.getElementById("volume").checked == true) {
        var audio = document.getElementById("audio1");
    audio.play();
    }
    somma = document.getElementById("txb_co").value;
    numero = attive.length;
    somma *= numero;
    mezzo = (somma / 100) * 40;
    mezzo = mezzo.toFixed(2);
    document.getElementById("e5").innerHTML = "€" + mezzo;
    mezzo = (somma / 100) * 30;
    mezzo = mezzo.toFixed(2);
    document.getElementById("e4").innerHTML = "€" + mezzo;
    mezzo = (somma / 100) * 15;
    mezzo = mezzo.toFixed(2);
    document.getElementById("e3").innerHTML = "€" + mezzo;
    mezzo = (somma / 100) * 10;
    mezzo = mezzo.toFixed(2);
    document.getElementById("e2").innerHTML = "€" + mezzo;
    mezzo = (somma / 100) * 5;
    mezzo = mezzo.toFixed(2);
    document.getElementById("e1").innerHTML = "€" + mezzo;
    document.getElementById("txb_co").disabled = true;
    gioco();
}
function enable() {
    if (document.getElementById("txb_co").value > 0) {
        document.getElementById("costo").disabled = false;
    }
}
/*-------------------------------------------------------------------------------------------------------------
|                                        FUNZIONI RELATIVE AL SUONO
-------------------------------------------------------------------------------------------------------------*/
function cambiavol() {
    if (document.getElementById("sound").innerHTML == "Volume") {
        document.getElementById("sound").innerHTML = "Muto";
    }
    else document.getElementById("sound").innerHTML = "Volume";
}