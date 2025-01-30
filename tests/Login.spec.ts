import { expect, test } from '@playwright/test'
import { StatusCodes } from 'http-status-codes'
import { LoginDTO } from './DTO/loginDTO'

test.describe('Login tests', async () => {
  test('Successful authorization', async ({ request }) => {
    const response = await request.post('https://backend.tallinn-learning.ee/login/student', {
      data: LoginDTO.createLoginWithCorrectData(),
    })

    console.log(await response.text())
    expect(response.status()).toBe(StatusCodes.OK)
    expect(
      /^eyJhb[A-Za-z0-9-_]+\.[A-Za-z0-9-_]+\.[A-Za-z0-9-_]+$/.test(await response.text()),
    ).toBeTruthy()
  })

  test('Not allowed method with GET', async ({ request }) => {
    const response = await request.get('https://backend.tallinn-learning.ee/login/student', {
      data: LoginDTO.createLoginWithCorrectData(),
    })
    console.log(await response.statusText())
    expect(response.status()).toBe(StatusCodes.METHOD_NOT_ALLOWED)
    expect(response.status()).toBe(405)
  })

  test('Not allowed method with PUT', async ({ request }) => {
    const response = await request.put('https://backend.tallinn-learning.ee/login/student', {
      data: LoginDTO.createLoginWithCorrectData(),
    })

    console.log(response.statusText())
    expect(response.status()).toBe(StatusCodes.METHOD_NOT_ALLOWED)
  })

  test('Not allowed method with DELETE', async ({ request }) => {
    const response = await request.put('https://backend.tallinn-learning.ee/login/student', {
      data: LoginDTO.createLoginWithCorrectData(),
    })

    console.log(response.statusText())
    expect(response.status()).toBe(StatusCodes.METHOD_NOT_ALLOWED)
  })

  test('Not allowed method with HEAD', async ({ request }) => {
    const response = await request.head('https://backend.tallinn-learning.ee/login/student', {
      data: LoginDTO.createLoginWithCorrectData(),
    })

    console.log(response.statusText())
    expect(response.status()).toBe(StatusCodes.METHOD_NOT_ALLOWED)
  })
  test('Not allowed method with PATCH', async ({ request }) => {
    const response = await request.patch('https://backend.tallinn-learning.ee/login/student', {
      data: LoginDTO.createLoginWithCorrectData(),
    })

    console.log(response.status())
    expect(response.status()).toBe(StatusCodes.METHOD_NOT_ALLOWED)
  })

})
