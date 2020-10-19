# Numeral
## Install
#### ECMAScript (Node.js v12.x LTS or higher)
`npm i --save @darkwolf/numeral.mjs`
#### CommonJS (Node.js v10.x LTS or higher)
`npm i --save @darkwolf/numeral.cjs`
## Using
```javascript
// ECMAScript
import Numeral from '@darkwolf/numeral.mjs'

// CommonJS
const Numeral = require('@darkwolf/numeral.cjs')

const number = new Numeral(1024)
  .add(512) // 1536
  .subtract(256) // 1280
  .multiply(128) // 163840
  .divide(64)
number.value // 2560
const other = number
  .clone()
  .subtract(2048)
number.value // 2560
other.value // 512
const sum = number + other // 3072
```
## [API Documentation](https://github.com/Darkwolf/node-numeral/blob/master/docs/API.md)
## Contact Me
#### GitHub: [@PavelWolfDark](https://github.com/PavelWolfDark)
#### Telegram: [@PavelWolfDark](https://t.me/PavelWolfDark)
#### Email: [PavelWolfDark@gmail.com](mailto:PavelWolfDark@gmail.com)
