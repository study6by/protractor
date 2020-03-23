import Page from './page'

class FAQPage extends Page {
  get miscButton () { return $('a[ng-class="navClass(navGroup)"]') }
  get searchField () { return $('input[placeholder="SEARCH"]') }
  get resultSet () { return element.all(by.xpath('//div[@class="search-results-frame"]/descendant::li')) }

  async searchText () {
    await this.searchField.sendKeys('api')
  }

  getMiscButtonText () {
    return this.miscButton.getText()
  }

  getResultSize () {
    return Object.keys(this.resultSet).length
  }
}

export default new FAQPage()
