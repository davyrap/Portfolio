class Snake {
    constructor() {
        this.window = null;
        this.leftPanel = null;

        this.arena = [];
        this.width = 36;
        this.height = 13;

        this.head = [10, 10];
        this.tail = []
        this.direction = [0, 0];

        this.apple = [0, 0];

        this.timeout = 300;
        this.mintimeout = 100;

        this.points = 0;
        this.highScore = 0;

        this.handleKeyDown = this.handleKeyDown.bind(this);
    }

    Input(event) {
        if(!this.IsInputValid(event.key)) return;

        if(this.IsOutOfBounds()) {
            if(event.key == "Enter") {
                this.Reset();
                return;
            }
            else if(event.key == "Escape") {
                this.End();
                return;
            }
        }

        switch (event.key.substring(5)) {
            case "Up":
                this.direction = [-1, 0];
            break;
            case "Down":
                this.direction = [1, 0];
            break;
            case "Left":
                this.direction = [0, -1];
            break;
            case "Right":
                this.direction = [0, 1];
            break;
        }
    }

    IsInputValid(input) {
        if(input.substring(0, 5) == "Arrow") return true;
        if(input == "Enter" || input == "Escape") return true;
        return false;
    }

    UpdateSnake() {
        // apply movement
        this.head[0] += this.direction[0];
        this.head[1] += this.direction[1];

        if(this.IsOutOfBounds() || this.IsTailInTheWay(this.head)) {
            this.window.classList.add("red-console");
            this.leftPanel.innerHTML += "\n\n\nPress ESC to exit\nPress ENTER to play again";
            document.getElementById("double-bip").play();
        }

        // apple eating
        if(this.head[0] == this.apple[0] && this.head[1] == this.apple[1]) {
            this.tail.unshift([this.head[0], this.head[1]]);
            this.MoveApple();

            this.points++;
            if(this.highScore < this.points) this.highScore = this.points;
            this.UpdateLeftPanel();
            document.getElementById("bip").play();

            if(this.timeout > this.mintimeout) this.timeout -= 20;
        }

        // delete and remove furthest tail
        let removed = this.tail.pop();
        if(removed != undefined) this.arena[removed[0]][removed[1]] = " ";

        // save and draw the head
        this.tail.unshift([this.head[0], this.head[1]]);
        this.arena[this.head[0]][this.head[1]] = "&#9608;";
    }

    IsOutOfBounds() {        
        if(this.head[0] < 1 || this.head[0] > this.height - 2) return true;
        if(this.head[1] < 0 || this.head[1] > this.width - 1) return true;
        return false;
    }
    
    MoveApple() {
        do {
            this.apple[0] = Math.floor(Math.random() * this.height);
            this.apple[1] = Math.floor(Math.random() * this.width);
        } while (this.apple[0] <= 0 || this.apple[0] >= 12);
        console.log(this.apple);
    }
    
    DrawApple() {
        this.arena[this.apple[0]][this.apple[1]] = "&#9679;";
    }

    ArenaInit() {
        for (let i = 0, row; i < this.height; i++) {
            row = new Array(this.width).fill(" ");
            this.arena.push(row);
        }
    }

    DrawFrame() {
        this.window.innerHTML = "╔════════════════════════════════════╗\n";
        for (let i = 1, j; i < this.height - 1; i++) {
            this.window.innerHTML += "║";
            for(j = 0; j < this.width; j++) this.window.innerHTML += this.arena[i][j];
            this.window.innerHTML += '║\n';
        }
        this.window.innerHTML += "╚════════════════════════════════════╝";
    }

    IsTailInTheWay(other) {
        this.tail.forEach(bit => {
            if(bit[0] == other[0] && bit[1] == other[1]) return true;
            return false;
        });
    }

    UpdateLeftPanel() {
        this.leftPanel.innerHTML = "\n\n\nUse the arrow keys to move";
        this.leftPanel.innerHTML += "\n\Score: " + this.points;
    }

    handleKeyDown(event) {
        this.Input(event);
    }
    
    Start() {
        terminal.Stop();
        terminal.out.classList.add("hidden");

        this.window = document.getElementById("application");
        this.window.classList.remove("hidden");

        this.leftPanel = document.getElementById("snake-side-panel");
        this.leftPanel.classList.remove("hidden");

        addEventListener("keydown", this.handleKeyDown);

        this.Reset();
    }

    Update() {
        this.UpdateSnake();
        this.DrawApple();
        this.DrawFrame();             
        if(!this.IsOutOfBounds()) setTimeout(() => this.Update(), this.timeout);
    }

    Reset() {
        this.head = [10, 10];
        this.tail = [];
        this.direction = [0, 0];
        this.timeout = 300;
        this.arena = []
        this.points = 0;

        this.window.classList.remove("red-console");
        this.window.innerHTML = "";
        this.UpdateLeftPanel();
        
        this.ArenaInit();
        this.MoveApple();
        this.Update();      // like any respected game engine, because this IS a game engine.
    }

    End() {
        removeEventListener("keydown", this.handleKeyDown);

        this.window.classList.add("hidden");
        this.leftPanel.classList.add("hidden");

        terminal.out.classList.remove("hidden");

        let result = progress.CheckProgress("snake.exe");
        if(result != null) terminal.Type(ms.GetNewMailNotification(result));
        else terminal.Start();
        
    }
}

const snake = new Snake();