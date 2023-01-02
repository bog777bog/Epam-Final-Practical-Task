const Page = require('./page');

class CalculatorPage extends Page {

    open () {
        return super.open('products/calculator');
    }
}

module.exports = new CalculatorPage();
