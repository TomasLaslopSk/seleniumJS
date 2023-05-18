const { Urls } = require("../resources/urls")

class Url {

    constructor(driver) {
        this.driver = driver;
        this.url = Urls.BASE_URL
    }

    load = () => {
        this.driver.get(this.url);
        return this;
    }
}

module.exports = Url;