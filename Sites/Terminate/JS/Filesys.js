class Filesys {
    constructor() {
        this.ALLFILES = ["todo.txt", "ciao.txt", "homework.txt", "table.tab"];
        this.myFiles = ["todo.txt", "ciao.txt", "table.tab"];
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
        Type(this.out + "\n");
    }

    ReadFile(filename) {
        if(filename == undefined) {
            Type("Call error: expected 1 argument [filename]");
            return;
        }

        if(this.myFiles.indexOf(filename) == -1) {
            Type("File '" + filename + "' does not exist.\n");
            return;
        }
        fetch("./TXT/" + filename)
            .then(response => {
                return response.text();
            })
            .then(data => {
                Type(data);
            })
    }

    DownloadFile(filename) {
        if(filename == undefined) {
            Type("Call error: expected 1 argument [filename]");
            return;
        }

        if(this.myFiles.length >= this.maxFiles) {
            Type("Filesystem error: filesystem is full! (" + this.maxFiles +"/" + this.maxFiles +")");
            return;
        }

        this.out = "Searching file...\n";

        if(this.myFiles.indexOf(filename) != -1) {
            this.out = "Filesystem error: file '" + filename + "' already exists";
            Type(this.out);
            return;
        }

        if(this.ALLFILES.indexOf(filename) == -1) {
            this.out += "Server error: there is no file named '" + filename + "'";
            Type(this.out);
            return;
        }
        this.out += "File found! Downloading...\n";
        
        this.myFiles[this.myFiles.length] = filename;
        this.out += "Download complete.";
        Type(this.out);
    }

    DeleteFile(filename) {
        if(filename == undefined) {
            Type("Call error: expected 1 argument [filename]");
            return;
        }

        if(this.myFiles.length <= 0) {
            Type("Filesystem error: there are no local files\n");
            return;
        }

        let toDelete = this.myFiles.indexOf(filename)
        if(toDelete == -1) {
            Type("Filesystem error: there is no file named '" + filename + "'\n");
            return;
        }

        this.myFiles.splice(toDelete, 1);
        Type("'" + filename + "' deleted\n");
    }

    DownloadApp(appname) {
        if(appname == undefined) {
            Type("Call error: expected 1 argument [appname]");
            return;
        }

        if(this.myApps.length >= this.maxApps) {
            Type("Filesystem error: application already installed! (" + this.myApps[0] + ")");
            return;
        }

        this.out = "Searching for the application...\n";

        if(this.myApps.indexOf(appname) != -1) {
            this.out = "Filesystem error: application '" + appname + "' already installed";
            Type(this.out);
            return;
        }

        if(this.ALLAPPS.indexOf(appname) == -1) {
            this.out += "Server error: there is no application named '" + appname + "'";
            Type(this.out);
            return;
        }
        this.out += "Application found! Downloading...\nInstalling...\n";
        
        this.myApps[this.myApps.length] = appname;
        this.out += "'" + appname + "' installed.";
        Type(this.out);
    }

    DeleteApp(appname) {
        if(appname == undefined) {
            Type("Call error: expected 1 argument [appname]");
            return;
        }

        let toDelete = this.myApps.indexOf(appname)
        if(toDelete == -1) {
            Type("Filesystem error: there is no application named '" + appname + "'\n");
            return;
        }

        this.myApps.splice(toDelete, 1);
        Type("Uninstalling...\n'" + appname + "' successfully uninstalled\n");
    }
}

const fs = new Filesys();
