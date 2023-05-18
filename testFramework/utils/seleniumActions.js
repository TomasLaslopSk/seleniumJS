const { until, Key } = require('selenium-webdriver');

class SeleniumActions {
    constructor(driver) {
        this.driver = driver;
    }

    async loadUrl(url) {
        await this.driver.get(url).catch(error => { throw(error) });
    }

    async pressElement(locator) {
        await this.driver.wait(until.elementLocated(locator), 8000)
            .click()
            .catch(error =>  { throw(error) });
    }

    async hoverOnElement(locator, duration) {
        let actions = this.driver.actions({bridge: true});
        const listElement = await this.driver.findElement(locator)
        await actions.move({duration: duration, origin:listElement, x: 1, y: 1})
            .perform()
            .catch(error => { throw(error) });
    }

    async enterTextAndPressEnterKey(locator, text) {
        await this.driver.wait(until.elementLocated(locator), 8000)
            .sendKeys(text, Key.RETURN)
            .catch(error => { throw(error) });
    }

    async waitUntilPageTitleIsDisplayed(webPageTitle) {
        await this.driver.wait(until.titleIs(webPageTitle), 4000).catch(error =>  { throw(error) });
    }

    async getInnerText(locator) {
        return await this.driver.wait(until.elementLocated(locator), 4000).getText()
            .catch(error => { throw(error) });
    }
}

module.exports = SeleniumActions;