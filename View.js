class View {
    static GetHtml(greeting, editor) {
        var result = "";

        result += "";

        console.log(greeting);

        if (greeting) {
            if (greeting.background) {

            }
            if (greeting.texts) {
                for (var i = 0; i < greeting.texts.length; i++) {
                    result += this.textGetHtml(greeting.texts[i], editor);
                }
            }
        }

        return result;
    }

    static textGetHtml(text, editor) {
        if (editor) {
            return '<div contentEditable="true" id="' + text.id + '"class="textAreaEdit" onclick="console.log(\'' + text.id + '\')">' + text.text + '</div>';
        }
        else {
            return '<div contentEditable="true" id="' + text.id + '"class="textAreaView">' + text.text + '</div>';
        }
    }
}