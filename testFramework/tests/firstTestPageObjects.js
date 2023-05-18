const expect = require('chai').expect;
const TodoPage = require('../pages/todoPage');
const {Builder, Browser, By, Key} = require('selenium-webdriver');
const { Driver } = require("./baseTest")
const Url = require("../utils/url")


describe('First test set', async function() {
    let driver = await Driver.init()
    let urlBuilder = new Url(driver)
    let todoPage = new TodoPage(driver).withUrl(urlBuilder.load())

    this.beforeEach(async function() {
        await todoPage.url.load()
    })

    it('First test in First test set', async function() {

        try {
            await todoPage.addTodoListItem("webdriver")
            await todoPage.hoverTodoListItem()
            await todoPage.deleteTodoListItem()

        } finally {
            await driver.quit();
        }
    });

});