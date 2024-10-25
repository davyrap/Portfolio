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
            case "snake.exe":
                if(snake.highScore >= 2) {
                    ms.GetNewMail("still_got_it");
                    ret = "still_got_it";
                }
            break;
        }

        return ret;
    }
}

const progress = new Progress();