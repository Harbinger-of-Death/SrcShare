# SrcShare
An API Wrapper for the coding sharing site SrcShare.io
# For fetching srcshare codes
```js

import { Base } from "./index.js"; 

const base = new Base();

(async () => {
  const code = await base.codes.fetch("https://srcshare.io/?id=<id>")
  console.log(code) // Expected output: a Code constructor
})();
```
# For sharing codes to srcshare
```js
import { Base } from "./index.js"; 

const base = new Base();

(async () => {
  const code = await base.codes.create({ code: "./path", language: "PYTHON", title: "hello", description: "Awesome", error: "An Error" })
  console.log(code) // Expected output: a Code constructor
})();
```
