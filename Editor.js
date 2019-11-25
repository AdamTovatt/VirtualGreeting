class Editor {
    constructor(api, id, editHash, title = null, viewHash = null, created = null) {
        this.id = id;
        this.editHash = editHash;
        this.viewHash = viewHash;
        this.title = title;
        this.created = created;
        this.api = api;
        if (created == null)
            created = Date.now();
    }

    async initialize() {
        console.log("getting hash");
        var data = JSON.parse(await api.GetGreetingData(this.id, this.editHash));
        this.viewHash = data["hash"];
        this.created = data["created"];
        this.title = data["title"];
    }

    static async create(api, id, editHash, title, viewHash = null, created = null) {
        var o = new Editor(api, id, editHash, title, viewHash = null, created);
        if (viewHash == null) {
            await o.initialize();
        }
        return o;
    }
}