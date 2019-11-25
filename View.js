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
                    var text = greeting.texts[i];
                    result += this.textGetHtml(text.text, editor);
                }
            }
        }

        return result;
    }

    static textGetHtml(text, editor) {
            if (editor) {
                return '<p><textarea name="Text1" cols="40" rows="5">' + text + '</textarea></p>';
            }
            else {
                return '<p>' + text + '</p>';
            }
    }
}