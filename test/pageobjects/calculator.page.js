const Page = require('./page');

class CalculatorPage extends Page {
    // async activateComputeEngine() {
    //     await $('//div[@class="tab-holder gke-standard"]//div[@class="presets-buttons layout-sm-column layout-align-center-center layout-column"]').click();
    // }
    get frame() {return $('//iframe[@name="goog_1598225198"]')}
    
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

    async selectSeries() {
        await $('md-select-value#select_value_label_85').click();
        //await $('md-option#select_option_201').click();
        await $('md-option[value="n1"] div:nth-child(1)').click();
    }

    async selectInstacneType() {
        await $('md-select-value#select_value_label_86').click();
        await $('md-option#select_option_516').click();
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
