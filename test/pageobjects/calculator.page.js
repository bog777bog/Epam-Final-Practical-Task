const Page = require('./page');

class CalculatorPage extends Page {
    // async activateComputeEngine() {
    //     await $('//div[@class="tab-holder gke-standard"]//div[@class="presets-buttons layout-sm-column layout-align-center-center layout-column"]').click();
    // }
    get frame() { return $('//iframe[@name="goog_1598225198"]')}
    
    async activateComputeEngine() {
        await $('(//div[@title="Compute Engine"])[1]').click();
      }

    async inputNumberOfInstances(num) {
        await $('input#input_90').setValue(num);
    }

    async inputInstancesText(text) {
        await $('input#input_91').addValue(text);
    }

    async selectOperatingSystem() {
        await $('md-select-value#select_value_label_82').click()
        await $('md-option#select_option_92').click()
    }

    async selectVMclass() {
        await $('md-select-value#select_value_label_83').click();
        await $('md-option#select_option_105').click();
    }

    async selectSeries(series) {
        await browser.pause(500); // need for stability
        await $("//md-select[@placeholder = 'Series']").click();
        await browser.pause(500); // need for stability
        await $(`md-option[value="${series}"] div:nth-child(1)`).click();
    }

    async selectInstanceType(ram) {
        await browser.pause(500); // need for stability
        await $('md-select[placeholder="Instance type"]').click();
        await browser.pause(500); // need for stability
        await $(`//md-option[contains(., '${ram}')]`).click();
    }

    async selectAddGPus() {
        await $('//md-checkbox[@aria-label="Add GPUs"][1]').click();
    }

    async selectLocalSSD() {
        await $('md-select-value#select_value_label_422').click();
        await $('md-option#select_option_449').click();
    }

    async selectDatacenter() {
        await $('md-select-value#select_value_label_88').click();
        await $('md-option#select_option_228').click();
    }

    async selectCommitedUsage() {
        await $('md-select-value#select_value_label_89').click();
        await $('md-option#select_option_128').click();
    }

    open () {
        return super.open('products/calculator');
    }
}

module.exports = new CalculatorPage();
