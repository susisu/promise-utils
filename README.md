# @susisu/promise-utils

[![Build Status](https://travis-ci.com/susisu/promise-utils.svg?branch=master)](https://travis-ci.com/susisu/promise-utils)

Promise utilities

``` shell
npm i @susisu/promise-utils
# or
yarn add @susisu/promise-utils
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
