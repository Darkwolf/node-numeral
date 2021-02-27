[boolean]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#Boolean_type
[number]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#Number_type
[string]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#String_type
[Object]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object

# API
### class: Numeral
#### `static` Numeral.value
* returns: <[number][number]> Defaults to `0`.

#### `static` Numeral.toNumber(value)
* `value` <[any][Object]> If `undefined`, `null` or `NaN` will be return `0`.
* returns: <[number][number]>

#### `static` Numeral.toFinite(value)
* `value` <[any][Object]> If `undefined`, `null` or `NaN` will be return `0`.
* returns: <[number][number]>

#### `static` Numeral.toFloat(value)
Alias for <[Numeral.toFinite(value)](#static-numeraltofinitevalue)>.
* `value` <[any][Object]> If `undefined`, `null` or `NaN` will be return `0`.
* returns: <[number][number]>

#### `static` Numeral.toInteger(value)
* `value` <[any][Object]> If `undefined`, `null` or `NaN` will be return `0`.
* returns: <[number][number]>

#### `static` Numeral.toSafeInteger(value)
* `value` <[any][Object]> If `undefined`, `null` or `NaN` will be return `0`.
* returns: <[number][number]>

#### `static` Numeral.add(augend, addend)
* `augend` <[number][number]>
* `addend` <[number][number]>
* returns: <[number][number]>

#### `static` Numeral.subtract(minuend, subtrahend)
* `minuend` <[number][number]>
* `subtrahend` <[number][number]>
* returns: <[number][number]>

#### `static` Numeral.multiply(multiplier, multiplicand)
* `multiplier` <[number][number]>
* `multiplicand` <[number][number]>
* returns: <[number][number]>

#### `static` Numeral.divide(dividend, divisor)
* `dividend` <[number][number]>
* `divisor` <[number][number]>
* returns: <[number][number]>

#### `static` Numeral.isFinite(value)
* `value` <[any][Object]>
* returns: <[boolean][boolean]>

#### `static` Numeral.isFloat(value)
Alias for <[Numeral.isFinite(value)](#static-numeralisfinitevalue)>.
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
* `value` <[any][Object]> If `undefined`, `null` or `NaN` will be return `0`. Defaults to `0`.
* returns: <[Numeral](#class-numeral)>

#### `init` new Numeral([value])
* `value` <[any][Object]> If `undefined`, `null` or `NaN` will be return `0`. Defaults to `0`.
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
* `value` <[number][number]> If `undefined`, `null` or `NaN` will be return `0`. Defaults to `0`.
* returns: <[this](#class-numeral)>

#### numeral.add(addend)
* `addend` <[number][number]>
* returns: <[this](#class-numeral)>

#### numeral.subtract(subtrahend)
* `subtrahend` <[number][number]>
* returns: <[this](#class-numeral)>

#### numeral.multiply(multiplicand)
* `multiplicand` <[number][number]>
* returns: <[this](#class-numeral)>

#### numeral.divide(divisor)
* `divisor` <[number][number]>
* returns: <[this](#class-numeral)>

#### numeral.toFinite()
* returns: <[this](#class-numeral)>

#### numeral.toFloat()
* returns: <[this](#class-numeral)>

#### numeral.toInteger()
* returns: <[this](#class-numeral)>

#### numeral.toSafeInteger()
* returns: <[this](#class-numeral)>

#### numeral.abs()
* returns: <[this](#class-numeral)>

#### numeral.ceil()
* returns: <[this](#class-numeral)>

#### numeral.floor()
* returns: <[this](#class-numeral)>

#### numeral.round()
* returns: <[this](#class-numeral)>

#### numeral.pow(exponent)
* `exponent` <[number][number]>
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
