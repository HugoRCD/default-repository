import { describe, expect, it } from 'vitest'

describe('maths', () => {
  it('adds 1 + 2 to equal 3', () => {
    expect(1 + 2).toStrictEqual(3)
  })

  it('subtracts 2 - 1 to equal 1', () => {
    expect(2 - 1).toStrictEqual(1)
  })

  it('multiplies 2 * 3 to equal 6', () => {
    expect(2 * 3).toStrictEqual(6)
  })

  it('divides 6 / 3 to equal 2', () => {
    expect(6 / 3).toStrictEqual(2)
  })
})
