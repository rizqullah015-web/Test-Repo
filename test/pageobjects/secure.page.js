const {$} = require('@wdio/globals')

class SecurePage {
    get productTitle() {
        return $('~test-PRODUCTS')
    }
    get menuButton() {
        return $('~test-Menu')
    }
    get logoutButton() {
        return $('~test-LOGOUT')
    }
    get sortButton() {
        return $('~test-Modal Selector Button')
    }
    get sortNameDesc() {
        return $('android=new UiSelector().text("Name (Z to A)")')
    }
    get firstProductAfterSort() {
        return $('android=new UiSelector().text("Test.allTheThings() T-Shirt (Red)")')
    }

    async logout() {
        await this.menuButton.click()
        await this.logoutButton.click()
    }
    async sortProductNameDesc() {
        await this.sortButton.click()
        await this.sortNameDesc.click()
    }
}

module.exports = new SecurePage()