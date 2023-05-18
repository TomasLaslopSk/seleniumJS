const expect = require('chai').expect;
const TodoPage = require('../pages/todoPage');
const {Builder, Browser, By, Key} = require('selenium-webdriver');


describe('First test set', function() {
    this.timeout(25000);
    let driver;
    let todoPage;

    this.beforeEach(async function() {
        driver = await new Builder().forBrowser(Browser.CHROME).build();
        todoPage = new TodoPage(driver);

        // Open website
        todoPage.loadTodoPage()
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