import { BasePage } from "../base.page";
import { ElementActions } from "../../core/element-actions";

class MainAddChartPage extends BasePage {

    // Locators    
    private successMessage: string = `//h2[text()[normalize-space()='Product successfully added to your shopping cart']]`;
    private quantityAdd: string = "(//span[@class='ajax_cart_quantity'])[1]";
   

    constructor() {
        super();
    }
    //Validations
    async showMessageSuccess() {
        return await this.driver.Page.locator(this.successMessage).innerText();
    }
    async quantity() {
        return await this.driver.Page.locator(this.quantityAdd).innerText();
    }
 

}

export const mainAddChartPage = new MainAddChartPage();