class Mailsys {
    constructor() {
        this.ALLMAILS = ["mail1", "translate_please"];
        this.inbox = ["translate_please"];
        this.readMails = [];
    }

    ListMail() {
        let out = "[] = unread mail\n\n";
        this.inbox.forEach(mail => {
            if(this.readMails.indexOf(mail) == -1) out += "[] ";
            else out += "   ";
            out += mail + "\n";
        });
        terminal.Type(out);
    }

    // ci saranno meno controlli perchè sarò io a chiamare questa funzione a momento debito
    GetNewMail(mailname) {
        if(this.inbox.indexOf(mailname) != -1) return;

        this.inbox[this.inbox.length] = mailname;
    }

    GetNewMailNotification(mailname) {
        return "Received new mail: '" + mailname + "'";
    }

    ReadMail(mailname) {
        if(mailname == undefined) {
            terminal.Type("Mail reading error: no mail name specified");
            return;
        }

        if(this.inbox.indexOf(mailname) == -1) {
            terminal.Type("Mail reading error: '" + mailname + "' does not exist");
            return;
        }

        if(this.readMails.indexOf(mailname) == -1) this.readMails[this.readMails.length] = mailname;

        fetch("./TXT/" + mailname)
            .then(response => {
                return response.text();
            })
            .then(data => {
                terminal.Type(data);
            })
    }
}

const ms = new Mailsys();