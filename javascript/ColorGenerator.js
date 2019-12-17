class ColorGenerator {
    static GetRandomColor() {
        var h = Math.random();
        var hsvArray = [h, 0.4, 0.4];
        return ColorGenerator.RGB2HEX(ColorGenerator.HSV2RGB(hsvArray));
    }

    static GetBackgroundGradientFromColor(bgGradientColor) {
        var darkerBgGradientColor = ColorGenerator.HEX2HSV(bgGradientColor);
        darkerBgGradientColor[2] = darkerBgGradientColor[2] - 0.1;
        var bgGradientColor2 = ColorGenerator.HEX2HSV(bgGradientColor);
        bgGradientColor2[0] = (bgGradientColor2[0] + 0.3) % 1;
        var darkerBgGradientColor2 = ColorGenerator.HEX2HSV(ColorGenerator.HSV2HEX(bgGradientColor2));
        darkerBgGradientColor2[2] = darkerBgGradientColor2[2] - 0.1;
        return [bgGradientColor, ColorGenerator.HSV2HEX(darkerBgGradientColor), ColorGenerator.HSV2HEX(bgGradientColor2), ColorGenerator.HSV2HEX(darkerBgGradientColor2)];
    }

    static GetGradient(color1, color2, color3, color4) {
        return "linear-gradient(217deg, #" + color1 + "d2, #" + color2 + "d2 70.71%)" + ", linear-gradient(127deg, #" + color3 + "d2, #" + color4 + "d2 70.71%)";
    }

    static HEX2HSV(s) {
        return ColorGenerator.RGB2HSV(ColorGenerator.HEX2RGB(s));
    }

    static HEX2RGB(s) {
        if (s.length === 3) {
            s = s.replace(/./g, '$&$&');
        }
        return [ColorGenerator.num(s[0] + s[1], 16), ColorGenerator.num(s[2] + s[3], 16), ColorGenerator.num(s[4] + s[5], 16)];
    }

    static num(i, j) {
        return parseInt(i, j || 10);
    }

    static HSV2HEX(a) {
        return ColorGenerator.RGB2HEX(ColorGenerator.HSV2RGB(a));
    }

    static RGB2HSV(a) {
        var r = +a[0],
            g = +a[1],
            b = +a[2],
            max = Math.max(r, g, b),
            min = Math.min(r, g, b),
            d = max - min,
            h, s = (max === 0 ? 0 : d / max),
            v = max / 255;
        switch (max) {
            case min:
                h = 0;
                break;
            case r:
                h = (g - b) + d * (g < b ? 6 : 0);
                h /= 6 * d;
                break;
            case g:
                h = (b - r) + d * 2;
                h /= 6 * d;
                break;
            case b:
                h = (r - g) + d * 4;
                h /= 6 * d;
                break;
        }
        return [h, s, v];
    }

    static HSV2RGB(a) {
        var h = +a[0],
            s = +a[1],
            v = +a[2],
            r, g, b, i, f, p, q, t;
        i = Math.floor(h * 6);
        f = h * 6 - i;
        p = v * (1 - s);
        q = v * (1 - f * s);
        t = v * (1 - (1 - f) * s);
        i = i || 0;
        q = q || 0;
        t = t || 0;
        switch (i % 6) {
            case 0:
                r = v, g = t, b = p;
                break;
            case 1:
                r = q, g = v, b = p;
                break;
            case 2:
                r = p, g = v, b = t;
                break;
            case 3:
                r = p, g = q, b = v;
                break;
            case 4:
                r = t, g = p, b = v;
                break;
            case 5:
                r = v, g = p, b = q;
                break;
        }
        return [Math.round(r * 255), Math.round(g * 255), Math.round(b * 255)];
    }

    static RGB2HEX(a) {
        var s = +a[2] | (+a[1] << 8) | (+a[0] << 16);
        s = '000000' + s.toString(16);
        return s.slice(-6);
    }
}