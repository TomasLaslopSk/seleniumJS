const { By } = require('selenium-webdriver');
const seleniumactions = require('../utils/seleniumActions');

class TodoPage {

    newTodoInputField = By.className('new-todo')
    todoListElement = By.css('.todo-list li')
    destroyButtonForTodoListElement = By.className('destroy')

    constructor(driver) {
        this.seleniumactions = new seleniumactions(driver);
    }

    async loadTodoPage() {
        const url = 'https://todomvc.com/examples/vanillajs/'
        await this.seleniumactions.loadUrl(url)
    }

    async addTodoListItem(text) {
        await this.seleniumactions.enterTextAndPressEnterKey(this.newTodoInputField, text)
    }

    async hoverTodoListItem() {
        await this.seleniumactions.hoverOnElement(this.todoListElement, 2000)
    }

    async deleteTodoListItem() {
        await this.seleniumactions.pressElement(this.destroyButtonForTodoListElement)
    }
}

module.exports = TodoPage;