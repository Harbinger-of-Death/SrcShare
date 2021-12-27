class SrchShareAPIError extends Error {
    constructor(data) {
        super(data.message ?? data.statusText)
        this.code = data.code ?? data.status
        this.path = data.path ?? data.url
        this.requestData = data.body
    }
}

module.exports = SrchShareAPIError