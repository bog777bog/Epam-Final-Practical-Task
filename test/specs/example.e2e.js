const CalculatorPage = require('../pageobjects/calculator.page')
const MainPage = require('../pageobjects/main.page')
//const SecurePage = require('../pageobjects/secure.page')

describe('Compute Engine', () => {
    it('should add to estimate (Hurt Me Plenty)', async () => {
        await MainPage.open();
        //await CalculatorPage.open();

        // await LoginPage.login('tomsmith', 'SuperSecretPassword!')
        // await expect(SecurePage.flashAlert).toBeExisting()
        // await expect(SecurePage.flashAlert).toHaveTextContaining(
        //     'You logged into a secure area!')
    })
})


