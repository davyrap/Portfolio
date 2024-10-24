const player = "Davide";
const input = '<div class="input">' + player + '>&nbsp;<p class="input-user"></p><div class="cursor">&#9608;</div><p class="input-user"></div>';
const maxCommandLength = 30;

var terminal;

var inputs;
var leftActiveInput;
var rightActiveInput;
var cursorIndex = 0;

var typedCommand = "";
var commandHistory = [];
var selectedCommandIndex = 0;
var isWriting = false;

var typedIndex = 0;

window.onload = function () {
    terminal = document.getElementById("console");
    terminal.innerHTML += input;
    leftActiveInput = GetNextInput(1);
    rightActiveInput = GetNextInput(0);
}

addEventListener("keydown", function (event) {
    if(isWriting) return;
    if(!IsInputValid(event.key)) return;

    if(event.key == "Enter") {
        HideCursor();
        if(typedCommand === "") {
            CreateNextInput();
            return;
        }
        SwitchCommand(typedCommand);
        commandHistory[commandHistory.length] = typedCommand;
        typedCommand = "";
        selectedCommandIndex = 0;
        cursorIndex = 0;
        return;
    }

    if(typedCommand.length >= maxCommandLength) return;

    if(event.key == "ArrowUp") {
        if(selectedCommandIndex >= commandHistory.length) return;
        selectedCommandIndex++;
        typedCommand = commandHistory[commandHistory.length - selectedCommandIndex];
    }
    else if(event.key == "ArrowDown") {
        if(selectedCommandIndex <= 0) return;
        if(selectedCommandIndex == 1) {
            typedCommand = "";
            selectedCommandIndex = 0;
        }
        else {
            selectedCommandIndex--;
            typedCommand = commandHistory[commandHistory.length - selectedCommandIndex];
        }
    }
    
    else if(event.key == "ArrowLeft") {
        if(cursorIndex >= typedCommand.length) return;
        cursorIndex ++;
    }

    else if(event.key == "ArrowRight") {
        if(cursorIndex <= 0) return;
        cursorIndex --;
    }

    else if(event.key == "Backspace") {
        if(typedCommand.length == 0) return;
        typedCommand = typedCommand.slice(0, typedCommand.length - cursorIndex - 1) + typedCommand.slice(typedCommand.length - cursorIndex);
    }

    else typedCommand = typedCommand.slice(0, typedCommand.length - cursorIndex) + event.key + typedCommand.slice(typedCommand.length - cursorIndex);

    leftActiveInput.innerHTML = typedCommand.slice(0, typedCommand.length - cursorIndex);
    rightActiveInput.innerHTML = typedCommand.slice(typedCommand.length - cursorIndex);
});

function Type(text) {
    if(typedIndex >= text.length) {
        typedIndex = 0;
        isWriting = false;
        document.getElementById("double-bip").play();
        CreateNextInput();
        return;
    }

    isWriting = true;
    terminal.innerHTML = terminal.innerHTML + text[typedIndex];
    typedIndex++;
    // Scroll to the bottom of the terminal
    terminal.scrollTop = terminal.scrollHeight;
    setTimeout(Type, 30, text);
}

function GetNextInput(index) {
    inputs = document.getElementsByClassName("input-user");
    return inputs[inputs.length - index - 1];    // prendo l'ultimo
}

function CreateNextInput() {
    if(typedCommand.toLowerCase() != "cleanup") {
        terminal.innerHTML += input;
        leftActiveInput = GetNextInput(1);
        rightActiveInput = GetNextInput(0);
        terminal.scrollTop = terminal.scrollHeight;    
    }
}

function IsInputValid(input) {
    if(input.length == 1) return true;
    if(input == "Enter") return true;
    if(input == "Backspace") return true;
    if(input.substring(0, 5) == "Arrow") return true;
    return false;
}

function HideCursor() {
    let inputs = document.getElementsByClassName("input");
    let current = inputs[inputs.length - 1].childNodes[2];
    current.classList.add("hidden");
}

function SwitchCommand(str) {
    command = str.split(" ");
    switch (command[0].toLowerCase()) {
        case "":
        break;
        case "imanoob":
        case "imnb":
            imanoob();
        break;
        case "cleanup":
        case "clup":
            Cleanup();
        break;
        case "filesystem":
        case "fs":
            fs.ListFile();
        break;
        case "mailsystem":
        case "ms":
            ms.ListMail();
        break;
        case "read":
            if(command[1] == "mail") ms.ReadMail(command[2]);
            else fs.ReadFile(command[1]);
        break;
        case "delete":
        case "del":
            fs.DeleteFile(command[1]);
        break;
        case "download":
        case "dwnld":
            fs.DownloadFile(command[1]);
        break;
        case "install":
            fs.DownloadApp(command[1]);
        break;
        case "uninstall":
        case "uninst":
            fs.DeleteApp(command[1]);
        break;
        default:
            Type("Dude '" + command[0] + "' is not a command. Come on.\n");
    }
}

function Cleanup() {
    terminal.innerHTML = input;
    leftActiveInput = GetNextInput(1);
    rightActiveInput = GetNextInput(0);
}