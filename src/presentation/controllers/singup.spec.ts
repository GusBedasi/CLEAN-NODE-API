import { SingUpController } from './singup'

describe('Singup Controller', () => {
  test('Should return 400 if name is provided', () => {
    const sut = new SingUpController()
    const httpRequest = {
      body: {
        email: 'any_email@mail.com',
        password: 'any_password',
        passordConfirmation: 'any_password'
      }
    }
    const httpResponse = sut.handle(httpRequest)
    expect(httpResponse.statusCode).toBe(400)
  })
})
