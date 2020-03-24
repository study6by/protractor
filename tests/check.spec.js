import { expect } from 'chai'
import AngularPage from '../pages/angular.page'

describe('selecting todo checkbox', () => {
  before(function () {
    AngularPage.open()
  })
  it('should uncheck option', async () => {
    await AngularPage.checkTodo()
    expect(await AngularPage.getAttributeFromTodoString()).to.include('false')
  })
  it('should check option', async () => {
    await AngularPage.checkTodo()
    expect(await AngularPage.getAttributeFromTodoString()).to.include('true')
  })
})
