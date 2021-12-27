const REST = require("../Rest/REST");
const CodeManager = require("../Managers/CodeManager");
class Base {

    constructor() {

        this.root = `https://api.srcshare.io`
    }

    get codes() {
        return new CodeManager(this)
    }

    get api() {
        return REST
    }
}

module.exports = Base