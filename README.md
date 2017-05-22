# flowleft

> Function composition from left to right.

[![NPM](https://nodei.co/npm/flowleft.png)](https://nodei.co/npm/flowleft)

# Install

```bash
npm install flowleft
```

```bash
bower install flowleft
```

# Usage

```javascript
var flowLeft = require('flowleft');

function square(n) {
  return n * n;
}

function add(/* args */) {
  var result = 0, i = arguments.length;
  while(i--) result += arguments[i];
  return result;
}

var addSquare = flowLeft(add, square);

console.log(addSquare(1, 2)); // 9
console.log(addSquare(1, 2, 3)); // 36
console.log((addSquare(2)); // 4
```

# Test

```bash
npm test
```

# License

MIT
