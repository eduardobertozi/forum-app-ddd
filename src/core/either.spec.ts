import { Either, left, right } from '@/core/either'
import { expect } from 'vitest'

function doSomething(shouldSuccess: boolean): Either<string, number> {
  if (shouldSuccess) {
    return right(10)
  } else {
    return left('error')
  }
}

test('success result', () => {
  const result = doSomething(true)

  if (result.isRight()) {
    console.log(result.value)
  }

  expect(result.isRight()).toBe(true)
  expect(result.isLeft()).toBe(false)
})

// test('success result', () => {
//   const success = right('success')
//
//   expect(success.value).toEqual('success')
// })

test('error result', () => {
  const result = doSomething(false)

  expect(result.isLeft()).toBe(true)
  expect(result.isRight()).toBe(false)
})

// test('error result', () => {
//   const error = left('error')
//
//   expect(error.value).toEqual('error')
// })
