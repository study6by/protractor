export default class Page {
  constructor () {
    this.title = 'My Page'
  }

  get learnButton () { return $$('a[class="dropdown-toggle"]').first() }

  waitForElement (elem) {
    browser.wait(protractor.ExpectedConditions.elementToBeClickable(elem), 5000)
  }

  open (path) {
    browser.get(path)
  }
}
