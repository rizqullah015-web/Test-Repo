class AppHelper {
    async pause(ms) {
        await driver.pause(ms)
    }
}

module.exports = new AppHelper()