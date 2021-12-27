export class Code {
    public constructor(data: {}, base: Base)
    /**
     * The base class
     */
    public base: Base
    /**
     * The id of this code
     */
    public id: string
    /**
     * The code
     */
    public code: string
    /**
     * The error
     */
    public error: string
    /**
     * The language of this code
     */
    public language: Languages
    /**
     * The description of this code
     */
    public description: string
    /**
     * The title of this code
     */
    public title: string
    /**
     * How many views does this code has
     */
    public views: number
    /**
     * The url of this code
     */
    public url: string
}

export class CodeManager {
    public constructor(base: Base)
    /**
     * The base class
     */
    public base: Base
    /**
     * Fetches a code bin
     * @param id - The url or the id of the code you tryin to fetch
     */
    public fetch(id: string): Promise<Code>
    /**
     * Creates a new code
     */
    public create(options: CreateOptions): Promise<Code>
}

export class Base {
    /**
     * The code manager
     */
    public codes: CodeManager
    /**
     * The REST manager
     */
    public api: REST
    /**
     * The root API url
     */
    public root: "https://api.srcshare.io"
}

export interface RESTOptions {
    /**
     * The method to use for fetching
     */
    method: HTTPMethod
    /**
     * The additional headers
     */
    headers: RESTHeaders
    /**
     * The form body to send to the API
     */
    body: string
}

export interface RESTHeaders {
    /**
     * The content type of this resource
     */
    contentType: ContentType
}

export class REST {
    private static _make(url: string, options: RESTOptions): Promise<any>
    /**
     * Sends a GET request to the specified url
     * @param url - The url to send GET request to
     * @param options - The options to use for this request
     */
    private static get(url: string, options: RESTOptions): Promise<any>
    /**
     * Sends a POST request to the specified url
     * @param url - The url to send POST request to
     * @param options - The options to use for this request
     */
    private static post(url: string, options: RESTOptions): Promise<any>
}

export interface CreateOptions {
    /**
     * The code to post
     */
    code: Buffer | string
    /**
     * The language for this code
     */
    language: Languages | number
    /**
     * The title for this code
     */
    title: string
    /**
     * The description for this code
     */
    description: string
    /**
     * The error of this code
     */
    error: string
}


export type HTTPMethod = "GET" | "POST" | "DELETE"

export type ContentType = "application/json" | "text/html" | "application/javascript" | "image/gif"

export type Languages = "COFFEESCRIPT" 
| "CSS" 
| "D" 
| "DART" 
| "DIFF" 
| "DJANGO" 
| "DOCKERFILE" 
| "ERLANG" 
| "GO"
| "HANDLEBARS"
| "HTML/XML"
| "HTTP"
| "JAVASCRIPT"
| "JSX" 
| "LIVESCRIPT"
| "LUA"
| "MARKDOWN"
| "NGINX"
| "PASCAL"
| "PERL"
| "PHP"
| "POWERSHELL"
| "PYTHON"
| "RUBY"
| "RUST"
| "SAS"
| "SASS"
| "SHELL"
| "SPARQL"
| "SPREADSHEET"
| "SQL"
| "SWIFT"
| "VB"
| "VBSCRIPT"
| "VUE"
| "XQUERY"
| "YAML"
| "YAML-FRONTMATTER"