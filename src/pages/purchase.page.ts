import { ElementActions } from "../core/element-actions";
import { BasePage } from "./base.page";

export class PurchasePage extends BasePage {

    /************Locators***************************/

    private checkout: string = "(//a[@title='Proceed to checkout']//span)[2]";
    private processCheckout: string = "//button[contains(@class,'button btn')]";
    //"//button[contains(@class,'button btn')]";
    //
    //Sig in
    private email: string = "#email";
    private password: string = "#passwd";
    private buttonSigIn: string = "#SubmitLogin";
    private buttonAdressCheckout: string ="//button[contains(@class,'button btn')]//span[1]";
    
    private AgreeTermss: string = "#cgv";
    private buttonShipping: string = "(//button[@type='submit']//span)[2]";
    private payment: string = `//*[@id="HOOK_PAYMENT"]/div[1]/div/p`;
    //   "//a[contains(.,'Pay by bank wire (order processing will be longer)')]"
    private confirmOrder: string = "(//button[@type='submit']//span)[2]";
    //message: string = "//p[@class='alert alert-success']";


    constructor() {
        super();
    }
    async clickConfirmAdress(){
        await ElementActions.click(this.processCheckout);
    }
    async clickCkeckout() {
        await ElementActions.click(this.checkout);

    }
    async loginPagePurchase(email: string, password: string) {
        await ElementActions.setText(this.email, email);
        await ElementActions.setText(this.password, password);
        await ElementActions.click(this.buttonSigIn);
    }

    async clickCheckoutPurchase() {
      
        await ElementActions.click(this.buttonAdressCheckout);
       

    }
    async clickChecAgreeTerms() {
        
        await ElementActions.check(this.AgreeTermss);
    }
    async clickShipping() {
        await ElementActions.click(this.buttonShipping);
       
    }
    //Pay: By Bank wire
    async pay() {
      
        await ElementActions.click(this.payment);
       
    }
    async confirmOrderShop() {
        await ElementActions.click(this.confirmOrder);

    }



}
