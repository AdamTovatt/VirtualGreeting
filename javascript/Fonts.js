class Fonts {
    constructor() {
        this.fonts =
            [
                new Font(1, "Aaargh", [
                    new Variation(1, "normal", 500, "Regular")]),
                new Font(2, "AftaSansThin", [
                    new Variation(1, "italic", 500, "Italic"),
                    new Variation(2, "normal", 500, "Regular")]),
                new Font(3, "Amaranth", [
                    new Variation(1, "normal", 900, "Bold"),
                    new Variation(2, "italic", 900, "Bold Italic"),
                    new Variation(3, "italic", 500, "Italic"),
                    new Variation(4, "normal", 500, "Regular")]),
                new Font(4, "Artifika", [
                    new Variation(1, "normal", 500, "Regular")]),
                new Font(5, "Bebas", [
                    new Variation(1, "normal", 500, "Regular")]),
                new Font(6, "ChunkFive", [
                    new Variation(1, "normal", 500, "Regular")]),
                new Font(7, "Cicle", [
                    new Variation(1, "normal", 900, "Bold"),
                    new Variation(2, "italic", 900, "Bold Italic"),
                    new Variation(3, "normal", 300, "Light"),
                    new Variation(4, "italic", 300, "Light Italic"),
                    new Variation(5, "normal", 500, "Regular"),
                    new Variation(6, "italic", 500, "Regular Italic"),
                    new Variation(7, "normal", 500, "Shadow")]),
                new Font(8, "DejaVuSansMono", [
                    new Variation(1, "normal", 900, "Bold"),
                    new Variation(2, "oblique", 900, "Bold Oblique"),
                    new Variation(3, "oblique", 500, "Oblique"),
                    new Variation(4, "normal", 500, "Regular")]),
                new Font(9, "DroidSerif", [
                    new Variation(1, "normal", 900, "Bold"),
                    new Variation(2, "italic", 900, "Bold Italic"),
                    new Variation(3, "italic", 500, "Italic"),
                    new Variation(4, "normal", 500, "Regular")]),
                new Font(10, "EBGaramond", [
                    new Variation(1, "normal", 500, "Initials")]),
                new Font(11, "EBGaramond12", [
                    new Variation(1, "italic", 500, "Italic"),
                    new Variation(2, "normal", 500, "Regular")]),
                new Font(12, "GalSIL", [
                    new Variation(1, "normal", 900, "Bold"),
                    new Variation(2, "normal", 500, "Regular")]),
                new Font(13, "Hattori_Hanzo", [
                    new Variation(1, "italic", 500, "Italic"),
                    new Variation(2, "normal", 500, "Regular")]),
                new Font(14, "Junction", [
                    new Variation(1, "normal", 900, "bold"),
                    new Variation(2, "normal", 300, "light"),
                    new Variation(3, "normal", 500, "regular")]),
                new Font(15, "Lacuna", [
                    new Variation(1, "italic", 500, "Italic"),
                    new Variation(2, "normal", 500, "Regular")]),
                new Font(16, "LeagueGothic", [
                    new Variation(1, "italic", 500, "Italic"),
                    new Variation(2, "normal", 500, "Regular")]),
                new Font(17, "Nobile", [
                    new Variation(1, "normal", 900, "Bold"),
                    new Variation(2, "normal", 900, "Bold"),
                    new Variation(3, "italic", 500, "Italic"),
                    new Variation(4, "normal", 500, "Medium"),
                    new Variation(5, "italic", 500, "Medium Italic"),
                    new Variation(6, "normal", 500, "Regular")]),
                new Font(18, "Prociono", [
                    new Variation(1, "normal", 500, "Regular")]),
                new Font(19, "Quicksand", [
                    new Variation(1, "normal", 900, "Bold"),
                    new Variation(2, "italic", 900, "Bold Italic"),
                    new Variation(3, "normal", 500, "Dash"),
                    new Variation(4, "italic", 500, "Italic"),
                    new Variation(5, "normal", 300, "Light"),
                    new Variation(6, "italic", 300, "Light Italic"),
                    new Variation(7, "normal", 500, "Regular")]),
                new Font(20, "Raleway", [
                    new Variation(1, "normal", 300, "Thin")])
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