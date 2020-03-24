import { expect } from 'chai'
import FAQPage from '../pages/faq.page'

describe('search some info', () => {
  before(function () {
    FAQPage.open()
  })
  it('should display results of the search', async () => {
    await FAQPage.searchText()
    expect(await FAQPage.getResultSize()).to.be.above(10)
    // await FAQPage.getResultSize().should.be.above(10)
  })
})
