class snake {
    constructor() {
        this.window = document.getElementById("application");
        this.window.classList.remove("hidden");
        this.head = [10, 10];
        this.tail = []
        this.apple = [20, 20];
    }
}