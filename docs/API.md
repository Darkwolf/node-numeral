[boolean]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#Boolean_type
[number]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#Number_type
[string]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#String_type
[Object]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object

# API
### class: Numeral
#### `static` Numeral.value
* returns: <[number][number]> Defaults to `0`.

#### `static` Numeral.finite(value)
* `value` <[string][string] | [number][number]>
* returns: <[number][number]>

#### `static` Numeral.float(value)
* `value` <[string][string] | [number][number]>
* returns: <[number][number]>

#### `static` Numeral.integer(value)
* `value` <[string][string] | [number][number]>
* returns: <[number][number]>

#### `static` Numeral.safeInteger(value)
* `value` <[string][string] | [number][number]>
* returns: <[number][number]>

#### `static` Numeral.abs(value)
* `value` <[number][number]>
* returns: <[number][number]>

#### `static` Numeral.ceil(value)
* `value` <[number][number]>
* returns: <[number][number]>

#### `static` Numeral.floor(value)
* `value` <[number][number]>
* returns: <[number][number]>

#### `static` Numeral.pow(value, exponent)
* `value` <[number][number]>
* `exponent` <[number][number]>
* returns: <[number][number]>

#### `static` Numeral.round(value)
* `value` <[number][number]>
* returns: <[number][number]>

#### `static` Numeral.parse(value)
* `value` <[string][string] | [number][number] | [Numeral](#class-numeral)>
* returns: <[number][number]>

#### `static` Numeral.isFinite(value)
* `value` <[any][Object]>
* returns: <[boolean][boolean]>

#### `static` Numeral.isFloat(value)
Equivalent to <[Numeral.isFinite(value)](#static-numeralisfinitevalue)>
* `value` <[any][Object]>
* returns: <[boolean][boolean]>

#### `static` Numeral.isInteger(value)
* `value` <[any][Object]>
* returns: <[boolean][boolean]>

#### `static` Numeral.isSafeInteger(value)
* `value` <[any][Object]>
* returns: <[boolean][boolean]>

#### `static` Numeral.isNaN(value)
* `value` <[any][Object]>
* returns: <[boolean][boolean]>

#### `static` Numeral.isInfinity(value)
* `value` <[any][Object]>
* returns: <[boolean][boolean]>

#### `static` Numeral.isDecimal(value)
* `value` <[any][Object]>
* returns: <[boolean][boolean]>

#### `static` Numeral.isPositive(value)
* `value` <[number][number]>
* returns: <[boolean][boolean]>

#### `static` Numeral.isNegative(value)
* `value` <[number][number]>
* returns: <[boolean][boolean]>

#### `static` Numeral.isNonNegative(value)
* `value` <[number][number]>
* returns: <[boolean][boolean]>

#### `static` Numeral.isNonPositive(value)
* `value` <[number][number]>
* returns: <[boolean][boolean]>

#### `static` Numeral.isNatural(value)
* `value` <[any][Object]>
* returns: <[boolean][boolean]>

#### `static` Numeral.isWhole(value)
* `value` <[any][Object]>
* returns: <[boolean][boolean]>

#### `static` Numeral.isEven(value)
* `value` <[any][Object]>
* returns: <[boolean][boolean]>

#### `static` Numeral.isOdd(value)
* `value` <[any][Object]>
* returns: <[boolean][boolean]>

#### `static` Numeral.from(value)
* `value` <[string][string] | [number][number]>
* returns: <[Numeral](#class-numeral)>

#### `init` new Numeral([value])
* `value` <[number][number]>
* returns: <[Numeral](#class-numeral)>

#### `get` numeral.isFinite
* returns: <[boolean][boolean]>

#### `get` numeral.isFloat
* returns: <[boolean][boolean]>

#### `get` numeral.isInteger
* returns: <[boolean][boolean]>

#### `get` numeral.isSafeInteger
* returns: <[boolean][boolean]>

#### `get` numeral.isNaN
* returns: <[boolean][boolean]>

#### `get` numeral.isInfinity
* returns: <[boolean][boolean]>

#### `get` numeral.isDecimal
* returns: <[boolean][boolean]>

#### `get` numeral.isPositive
* returns: <[boolean][boolean]>

#### `get` numeral.isNegative
* returns: <[boolean][boolean]>

#### `get` numeral.isNonNegative
* returns: <[boolean][boolean]>

#### `get` numeral.isNonPositive
* returns: <[boolean][boolean]>

#### `get` numeral.isNatural
* returns: <[boolean][boolean]>

#### `get` numeral.isWhole
* returns: <[boolean][boolean]>

#### `get` numeral.isEven
* returns: <[boolean][boolean]>

#### `get` numeral.isOdd
* returns: <[boolean][boolean]>

#### numeral.setValue(value)
* `value` <[number][number]> Defaults to `0`.
* returns: <[this](#class-numeral)>

#### numeral.add(value)
* `value` <[number][number]>
* returns: <[this](#class-numeral)>

#### numeral.subtract(value)
* `value` <[number][number]>
* returns: <[this](#class-numeral)>

#### numeral.multiply(value)
* `value` <[number][number]>
* returns: <[this](#class-numeral)>

#### numeral.divide(value)
* `value` <[number][number]>
* returns: <[this](#class-numeral)>

#### numeral.finite()
* returns: <[this](#class-numeral)>

#### numeral.float()
* returns: <[this](#class-numeral)>

#### numeral.integer()
* returns: <[this](#class-numeral)>

#### numeral.safeInteger()
* returns: <[this](#class-numeral)>

#### numeral.abs()
* returns: <[this](#class-numeral)>

#### numeral.ceil()
* returns: <[this](#class-numeral)>

#### numeral.floor()
* returns: <[this](#class-numeral)>

#### numeral.pow(exponent)
* `exponent` <[number][number]>
* returns: <[this](#class-numeral)>

#### numeral.round()
* returns: <[this](#class-numeral)>

#### numeral.reset()
* returns: <[this](#class-numeral)>

#### numeral.clone()
* returns: <[Numeral](#class-numeral)>

#### numeral.toString()
* returns: <[string][string]>

#### numeral.valueOf()
* returns: <[number][number]>

#### numeral.toJSON()
* returns: <[number][number]>

#### numeral\[Symbol.toPrimitive](hint)
* `hint` <[string][string]> Must be `'string'`, `'number'` or `'default'`.
* returns: <[string][string] | [number][number]>
