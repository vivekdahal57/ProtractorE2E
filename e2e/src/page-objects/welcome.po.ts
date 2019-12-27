import { by, element } from 'protractor';
import { BasePage } from './base.po';

export class Welcome extends BasePage {
    constructor() {
        super({});
        this.elements = {
            // welcome page
            viewRAPSButton: element(by.xpath('//button[contains(text(),\'View RAPS\')]')),
            viewEDSButton: element(by.xpath('//button[contains(text(),\'View EDS\')]')),
        };
    }

    /**
     * select RAPS option
     * @returns Promise
     */
    async viewRAPSCurrentPage() {
        await this.click(this.elements.viewRAPSButton);
        await this.waitForMilliSeconds(500);
    }

    /**
     * select EDS option
     * @returns Promise
     */
    async viewEDSCurrentPage() {
        await this.click(this.elements.viewEDSButton);
        await this.waitForMilliSeconds(500);
    }
}
