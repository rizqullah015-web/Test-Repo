const { expect } = require('@wdio/globals')
const LoginPage = require('../pageobjects/login.page')
const SecurePage = require('../pageobjects/secure.page')
const UserData = require('../test_data/user.data')
const AppHelper = require('../helpers/app.helper')

describe('Swag Labs Mobile', () => {
    it('Login dengan akun valid', async () => {
        await LoginPage.login(
            UserData.validUser.username,
            UserData.validUser.password
        )

      await expect(SecurePage.productTitle).toBeDisplayed()
    })
    it('Login dengan akun invalid', async () => {
        await driver.reloadSession()
        
        await LoginPage.login(
            UserData.invalidUser.username,
            UserData.invalidUser.password
        )
        await LoginPage.errorMessage.waitForDisplayed({
            timeout: 10000
        })

        await expect(LoginPage.errorMessage).toBeDisplayed()
    })
    it('Sorting prdouct Name Z to A', async () => {
        await driver.reloadSession()

        await LoginPage.login(
            UserData.validUser.username,
            UserData.validUser.password
        )
        await SecurePage.sortProductNameDesc()
        
        await expect(SecurePage.firstProductAfterSort).toBeDisplayed()
    })
    it('Logout dengan sukses', async () => {
        await driver.reloadSession()

        await LoginPage.login(
            UserData.validUser.username,
            UserData.validUser.password
        )
        await SecurePage.logout()

        await expect(LoginPage.btnLogin).toBeDisplayed()
    })
})