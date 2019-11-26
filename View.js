class View {
    static GetHtml(greeting, editor) {
        var result = "";

        var fonts = new Fonts();

        console.log(greeting);

        if (greeting) {
            if (greeting.background) {

            }
            if (greeting.texts) {
                for (var i = 0; i < greeting.texts.length; i++) {
                    result += this.textGetHtml(greeting.texts[i], editor, fonts);
                }
            }
        }

        return result;
    }

    static textGetHtml(text, editor, fonts) {
        fontText = 'style="font-family:DroidSerif;font-weight:500"';
        if (text.fontId && text.fontVariationId) {
            fontText = fonts.GetFont(text.fontId, text.fontVariationId);
        }
        if (editor) {
            return '<div contentEditable="true" ' + fontText + ' id="' + text.id + '"class="textAreaEdit" onclick="console.log(\'' + text.id + '\')">' + text.text + '</div>';
        }
        else {
            return '<div contentEditable="false" ' + fontText + ' id="' + text.id + '"class="textAreaView">' + text.text + '</div>';
        }
    }
}