import { expect } from 'chai'
// import 'chai/register-should'
import AngularPage from '../pages/angular.page'

describe('name types', () => {
  before(function () {
    AngularPage.open()
  })
  afterEach(function () {
    AngularPage.enterField.clear()
  })
  it('should display name 1 that user typed', async () => {
    await AngularPage.typeText('abc')
    expect(await AngularPage.getTextFromTextField()).to.have.lengthOf(10)// equal('Hello abc!')
  })
  it('should display name 2 that user typed', async () => {
    await AngularPage.typeText('user')
    expect(await AngularPage.getTextFromTextField()).to.equal('Hello user!')// equal('Hello user!')
  })
  it('should display name 3 that user typed', async () => {
    await AngularPage.typeText('john doe')
    expect(await AngularPage.getTextFromTextField()).to.have.lengthOf.within(10, 20)// equal('Hello john doe!')
  })
})
