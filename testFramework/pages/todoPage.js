const { By } = require('selenium-webdriver');
const BasePage = require('./basePage');

class TodoPage extends BasePage {

    constructor(driver) {
        super(driver, "https://todomvc.com/examples/vanillajs/");
        this.newTodoInputField = By.className('new-todo')
        this.todoListElement = By.css('.todo-list li')
        this.destroyButtonForTodoListElement = By.className('destroy')

    }

    async addTodoListItem(text) {
        await this.enterTextAndPressEnterKey(this.newTodoInputField, text)
    }

    async hoverTodoListItem() {
        await this.hoverOnElement(this.todoListElement, 2000)
    }

    async deleteTodoListItem() {
        await this.pressElement(this.destroyButtonForTodoListElement)
    }
}

module.exports = TodoPage;