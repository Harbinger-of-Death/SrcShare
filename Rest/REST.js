const fetch = require("node-fetch");
const SrchShareAPIError = require("../Errors/SrchShareAPIError");
class REST {
    static async _make(url, options = {}) {
        const response = await fetch(url, { method: options.method ?? "GET", headers: {
            "content-type": options.contentType ?? "application/json",
            ...options.headers
        }, ...options.body ? { body: JSON.stringify(options.body) } : undefined })
        return new Promise((resolve, rej) => {
            if(![201, 204, 200].includes(response.status)) return rej(SrchShareAPIError(Object.assign(response, {
                method: options.method,
                path: url,
                requestData: options.body
            })))

            response.json().then(data => resolve(data))
        })
    }

    static async get(url, options = {}) {
        return this._make(url, {
            method: "GET",
            ...options
        })
    }

    static async post(url, options = {}) {
        return this._make(url, {
            method: "POST",
            ...options
        })
    }
}

module.exports = REST