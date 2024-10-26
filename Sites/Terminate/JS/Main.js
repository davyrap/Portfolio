var input = "";

var active = null;

var username = "";

window.onload = function () {
    document.getElementById("main-console").innerHTML += "\n<div class='input'>Insert your name: <p class='input-user'>" +
        "</p><div class='cursor'>&#9608;</div></div>";
    active = terminal.GetNextInput(0);
    addEventListener("keydown", UsernameInput);
}

function SwitchCommand(str) {
    let command = str.split(" ");
    switch (command[0].toLowerCase()) {
        case "":
        break;
        case "imanoob":
        case "imnb":
            Imanoob();
        break;
        case "cleanup":
        case "clup":
            terminal.Cleanup();
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
        case "run":
            fs.RunApp(command[1]);
        break;
        case "uninstall":
        case "uninst":
            fs.DeleteApp(command[1]);
        break;
        default:
            terminal.Type("Dude '" + command[0] + "' is not a command. Come on.\n");
    }
}

function Imanoob() {
    let result =  "";
    result += "imanoob (imnb):         show this dialog (duh.)\n";
    result += "cleanup (clup):         clear the terminal screen\n";
    result += "filesystem (fs):        show all local files\n";
    result += "mailsystem (ms):        show your inbox\n";
    result += "read [filename]:        read the content of a local file\n";
    result += "read mail [mailname]:   read the content of a mail\n";
    result += "delete [filename]:      delete a local file\n";
    result += "download [filename]:    download a file from the internet\n";
    result += "install [appname]:      install an app from the internet\n";
    result += "run [appname]:          run an installed app\n";
    result += "uninstall [appname]:    uninstall a local app\n";
    terminal.Type("\n" + result + "\n");
}

function UsernameInput(event) {    
    if(!(event.key.length == 1 || event.key == "Backspace" || event.key == "Enter")) return;    

    if(event.key == "Enter") {
        input = '<div class="input">' + username + '> <p class="input-user"></p><div class="cursor">&#9608;</div><p class="input-user"></div>';
        removeEventListener("keydown", UsernameInput);
        PrintBoot();
        terminal.HideCursor();
        terminal.Start();
        return;
    }

    if(event.key == "Backspace") {
        username = username.slice(0, username.length - 1);
        return;
    }

    username += event.key;
    active.innerHTML = username;
}

function PrintBoot() {
    document.getElementById("main-console").innerHTML += "\nCoded by davyrap\n\nEnter fullscreen for better immersion\n\nType 'imanoob' to see commands list";
}