class Editor {
    constructor(api, id, editHash, viewHash = null, created = null) {
        this.id = id;
        this.editHash = editHash;
        this.viewHash = viewHash;
        this.created = created;
        this.api = api;
        if (created == null)
            created = Date.now();
        this.greetingData = null;
    }

    async initialize() {
        var data = JSON.parse(await api.GetGreetingData(this.id, this.editHash));
        this.viewHash = data["hash"];
        this.created = data["created"];
        this.greetingData = data["greetingdata"];
        if (!this.greetingData)
            this.greetingData = new GreetingData();
        if (!this.greetingData.title) {
            this.greetingData.title = "New Greeting";
        }
    }

    static async create(api, id, editHash, viewHash = null, created = null) {
        var o = new Editor(api, id, editHash, viewHash = null, created);
        if (viewHash == null || greetingData == null) {
            await o.initialize();
        }
        return o;
    }

    GetText(id) {
        for (var i = 0; i < this.greetingData.texts.length; i++) {
            if (this.greetingData.texts[i].id == id) {
                return this.greetingData.texts[i];
                break;
            }
        }
        return null;
    }
}