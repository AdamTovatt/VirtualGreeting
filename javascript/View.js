class View {
    static GetHtml(greeting, editor, animate = true, timeDependant = true) {
        var result = "";

        var fonts = new Fonts();

        if (greeting) {
            if (greeting.texts) {
                for (var i = 0; i < greeting.texts.length; i++) {
                    var text = greeting.texts[i];
                    var draw = true;

                    if (timeDependant && text.start && text.end) {
                        var s = Date.parse(text.start);
                        var e = Date.parse(text.end);
                        var n = Date.now();

                        if (isNaN(e) || isNaN(s) || n > e || s > n)
                            draw = false;
                    }

                    if (draw)
                        result += this.textGetHtml(text, editor, fonts, animate);
                }
            }
        }

        return result;
    }

    static GetTimeTable(greeting) {
        var result = [true];
        if (greeting.texts) {
            for (var i = 0; i < greeting.texts.length; i++) {
                var text = greeting.texts[i];
                var draw = true;

                if (text.start && text.end) {
                    var s = Date.parse(text.start);
                    var e = Date.parse(text.end);
                    var n = Date.now();

                    if (isNaN(e) || isNaN(s) || n > e || s > n)
                        draw = false;
                }

                result.push(draw);
            }
        }
        return result;
    }

    static textGetHtml(text, editor, fonts, animate = true) {
        var fontText = 'style="font-family:DroidSerif;font-weight:500;';
        if (text.fontId && text.fontVariationId) {
            fontText = fonts.GetFont(text.fontId, text.fontVariationId, text.fontSize);
        }

        if (text.fadeDuration && animate)
            fontText += "opacity: 0; animation: fadeIn " + text.fadeDuration + "s ease normal; animation-delay: " + text.fadeDelay + "s; animation-fill-mode: forwards;";

        if (text.positionType)
            fontText += "position: " + text.positionType + "; left: " + text.posX + "%; top: " + text.posY + "px;";

        if (!text.color)
            text.color = "e7e7e7";

        fontText += "color: #" + text.color + ";";

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