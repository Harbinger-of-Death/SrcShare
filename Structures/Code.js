class Code {
    constructor(data = {}, base) {
        Object.defineProperties(this, {
            raw: {
                value: data
            },
            base: {
                value: base
            }
        })
        this.id = data.id ?? null
        this.code = data?.code ?? null
        this.error = data.error ?? null
        this.language = data.language?.toUpperCase() ?? null
        this.description = data.description ?? null
        this.title = data.title ?? null
        this.views = data.views ?? null
        this.url = `https://srcshare.io/?id=${this.id}` ?? null
    }
}

module.exports = Code