class GreetingData {
    constructor() {
        this.texts = [];
        this.title = "New Greeting";
        this.backgroundColor1 = null;
        this.backgroundColor2 = null;
        this.backgroundColor3 = null;
        this.backgroundColor4 = null;
    }

    static GetGradient(greetingData) {
        return ColorGenerator.GetGradient(greetingData.backgroundColor1, greetingData.backgroundColor2, greetingData.backgroundColor3, greetingData.backgroundColor4);
    }
}

class Text {
    constructor(text, id, fontId, fontVariationId) {
        this.text = text;
        this.id = "textfield_" + id;
        this.fontId = fontId;
        this.fontVariationId = fontVariationId;
        this.fontSize = 1;
        this.fadeDuration = 1;
        this.fadeDelay = 1;
        this.positionType = "absolute";
        this.posX = 50;
        this.posY = 10;
        this.color = "e7e7e7";
    }
}