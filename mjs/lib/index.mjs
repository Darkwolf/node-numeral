import Helper from '@darkwolf/helper.mjs'

export default class Numeral {
  static value = 0
  static float = Helper.float
  static integer = Helper.integer
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

  static abs(value) {
    return Math.abs(value)
  }

  static ceil(value) {
    return Math.ceil(value)
  }

  static floor(value) {
    return Math.floor(value)
  }

  static pow(value, exponent) {
    return Math.pow(value, exponent)
  }

  static round(value) {
    return Math.round(value)
  }

  static isEven(value) {
    return Helper.isInteger(value) && !(value % 2)
  }

  static isOdd(value) {
    return Helper.isInteger(value) && !!(value % 2)
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
    this.value = value || Numeral.value
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

  float() {
    return this.setValue(Helper.float(this.value))
  }

  integer() {
    return this.setValue(Helper.integer(this.value))
  }

  abs() {
    return this.setValue(Numeral.abs(this.value))
  }

  ceil() {
    return this.setValue(Numeral.ceil(this.value))
  }

  floor() {
    return this.setValue(Numeral.floor(this.value))
  }

  pow(exponent) {
    return this.setValue(Numeral.pow(this.value, exponent))
  }

  round() {
    return this.setValue(Numeral.round(this.value))
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
