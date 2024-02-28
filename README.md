# @susisu/promise-utils

[![CI](https://github.com/susisu/promise-utils/workflows/CI/badge.svg)](https://github.com/susisu/promise-utils/actions?query=workflow%3ACI)

Promise utilities

``` shell
# npm
npm i @susisu/promise-utils
# yarn
yarn add @susisu/promise-utils
# pnpm
pnpm add @susisu/promise-utils
```

## Usage

### `triplet`

Creates a triplet of a promise and its resolve and reject functions.

``` typescript
import { triplet } from "@susisu/promise-utils";

const [promise, resolve, reject] = triplet<number>();

resolve(42);

promise.then(res => {
  console.log(res); // -> 42
});
```

### `attachActions`

Attaches cancellable actions to a promise.

``` typescript
import { triplet, attachActions } from "@susisu/promise-utils";

const [promise, resolve, reject] = triplet<number>();

const [cancel] = attachActions(
  promise,
  res => { console.log(res); },
  err => { console.log(err); }
);

cancel();

resolve(42); // no output
```

## License

[MIT License](http://opensource.org/licenses/mit-license.php)

## Author

Susisu ([GitHub](https://github.com/susisu), [Twitter](https://twitter.com/susisu2413))
