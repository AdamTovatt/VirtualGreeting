class View {
    static GetHtml(greeting, editor) {
        var result = "";

        var fonts = new Fonts();

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
        var fontText = 'style="font-family:DroidSerif;font-weight:500;';
        if (text.fontId && text.fontVariationId) {
            fontText = fonts.GetFont(text.fontId, text.fontVariationId, text.fontSize);
        }

        if (text.fadeDuration)
            fontText += "opacity: 0; animation: fadeIn " + text.fadeDuration + "s ease normal; animation-delay: " + text.fadeDelay + "s; animation-fill-mode: forwards;"

        fontText += "\"";
        if (editor) {
            return '<div contentEditable="true" ' + fontText + ' id="' + text.id + '"class="textAreaEdit" onclick="SelectText(\'' + text.id + '\')">' + text.text + '</div>';
        }
        else {
            return '<div contentEditable="false" ' + fontText + ' id="' + text.id + '"class="textAreaView">' + text.text + '</div>';
        }
    }

    static SetEvents(greeting) {
        if (greeting.texts) {
            for (var i = 0; i < greeting.texts.length; i++) {
                document.getElementById(greeting.texts[i].id).addEventListener("keydown", (evt) => {
                    if (evt.keyCode === 13) {
                        document.execCommand('insertHTML', false, '<br>');
                        evt.preventDefault();
                    }
                });
            }
        }
    }
}