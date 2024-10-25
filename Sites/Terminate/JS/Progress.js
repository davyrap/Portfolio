class Progress {
    constructor() {
        this.filesHistory = fs.myFiles.slice();     // deep copy
    }

    CheckProgress(filename) {
        if(this.filesHistory.indexOf(filename) != -1) return null;

        this.filesHistory.push(filename);

        let ret;

        switch (filename) {
            case "ciao.txt":
                ms.GetNewMail("activity");
                ret = "activity";
            break;
        }

        return ret;
    }
}

const progress = new Progress();