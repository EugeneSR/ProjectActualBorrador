import { BasePage } from "../base.page";
import { ElementActions } from "../../core/element-actions";

class MainPurchasePage extends BasePage {

    // Locators    
    private successMessage: string = "//p[@class='alert alert-success']";
    //private quantityAdd: string = "(//span[@class='ajax_cart_quantity'])[1]";
    private totalPrice: string ="//td[@class='price']//span[1]";
   

    constructor() {
        super();
    }
    //Validations
    async showMessageSuccess() {
        return await this.driver.Page.locator(this.successMessage).innerText();
    }

    // async quantity() {
    //     return await this.driver.Page.locator(this.quantityAdd).innerText();
    // }
     async totalPriceShop() {
        
        return await this.driver.Page.locator(this.totalPrice).textContent();
      
    }
 

}

export const mainPurchase = new MainPurchasePage();