import { BasePage } from "./base.page";
import { ElementActions } from "../core/element-actions";

export class RegisterPage extends BasePage {

    //---------Locators--------------------------
    
    private linkRegister: string = ".login";
    private emailRegisteAccount: string = "#email_create";
    private buttonValidateAccount: string = "#SubmitCreate";
    private gendersMrs: string="#id_gender2";
    private genderMr:string ="#id_gender1";
    private firstName: string = "#customer_firstname";
    private lastName: string = "#customer_lastname";
    private email: string = "#email";
    private password: string = "#passwd";
    private day: string = "#days";
    private month: string = "#months";
    private year: string = "#years";
    private newsletter: string = "#newsletter";
    private offers: string = "#optin";
    private buttonRegisterAccount: string = "#submitAccount";
    private buttonPersonalInformation: string = "//a[@title='View my customer account']//span[1]";


    constructor() {
        super();
    }
    async createInformationAccount(gender: string, name: string, lastName: string, password: string, day: string, month: string, year: string) {
        if (gender === 'Mr') {
            await ElementActions.click(this.genderMr);

        } else if (gender === 'Mrs') {

            await ElementActions.click(this.gendersMrs);
        }
        await ElementActions.setText(this.firstName, name);
        await ElementActions.setText(this.lastName, lastName);
        await ElementActions.click(this.email);
        await ElementActions.setText(this.password, password);
        await ElementActions.selectOptionByValue(this.day, day);
        await ElementActions.selectOptionByValue(this.month, month);
        await ElementActions.selectOptionByValue(this.year, year);
        await ElementActions.check(this.newsletter); //is checked for default
        await ElementActions.check(this.offers);  //is checked for default 
    }

    async clickCreateAccountButton() {
        await ElementActions.click(this.buttonRegisterAccount);

    }
    async showInformation() {
        await ElementActions.click(this.buttonPersonalInformation);
    }
  
    async clickLink() {
        await ElementActions.click(this.linkRegister);
    }
    async registerEmail(text: string) {

        await ElementActions.setText(this.emailRegisteAccount, text);
    }
    async clickButtonValidateEmail() {
        await ElementActions.click(this.buttonValidateAccount);
    }

};