import { expect } from 'chai'
// import 'chai/register-should'
import AngularPage from '../pages/angular.page'
import FAQPage from '../pages/faq.page'
import { browser } from 'protractor'

describe('switch to faq page', () => {
  before(function () {
    AngularPage.open()
  })
  it('should match the url', async () => {
    await AngularPage.moveToFAQPage()
    expect(await browser.getCurrentUrl()).to.equal('https://docs.angularjs.org/misc/faq')
  })
  it('should present element on the page', async () => {
    expect(await FAQPage.getMiscButtonText()).to.equal('Miscellaneous')
  })
})
