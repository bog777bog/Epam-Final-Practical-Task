const Page = require('./page');

class MainPage extends Page {

    open () {
        return super.open('https://cloud.google.com');
    }
}

module.exports = new MainPage();
