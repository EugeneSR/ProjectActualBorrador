import { ElementActions } from "../core/element-actions";
import { BasePage } from "./base.page";
import { MouseActions } from '../core/mouse-actions';


export class AddChartShopPage extends BasePage {

    /************Locators***************************/

    private optionsDresses: string = "(//a[@title='Dresses'])[2]";
    private categoryCasualDress: string = `//*[@id="block_top_menu"]/ul/li[2]/ul/li[1]`;
    private optionView: string = `//*[@id="center_column"]/ul/li/div/div[1]/div/a[1]/img`;
    private quantityDresses: string = "(//a[@data-field-qty='qty']//span)[2]";
    private optionSize: string = "//span[text()='S']/following-sibling::select";
    private optionColor: string = "#color_13";
    private buttonAddItem: string = "(//button[@type='submit']//span)[3]";
    private checkoutItems:string="//span[text()[normalize-space()='Proceed to checkout']]";

    private stateButton:string = "#id_state";
    private stateSelect:string = "/select[@id='id_state']//child::option[1]";
    
    


    constructor() {
        super();
    }

    async clickDress() {
        await MouseActions.hover(this.optionsDresses);
      
    }
    async clickDressAd() {
        await ElementActions.click(this.optionsDresses);
      
    }
    async selectCasualDress() {
        await MouseActions.firstClick(this.categoryCasualDress);
       
    }
    async viewDress() {
        await MouseActions.firstHover(this.optionView)
       
    }
    async viewCasualDressP() {
        await MouseActions.firstClick(this.optionView);
       
    }
    async clickQuantity(quantity: number) {
        let i = 1;
        for (i; i < quantity; i++) {
          await  ElementActions.click(this.quantityDresses);
        }
    }
    async selectSize(text: string) {
        await ElementActions.selectOption(this.optionSize, text);
    }
    async selectColor() {
        await ElementActions.click(this.optionColor);
    }
    async addItemDress() {
        await ElementActions.click(this.buttonAddItem);
    }
    async checkoutItem(){
        await ElementActions.click(this.checkoutItems);
    }
}
