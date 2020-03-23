import { expect } from 'chai'
import 'chai/register-should'
import AngularPage from '../pages/angular.page'
import FAQPage from '../pages/faq.page'
before(function () {
  AngularPage.open()
})
after(function () {
  browser.quit()
})
describe('angular page', () => {
  it('should display name that user typed', async () => {
    await AngularPage.typeText()
    expect(await AngularPage.getTextFromTextField()).to.have.lengthOf(10)// equal('Hello abc!')
  })
  it('should uncheck box', async () => {
    await AngularPage.checkTodo()
    expect(await AngularPage.getAttributeFromTodoString()).to.include('false')
  })
  it('should move to the faq page', async () => {
    await AngularPage.moveToFAQPage()
    expect(await FAQPage.getMiscButtonText()).to.equal('Miscellaneous')
  })
})
describe('faq page', () => {
  it('should display results of the search', async () => {
    await FAQPage.searchText()
    expect(await FAQPage.getResultSize()).to.be.above(10)
  })
})
