class Terminal {
    constructor() {
        this.MAXCOMMANDLENGTH = 30;

        this.out = null;

        this.leftActiveInput = this.GetNextInput(1);
        this.rightActiveInput = this.GetNextInput(0);

        this.isWriting = false;

        this.typedCommand = "";
        this.commandHistory = [];
        this.selectedCommandIndex = 0;
        this.cursorIndex = 0;
        this.typedIndex = 0;
    }

    TextInput(event) {
        if(this.isWriting) return;
        if(!this.IsInputValid(event.key)) return;
    
        if(event.key == "Enter") {
            this.HideCursor();
            if(this.typedCommand === "") {
                this.CreateNextInput();
                return;
            }
            SwitchCommand(this.typedCommand);
            this.commandHistory[this.commandHistory.length] = this.typedCommand;
            this.typedCommand = "";
            this.selectedCommandIndex = 0;
            this.cursorIndex = 0;
            return;
        }
    
        if(this.typedCommand.length >= this.MAXCOMMANDLENGTH) return;
    
        if(event.key == "ArrowUp") {
            if(this.selectedCommandIndex >= this.commandHistory.length) return;
            this.selectedCommandIndex++;
            this.typedCommand = this.commandHistory[this.commandHistory.length - this.selectedCommandIndex];
        }
        else if(event.key == "ArrowDown") {
            if(this.selectedCommandIndex <= 0) return;
            if(this.selectedCommandIndex == 1) {
                this.typedCommand = "";
                this.selectedCommandIndex = 0;
            }
            else {
                this.selectedCommandIndex--;
                this.typedCommand = this.commandHistory[this.commandHistory.length - this.selectedCommandIndex];
            }
        }
        
        else if(event.key == "ArrowLeft") {
            if(this.cursorIndex >= this.typedCommand.length) return;
            this.cursorIndex ++;
        }
    
        else if(event.key == "ArrowRight") {
            if(this.cursorIndex <= 0) return;
            this.cursorIndex --;
        }
    
        else if(event.key == "Backspace") {
            if(this.typedCommand.length == 0) return;
            this.typedCommand = this.typedCommand.slice(0, this.typedCommand.length - this.cursorIndex - 1) + this.typedCommand.slice(this.typedCommand.length - this.cursorIndex);
        }
    
        else this.typedCommand = this.typedCommand.slice(0, this.typedCommand.length - this.cursorIndex) + event.key + this.typedCommand.slice(this.typedCommand.length - this.cursorIndex);
    
        // echo the command on the terminal
        this.leftActiveInput.innerHTML = this.typedCommand.slice(0, this.typedCommand.length - this.cursorIndex);
        this.rightActiveInput.innerHTML = this.typedCommand.slice(this.typedCommand.length - this.cursorIndex);
    }

    Type(text) {
        if(this.typedIndex >= text.length) {
            this.typedIndex = 0;
            this.isWriting = false;
            document.getElementById("double-bip").play();
            this.CreateNextInput();
            return;
        }
    
        this.isWriting = true;
        this.out.innerHTML = this.out.innerHTML + text[this.typedIndex];
        this.typedIndex++;

        // Scroll to the bottom of the terminal
        this.out.scrollTop = this.out.scrollHeight;
        setTimeout(() => this.Type(text), 30);
    }

    GetNextInput(index) {
        let inputs = document.getElementsByClassName("input-user");
        return inputs[inputs.length - index - 1];    // prendo l'ultimo
    }
    
    CreateNextInput() {
        if(this.typedCommand.toLowerCase() != "cleanup" && this.typedCommand.toLowerCase != "clup") {
            this.out.innerHTML += input;
            this.leftActiveInput = this.GetNextInput(1);
            this.rightActiveInput = this.GetNextInput(0);
            this.out.scrollTop = this.out.scrollHeight;    
        }
    }

    IsInputValid(input) {
        if(input.length == 1) return true;
        if(input == "Enter") return true;
        if(input == "Backspace") return true;
        if(input.substring(0, 5) == "Arrow") return true;
        return false;
    }

    HideCursor() {
        let inputs = document.getElementsByClassName("input");
        let current = inputs[inputs.length - 1].childNodes[2];
        current.classList.add("hidden");
    }

    Cleanup() {
        this.out.innerHTML = "";
        this.CreateNextInput();
    }

    Start() {
        this.out = document.getElementById("console");
        this.CreateNextInput();
        addEventListener("keydown", (event) => terminal.TextInput(event));
    }

    Stop() {
        removeEventListener("keydown");
    }
}

const terminal = new Terminal();