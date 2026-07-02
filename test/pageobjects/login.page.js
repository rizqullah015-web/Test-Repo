const {$} = require('@wdio/globals')

class LoginPage {
    get inputUsername() { 
        return $('~test-Username')
    }
    get inputPassword() {
        return $('~test-Password')
    }
    get btnLogin() {
        return $('~test-LOGIN')
    }
    get errorMessage() {
        return $('~test-Error message')
    }
    async login(username, password) {
        await this.inputUsername.setValue(username)
        await this.inputPassword.setValue(password)
        await this.btnLogin.click()
    }
}

module.exports = new LoginPage()