exports.Languages = createEnum(["COFFEESCRIPT", "CSS", "D", "DART", "DIFF", "DJANGO", "DOCKERFILE", "ERLANG", "GO", "HANDLEBARS", "HTML/XML", "HTTP", "JAVASCRIPT", "JSX", "LIVESCRIPT", "LUA", "MARKDOWN", "NGINX", "PASCAL", "PERL", "PHP", "POWERSHELL", "PYTHON", "RUBY", "RUST", "SAS", "SASS", "SHELL", "SPARQL", "SPREADSHEET", "SQL", "SWIFT", "VB", "VBSCRIPT", "VUE", "XQUERY", "YAML", "YAML-FRONTMATTER"])

function createEnum(keys) {
    let obj = {}
    for (let [index, value] of keys.entries()) {
        if(keys[index] === null) continue
        obj[index] = value
        obj[value] = index
    }

    return obj
}