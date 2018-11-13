const calculatorPage= require('./pages/calculatorPage');
const angularPage=require('./pages/angularPage');
describe('angularjs homepage todo list', function() {
  
  
    it('should add a todo', function() {
      browser.get('https://angularjs.org');
  
      angularPage.todoListTodoText.sendKeys('write first protractor test');
      angularPage.addButton.click();
  
      var todoList = element.all(by.repeater('todo in todoList.todos'));
      expect(todoList.count()).toEqual(3);
      expect(todoList.get(2).getText()).toEqual('write first protractor test');
      
      // You wrote your first test, cross it off the list
      todoList.get(2).click();
      var completedAmount = element.all(by.css('.done-true'));
      expect(completedAmount.count()).toEqual(2);
    });

    it('Navigating to Julimer calculator to add 2 nummbers', function() {
        browser.get('http://juliemr.github.io/protractor-demo/');
        calculatorPage.firstTxtField.sendKeys('6');
        calculatorPage.secondTxtField.sendKeys('3');
        calculatorPage.goButton.click();
        expect(calculatorPage.resultTxtField.getText()).toEqual('9');
    })
  });