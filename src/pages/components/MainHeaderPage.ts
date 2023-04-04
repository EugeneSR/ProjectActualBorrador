
import { BasePage } from "../base.page";

class MainHeaderPage extends BasePage {

    // Locators    
    private iconName = `//a[@class="account"]//ancestor::span`;
    private successMessage: string = "//p[contains(@class, 'alert alert-success')]";

    constructor() {
        super();
    }

    async getElementText() {

        return this.driver.Page.textContent(this.iconName);
    }
    
    async showMessageSuccess() {
        return await this.driver.Page.innerText(this.successMessage)

    }
}

export const mainHeader = new MainHeaderPage();

