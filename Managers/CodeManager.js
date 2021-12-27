const Code = require("../Structures/Code");
const fs = require("fs");
const { Languages } = require("../Utils/Constants");
class CodeManager {
    constructor(base) {
        Object.defineProperty(this, "base", {
            value: base
        })
    }

    resolve(codeObj, id) {
        if(typeof codeObj !== "object") throw new TypeError(`Invalid Resolved Object`)
        return new Code(Object.assign(codeObj, { id }), this.base)
    }

    async fetch(id) {
        id = id.replace(/(http(s)?:\/\/)?(www\.)?srcshare\.io\/\?id=/g, "")
        const code = await this.base.api.get(`${this.base.root}/code?id=${id}`)
        return this.resolve(code, id)
    }

    async create(options = {}) {
        const code = /^(\.(\.)?)/g.test(options.code) ? fs.readFileSync(options.code)?.toString() : typeof options.code instanceof Buffer ? options.code?.toString() : options.code
        const error = options.error ?? null
        const language = Languages[options.language] ?? "JAVASCRIPT"
        const title = options.title ? `&title=${options.title}` : ""
        const description = options.description ? `&description=${options.description}` : ""
        if(!language) throw new TypeError("Invalid language")
        const createdCode = await this.base.api.post(`${this.base.root}/code?language=${typeof language === "string" ? language : Languages[language]}${title}${description}`, {
            body: { code, error }
        })
        
        return this.fetch(createdCode)
    }
}

CodeManager.ID_PATTERN = /(http(s)?:\/\/)?(www\.)?srcshare\.io\/\?id=\w+/g

module.exports = CodeManager