import { login } from "./login"

describe('login', () => {
    const mockAlert = jest.fn()
    window.alert = mockAlert

    it('should display welcome alert', () => {
        login()
        expect(mockAlert).toHaveBeenCalledWith('Welcome to Dio Bank!')
    })
})