const CalculatorPage = require('../pageobjects/calculator.page')
const MainPage = require('../pageobjects/main.page')

describe('Compute Engine', () => {
    it('should add to estimate (Hurt Me Plenty)', async () => {
        const series = 'n1';
        const instanceType = '30GB';

        await MainPage.open();
        await MainPage.fillOutSearchInput('Google Cloud Platform Pricing Calculator');
        await browser.keys('Return');
        await MainPage.clickSearchResult();
        await MainPage.switchToFrame();

        await CalculatorPage.activateComputeEngine();  
        await CalculatorPage.inputNumberOfInstances(4); // 4
        await CalculatorPage.inputInstancesText('leave blank'); // leave blank
        await CalculatorPage.selectOperatingSystem(); // Free: Debian, CentOS, CoreOS, Ubuntu, or other User Provided OS
        await CalculatorPage.selectVMclass(); // Regular
        await CalculatorPage.selectSeries(series); // N1
        await CalculatorPage.selectInstanceType(instanceType); // n1-standard-8 (vCPUs: 8, RAM: 30 GB)
        // await CalculatorPage.selectAddGPus();
        // await CalculatorPage.selectLocalSSD(); // 2x375 Gb
        // await CalculatorPage.selectDatacenter(); // Frankfurt (europe-west3)
        // await CalculatorPage.selectCommitedUsage(); // 1 Year
        // await browser.pause(10000);
    })
})


