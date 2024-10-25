const player = "Davide";
const input = '<div class="input">' + player + '>&nbsp;<p class="input-user"></p><div class="cursor">&#9608;</div><p class="input-user"></div>';

window.onload = function () {
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
    result += "imanoob (imnb):\t\tshow this dialog (duh.)\n";
    result += "cleanup (clup):\t\tclear the terminal screen\n";
    result += "filesystem (fs):\tshow all local files\n";
    result += "mailsystem (ms):\tshow your inbox\n";
    result += "read [filename]:\tread the content of a local file\n";
    result += "read mail [mailname]:\tread the content of a mail\n";
    result += "delete [filename]:\tdelete a local file\n";
    result += "download [filename]:\tdownload a file from the internet\n";
    result += "install [appname]:\tinstall an app from the internet\n";
    result += "uninstall [appname]:\tuninstall a local app\n";
    terminal.Type("\n" + result + "\n");
}