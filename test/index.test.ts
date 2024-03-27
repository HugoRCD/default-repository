import { expect, it } from 'vitest'
import { main } from './index'

it("prints 'Hello, world!'", async () => {
  const result = await main()
  expect(result).toMatch('Hello, world!')
})
