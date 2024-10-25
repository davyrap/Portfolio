const player = "Davide";
const input = '<div class="input">' + player + '>&nbsp;<p class="input-user"></p><div class="cursor">&#9608;</div><p class="input-user"></div>';

const keysToPrevent = ["ArrowUp", "ArrowDown", "PageUp", "PageDown", "Home", "End"];

window.onload = function () {
    document.addEventListener('keydown', function(event) {
        // block scrolling with the keyboard
        if (keysToPrevent.includes(event.key)) event.preventDefault();
    });

    terminal.Start();
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
    result += "uninstall [appname]:    uninstall a local app\n";
    terminal.Type("\n" + result + "\n");
}