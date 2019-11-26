class Fonts {
    constructor() {
        this.fonts =
            [
                new Font(1, "Quicksand", [
                    new Variation(1, "normal", 500, "Regular"),
                    new Variation(2, "normal", 900, "Bold"),
                    new Variation(3, "normal", 300, "Light")]),
                new Font(2, "DroidSerif", [
                    new Variation(1, "normal", 500, "Regular"),
                    new Variation(2, "normal", 900, "Bold"),
                    new Variation(3, "italic", 500, "Regular Italic"),
                    new Variation(4, "italic", 900, "Bold Italic")])
            ];
    }

    GetFont(id, variationId) {
        for (var i = 0; i < this.fonts.length; i++) {
            if (this.fonts[i].id == id) {
                for (var j = 0; j < this.fonts[i].variations.length; j++) {
                    if (this.fonts[i].variations[j].id == variationId)
                        return 'style="font-family:' + this.fonts[i].name + ';font-weight:' + this.fonts[i].variations[j].weight + '"';
                }
            }
        }
        return null;
    }
}

class Font {
    constructor(id, name, variations) {
        this.id = id;
        this.name = name;
        this.variations = variations;
    }
}

class Variation {
    constructor(id, style, weight, name) {
        this.id = id;
        this.style = style;
        this.weight = weight;
        this.name = name;
    }
}