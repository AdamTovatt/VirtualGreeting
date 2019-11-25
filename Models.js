class GreetingData {
    constructor() {
        this.texts = [];
    }
}

class Text {
    constructor(text, id) {
        this.text = text;
        this.id = "textfield_" + id;
    }
}