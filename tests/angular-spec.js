import { expect } from 'chai'
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
    expect(await AngularPage.getTextFromTextField()).to.equal('Hello abc!')
  })
  it('should uncross checked lines', async () => {
    await AngularPage.checkTodo()
    expect(await AngularPage.getAttributeFromTodoString()).to.equal('done-false')
  })
  it('should move to the faq page', async () => {
    await AngularPage.moveToFAQPage()
    expect(await FAQPage.getMiscButtonText()).to.equal('Miscellaneous')
  })
})
