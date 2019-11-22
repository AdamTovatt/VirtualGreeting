class Editor {
    constructor(id, editHash, api, viewHash = null) {
        this.id = id;
        this.editHash = editHash;
        this.viewHash = viewHash;
        this.api = api;
    }

    async initialize() {
        console.log("getting hash");
        console.log(this.id);
        console.log(await api.GetGreetingData(this.id, this.editHash));
    }

    static async create(id, editHash, api, viewHash = null) {
        const o = new Editor(id, editHash, api, viewHash = null);
        if (viewHash == null) {
            await o.initialize();
        }
        return o;
    }
}