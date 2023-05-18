const { Builder } = require("selenium-webdriver")

const Driver = {
    init: async () => {
        try {
            return await new Builder()
                .forBrowser(Browser.CHROME)
                .build();
        } catch (e) {
            console.log(e)
        }
    }
}

module.exports.Driver = Driver