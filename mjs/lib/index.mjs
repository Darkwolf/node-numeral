import Helper from '@darkwolf/helper.mjs'

export default class Numeral {
  static value = 0
  static toNumber = Helper.toNumber
  static toFinite = Helper.toFinite
  static toFloat = Helper.toFloat
  static toInteger = Helper.toInteger
  static toSafeInteger = Helper.toSafeInteger
  static add = Helper.add
  static subtract = Helper.subtract
  static multiply = Helper.multiply
  static divide = Helper.divide
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
    this.value = Helper.toNumber(value)
    return this
  }

  add(addend) {
    this.value += Helper.toNumber(addend)
    return this
  }

  subtract(subtrahend) {
    this.value -= Helper.toNumber(subtrahend)
    return this
  }

  multiply(multiplicand) {
    this.value *= Helper.toNumber(multiplicand)
    return this
  }

  divide(divisor) {
    this.value /= Helper.toNumber(divisor)
    return this
  }

  toFinite() {
    this.value = Helper.toFinite(this.value)
    return this
  }

  toFloat() {
    this.value = Helper.toFloat(this.value)
    return this
  }

  toInteger() {
    this.value = Helper.toInteger(this.value)
    return this
  }

  toSafeInteger() {
    this.value = Helper.toSafeInteger(this.value)
    return this
  }

  abs() {
    this.value = Math.abs(this.value)
    return this
  }

  ceil() {
    this.value = Math.ceil(this.value)
    return this
  }

  floor() {
    this.value = Math.floor(this.value)
    return this
  }

  round() {
    this.value = Math.round(this.value)
    return this
  }

  pow(exponent) {
    this.value = Math.pow(this.value, Helper.toNumber(exponent))
    return this
  }

  reset() {
    this.value = 0
    return this
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

  clone() {
    return new Numeral(this.value)
  }

  [Symbol.toPrimitive](hint) {
    return hint === 'string' ? this.toString() : this.valueOf()
  }
}
