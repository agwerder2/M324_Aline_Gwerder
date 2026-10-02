import assert from 'node:assert'
import { sum } from './index.js'

describe('sum', () => {
  it('should add 1 + 2 to equal 3', () => {
    assert.equal(sum(1, 2), 3)
  })

it('should add decimal numbers', () => {
  assert.ok(Math.abs(sum(0.1, 0.2) - 0.3) < 0.000001)
})
})