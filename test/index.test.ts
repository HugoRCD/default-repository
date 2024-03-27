import { expect, it } from 'vitest'
import { main } from './index'

it('prints \'Hello, world!\'', (): void => {
  expect(main()).toMatch('Hello, world!')
})
