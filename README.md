<h1 align="center">Welcome to functional-utils-eamon 👋</h1>
<p>
  <a href="https://www.npmjs.com/package/functional-utils-eamon" target="_blank">
    <img alt="Version" src="https://img.shields.io/npm/v/functional-utils-eamon.svg">
  </a>
  <a href="#" target="_blank">
    <img alt="License: MIT" src="https://img.shields.io/badge/License-MIT-yellow.svg" />
  </a>

</p>

> utils for functional programing

## Install

```bash
$ npm install functional-utils-eamon

$ yarn add functional-utils-eamon
```

## Test

```bash
$ npm run test

$ yarn test
```

## Functional Utils

#### non-lazy version

- forEach
- map
- filter
- reduce
- pipe

#### lazy version

- forEach
- map
- filter
- reduce
- take

## Usage

```js
import { forEach, filter, map, pipe } from 'functional-utils-eamon';

const data = [1, 2, 4];

pipe(
  filter((x) => x > 1),
  map((x) => x * 2),
  forEach((x) => console.log(x))
)(data); // [4,8]
```

## Author

👤 **eamon3481**

- Blog: https://velog.io/@eamon3481
- Github: [@eamon3481](https://github.com/eamon3481)

## Show your support

Give a ⭐️ if this project helped you!

---
