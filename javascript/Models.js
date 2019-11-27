class GreetingData {
    constructor() {
        this.texts = [];
        this.title = "New Greeting";
    }
}

class Text {
    constructor(text, id, fontId, fontVariationId) {
        this.text = text;
        this.id = "textfield_" + id;
        this.fontId = fontId;
        this.fontVariationId = fontVariationId;
        this.fontSize = 1;
    }
}