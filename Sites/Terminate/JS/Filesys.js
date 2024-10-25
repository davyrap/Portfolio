class Filesys {
    constructor() {
        this.ALLFILES = ["todo.txt", "ciao.txt", "homework.txt", "table.tab", "inventory.txt"];
        this.myFiles = ["todo.txt", "inventory.txt"];
        this.maxFiles = 3;

        this.ALLAPPS = ["snake.exe"];
        this.myApps = [];
        this.maxApps = 1;

        this.out = "";

        this.fr = new FileReader();
    }

    ListFile() {
        this.out = "Files saved: " + this.myFiles.length + "/" + this.maxFiles + "\n";
        this.myFiles.forEach(file => {
            this.out += "\t" +file + "\n";
        });
        if(this.myApps.length <= 0) this.out += "No programs loaded";
        else this.out += this.myApps.length + "/" + this.maxApps + " program loaded: '" + this.myApps[0] + "'"
        terminal.Type(this.out + "\n");
    }

    ReadFile(filename) {
        if(filename == undefined) {
            terminal.Type("Call error: expected 1 argument [filename]");
            return;
        }

        if(this.myFiles.indexOf(filename) == -1) {
            terminal.Type("File '" + filename + "' does not exist.\n");
            return;
        }
        fetch("./TXT/" + filename)
            .then(response => {
                return response.text();
            })
            .then(data => {
                terminal.Type(data);
            })
    }

    DownloadFile(filename) {
        if(filename == undefined) {
            terminal.Type("Call error: expected 1 argument [filename]");
            return;
        }

        if(this.myFiles.length >= this.maxFiles) {
            terminal.Type("Filesystem error: filesystem is full! (" + this.maxFiles +"/" + this.maxFiles +")");
            return;
        }

        this.out = "Searching file...\n";

        if(this.myFiles.indexOf(filename) != -1) {
            this.out = "Filesystem error: file '" + filename + "' already exists";
            terminal.Type(this.out);
            return;
        }

        if(this.ALLFILES.indexOf(filename) == -1) {
            this.out += "Server error: there is no file named '" + filename + "'";
            terminal.Type(this.out);
            return;
        }
        this.out += "File found! Downloading...\n";
        
        this.myFiles[this.myFiles.length] = filename;
        this.out += "Download complete.";
        terminal.Type(this.out);
    }

    DeleteFile(filename) {
        if(filename == undefined) {
            terminal.Type("Call error: expected 1 argument [filename]");
            return;
        }

        if(this.myFiles.length <= 0) {
            terminal.Type("Filesystem error: there are no local files\n");
            return;
        }

        let toDelete = this.myFiles.indexOf(filename)
        if(toDelete == -1) {
            terminal.Type("Filesystem error: there is no file named '" + filename + "'\n");
            return;
        }

        this.myFiles.splice(toDelete, 1);
        terminal.Type("'" + filename + "' deleted\n");
    }

    DownloadApp(appname) {
        if(appname == undefined) {
            terminal.Type("Call error: expected 1 argument [appname]");
            return;
        }

        if(this.myApps.length >= this.maxApps) {
            terminal.Type("Filesystem error: application already installed! (" + this.myApps[0] + ")");
            return;
        }

        this.out = "Searching for the application...\n";

        if(this.myApps.indexOf(appname) != -1) {
            this.out = "Filesystem error: application '" + appname + "' already installed";
            terminal.Type(this.out);
            return;
        }

        if(this.ALLAPPS.indexOf(appname) == -1) {
            this.out += "Server error: there is no application named '" + appname + "'";
            terminal.Type(this.out);
            return;
        }
        this.out += "Application found! Downloading...\nInstalling...\n";
        
        this.myApps[this.myApps.length] = appname;
        this.out += "'" + appname + "' installed.";
        terminal.Type(this.out);
    }

    DeleteApp(appname) {
        if(appname == undefined) {
            terminal.Type("Call error: expected 1 argument [appname]");
            return;
        }

        let toDelete = this.myApps.indexOf(appname)
        if(toDelete == -1) {
            terminal.Type("Filesystem error: there is no application named '" + appname + "'\n");
            return;
        }

        this.myApps.splice(toDelete, 1);
        terminal.Type("Uninstalling...\n'" + appname + "' successfully uninstalled\n");
    }
}

const fs = new Filesys();
