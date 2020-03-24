export default class Page {
  get learnButton () { return $$('a[class="dropdown-toggle"]').first() }

  waitForElement (elem) {
    browser.wait(protractor.ExpectedConditions.elementToBeClickable(elem), 5000)
  }

  open (path) {
    browser.get(path)
  }
}
