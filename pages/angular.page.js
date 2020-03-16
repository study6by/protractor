import Page from './page'

class AngularPage extends Page {
  // get enterField () { return $('input[ng-model="yourName"]') }
  get enterField () { return element(by.model('yourName')) }
  get textField () { return $('h1[class="ng-binding"]') }
  // get todoCheckButton () { return element.all(by.css('input[ng-model="todo.done"]')).first() }
  get todoCheckButton () { return $$('input[ng-model="todo.done"]').first() }
  get todoString () { return element.all(by.xpath('//input[@ng-model="todo.done"]/following::span')).first() }
  get faqButton () { return $('a[href="https://docs.angularjs.org/misc/faq"]') }
  open () {
    // browser.ignoreSynchronization = true
    browser.get('https://angularjs.org/')
  }

  async typeText () {
    await this.enterField.sendKeys('abc')
  }

  async checkTodo () {
    await this.todoCheckButton.click()
  }

  getAttributeFromTodoString () {
    return this.todoString.getAttribute('class')
  }

  getTextFromTextField () {
    return this.textField.getText()
  }

  async moveToFAQPage () {
    await this.learnButton.click()
    await this.faqButton.click()
  }
}

export default new AngularPage()
