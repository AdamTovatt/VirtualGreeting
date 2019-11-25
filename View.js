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
                return '<p><textarea id="' + text.id + '" cols="40" rows="5">' + text.text + '</textarea></p>';
            }
            else {
                return '<p>' + text.text + '</p>';
            }
    }
}