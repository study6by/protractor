import Page from './page'

class FAQPage extends Page {
  get miscButton () { return $('a[ng-class="navClass(navGroup)"]') }

  getMiscButtonText () {
    return this.miscButton.getText()
  }
}

export default new FAQPage()
