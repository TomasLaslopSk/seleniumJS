const { until, Key } = require('selenium-webdriver');

class BasePage {

    constructor(driver, url) {
        this.driver = driver;
        this.url = url;
    }

    async pressElement(locator) {
        await this.driver.wait(until.elementLocated(locator), 8000)
            .click()
            .catch(error =>  { throw(error) });
    }

    async fetchCurrentUrl() {
        return await this.driver.getCurrentUrl();
    }

    async typeText(locator, text) {
        await this.driver.findElement(locator).sendKeys(text)
    }

    async submitText(locator, text) {
        await this.driver.findElement(locator).sendKeys(text, Key.RETURN)
    }

    async hoverOnElement(locator, duration) {
        let actions = this.driver.actions({bridge: true});
        const elementToHover = await this.driver.findElement(locator)
        await actions.move({duration: duration, origin:elementToHover, x: 1, y: 1})
            .perform()
            .catch(error => { throw(error) });
    }

    async waitUntilPageTitleIsDisplayed(webPageTitle) {
        await this.driver.wait(until.titleIs(webPageTitle), 4000).catch(error =>  { throw(error) });
    }

    async confirmUrl(url) {
        const currentUrl = await this.driver.getCurrentUrl();
        return currentUrl === url;
    }

    urlContains(text) {
        return this.url.includes(text)
    }

    withUrl = (url) => {
        this.url = url
        return this;
    }
}

module.exports = BasePage;