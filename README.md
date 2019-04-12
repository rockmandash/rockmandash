# 🤖 rockmandash

[Docs](https://rockmandash.surge.sh/) |
[Twitter](https://twitter.com/gba_rom300) |
[Facebook](https://www.facebook.com/rockmandash) |
[Github](https://github.com/rockmandash/rockmandash)

## What is [rockmandash](https://rockmandash.surge.sh/)?

The [rockmandash](https://rockmandash.surge.sh/) is a function utility library, it is written in `Typescript` and latest javascript new methods.

## Feature

1. Written in TypeScript and ESNext.
2. Tree shakable
3. No polyfill code included
4. Full tests
5. Auto switch from development.js to production.js through babel-macro
6. Even less runtime check compared to other utility library, because rockmandash is directly written in TypeScript
7. Won't include any utilities that are already supported in native. (eg: `keys(); values(); flattenDeep(); padStart();` etc..)
8. String and Array similar functions are combined using function overloading. (eg: `count(); indexOfAll(); chunk(); replaceAll();`etc...)
9. Directly see documentation when you coding in VSCode.

## Installation

Using yarn or npm:

```shell
$ npm install rockmandash
```

```shell
$ yarn add rockmandash
```

## How to import?

### Recommend Way: use **Macro**

What you get:

1. **Types** if you are using typescript
2. Tree-shaking
3. No need to manually configure production and development version

_(You will need babel-plugin-macros, if you are using [create-react-app](https://github.com/facebook/create-react-app)'s [typescript](https://facebook.github.io/create-react-app/docs/adding-typescript) version or regular version, you don't need to do anything. It's already supported. )_

#### Under the hood

```js
import { sum, indexOfAll, chunk } from 'rockmandash/macro';

// In webpack development:
// ↓ ↓ ↓ ↓ ↓ ↓ ↓ ↓
// import { sum, indexOfAll, chunk } from 'rockmandash/development';

// In webpack production:
// ↓ ↓ ↓ ↓ ↓ ↓ ↓ ↓
// import { sum, indexOfAll, chunk } from 'rockmandash/production';
```

**Only production version will strip all `invariant error message` and be minified. Any other version will contain error message.**

### CommonJS Way

_Don't use in production_

What you get:

1. Bundled version

```js
const _ = require('rockmandash/cjs/development'); // big
```

### Script Tag Way

_Don't use in production_

What you get:

1. Bundled version

```html
<!-- UMD -->
<script src="https://unpkg.com/rockmandash/umd.development.js" />

<script>
  console.log(_); // big
</script>
```

## Why another function utility library?

Javascript has so much new methods now!

Some utility function can be rewriting using latest method and syntax.

The [rockmandash](https://rockmandash.surge.sh/) tries to rewrite functions in latest ECMAScript methods!

And with first-class `typescript` support, not only you can get `type checking`, but also benefit from `generic` and `function overloading` support!

---

For example:

```js
import { sumBy } from 'rockmandash/macro';

sumBy([{ value: 1, k: 123 }, { hello: 2, value: 10 }], 'hello');
// This won't compile.
```

The code above **_won't compile_**!

Because I have wrote `generic`, so `typescript` can detect that you don't have `hello` property in every array element.

---

For another example:

```js
import { chunk } from 'rockmandash/macro';

const A = chunk([0, 1, 2, 3, 4, 5], 3);
// A = [[0, 1, 2], [3, 4, 5]]
```

Typescript now knows `A` is a two dimensional array of number _(number[][])_

---

```js
import { chunk } from 'rockmandash/macro';
const B = chunk('HelloWorld', 3);
// B = ['Hel', 'loW', 'orl', 'd']
```

Typescript now knows `B` is a one dimensional array of string (string[])

The code above shows how `function overloading` works!

---

And we can use [core-js](https://github.com/zloirock/core-js), [babel-polyfill](https://babeljs.io/docs/en/babel-polyfill) and [babel](https://babeljs.io/) for polyfilling and transpiling part!

This can reduce so much codebase you ship to production.

## caveat

1. This library is not data-last oriented
2. If some utilities are supported in future, rockmandash will deprecate those utilities by warning.
3. Fucntion which is not pure will be indicated.
4. Source map can't be tree-shaked.
5. Zero ES6 Set() utility since you can easily convert Set() to array.
6. If you want to use full rockmandash features, your project setup must support typescript and babel-plugin-macros
