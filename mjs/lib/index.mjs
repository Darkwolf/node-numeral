import Helper from '@darkwolf/helper.mjs'

export default class Numeral {
  static value = 0
  static finite = Helper.finite
  static float = Helper.float
  static integer = Helper.integer
  static safeInteger = Helper.safeInteger
  static isFinite = Helper.isFinite
  static isFloat = Helper.isFloat
  static isInteger = Helper.isInteger
  static isSafeInteger = Helper.isSafeInteger
  static isNaN = Helper.isNaN
  static isInfinity = Helper.isInfinity
  static isDecimal = Helper.isDecimal
  static isPositive = Helper.isPositive
  static isNegative = Helper.isNegative
  static isNonNegative = Helper.isNonNegative
  static isNonPositive = Helper.isNonPositive
  static isNatural = Helper.isNatural
  static isWhole = Helper.isWhole

  static parse(value) {
    return Helper.isNumber(value) ? value : value instanceof Numeral ? value.value : parseFloat(value)
  }

  static isEven(value) {
    return Helper.isInteger(value) && !(value % 2)
  }

  static isOdd(value) {
    return Helper.isInteger(value) && !!(value % 2)
  }

  static from(value) {
    return new Numeral(value)
  }

  constructor(value) {
    this.setValue(value)
  }

  get isFinite() {
    return Helper.isFinite(this.value)
  }

  get isFloat() {
    return Helper.isFloat(this.value)
  }

  get isInteger() {
    return Helper.isInteger(this.value)
  }

  get isSafeInteger() {
    return Helper.isSafeInteger(this.value)
  }

  get isNaN() {
    return Helper.isNaN(this.value)
  }

  get isInfinity() {
    return Helper.isInfinity(this.value)
  }

  get isDecimal() {
    return Helper.isDecimal(this.value)
  }

  get isPositive() {
    return Helper.isPositive(this.value)
  }

  get isNegative() {
    return Helper.isNegative(this.value)
  }

  get isNonNegative() {
    return Helper.isNonNegative(this.value)
  }

  get isNonPositive() {
    return Helper.isNonPositive(this.value)
  }

  get isNatural() {
    return Helper.isNatural(this.value)
  }

  get isWhole() {
    return Helper.isWhole(this.value)
  }

  get isEven() {
    return Numeral.isEven(this.value)
  }

  get isOdd() {
    return Numeral.isOdd(this.value)
  }

  get [Symbol.toStringTag]() {
    return 'Numeral'
  }

  setValue(value) {
    this.value = Helper.exists(value) ? Numeral.parse(value) : Numeral.value
    return this
  }

  add(value) {
    this.value += value
    return this
  }

  subtract(value) {
    this.value -= value
    return this
  }

  multiply(value) {
    this.value *= value
    return this
  }

  divide(value) {
    this.value /= value
    return this
  }

  finite() {
    return this.setValue(Helper.finite(this.value))
  }

  float() {
    return this.setValue(Helper.float(this.value))
  }

  integer() {
    return this.setValue(Helper.integer(this.value))
  }

  safeInteger() {
    return this.setValue(Helper.safeInteger(this.value))
  }

  abs() {
    return this.setValue(Math.abs(this.value))
  }

  ceil() {
    return this.setValue(Math.ceil(this.value))
  }

  floor() {
    return this.setValue(Math.floor(this.value))
  }

  round() {
    return this.setValue(Math.round(this.value))
  }

  pow(exponent) {
    return this.setValue(Math.pow(this.value, exponent))
  }

  reset() {
    return this.setValue()
  }

  clone() {
    return new Numeral(this.value)
  }

  toString() {
    return `${this.value}`
  }

  valueOf() {
    return this.value
  }

  toJSON() {
    return this.value
  }

  [Symbol.toPrimitive](hint) {
    return hint === 'string' ? this.toString() : this.valueOf()
  }
}
