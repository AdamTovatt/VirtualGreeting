from os import listdir
import os
from os.path import isfile, join
onlyfiles = [f for f in listdir("fonts") if isfile(join("fonts", f))]

class File:
    def __init__(self, filename):
        parts = filename.split(".")
        self.extension = parts[1]
        self.family = parts[0].split("-")[0]
        if(len(parts[0].split("-")) < 2):
            raise Exception("fontfile " + filename + " missing variation like -Regular")
        self.variation = parts[0].split("-")[1].replace("_", " ")
        if(self.extension == "otf"):
            self.type = "opentype"
        elif(self.extension == "ttf"):
            self.type = "truetype"
        else:
            raise Exception("unknown filetype")
        self.weight = "500"
        self.style = "normal"
        self.source = "url(\"fonts/" + filename + "\") format('" + self.type + "')"

        vs = self.variation.lower()
        if("italic" in vs):
            self.style = "italic"
        elif("oblique" in vs):
            self.style = "oblique"

        if("bold" in vs):
            self.weight = "900"
        elif("light" in vs):
            self.weight = "300"
        elif("thin" in vs):
            self.weight = "300"

class Font:
    def __init__(self, id, family):
        self.id = id
        self.family = family
        self.variations = []
    def addVariation(self, variation):
        self.variations.append(variation)

class Variation:
    def __init__(self, id, style, weight, name):
        self.id = id;
        self.style = style;
        self.weight = weight;
        self.name = name;

result = ""
result2 = "[\n"
files = []
fonts = []

try:
    for file in onlyfiles:
        files.append(File(file))

    for file in files:
        print(file.extension + " " + file.family + " " + file.variation + " " + file.type + "  " + file.style + " " + file.weight)

    for file in files:
        result += "@font-face {\n"
        result += "\tfont-family: '" + file.family + "';\n"
        result += "\tfont-style: " + file.style + ";\n"
        result += "\tfont-weight: " + file.weight + ";\n"
        result += "\tsrc: " + file.source + ";\n"
        result += "}\n"

    added = []
    for file in files:
        if(file.family not in added):
            fonts.append(Font(len(added) + 1, file.family));
            added.append(file.family);
        for i in range(0, len(fonts)):
            if(fonts[i].family == file.family):
                fonts[i].addVariation(Variation(len(fonts[i].variations) + 1, file.style, file.weight, file.variation));
                break;

    for font in fonts:
        result2 += "new Font(" + str(font.id) + ", \"" + font.family + "\", [\n";
        for v in font.variations:
            result2 += "new Variation(" + str(v.id) + ", \"" + v.style + "\", " + v.weight + ", \"" + v.name + "\"),\n";
        result2 = result2[:-2] + "]),\n";
    result2 = result2[:-2] + "\n];\n";

    fontFile = open("generated_fonts.css", "w+");
    fontFile.write(result);
    fontFile.close();

    jsFile = open("generated_js.css", "w+");
    jsFile.write(result2);
    jsFile.close();

except Exception as e:
    print(e)

input("\nclick any key to continue...");