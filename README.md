# SrcShare
An API Wrapper for the coding sharing site SrcShare.io

```js

import { Base } from "./index.js"; 

const base = new Base();

(async () => {
  const code = await base.codes.fetch("https://srcshare.io/?id=<id>")
  console.log(code) // Expected output a Code constructor
})();
```
