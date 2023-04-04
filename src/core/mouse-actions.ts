import { driverInstance } from './driver';
export class MouseActions {

    static async click(locator: string) {
        await driverInstance.Page.waitForSelector(locator);
        await driverInstance.Page.click(locator);
    }
    static async hover(locator: string){
        await driverInstance.Page.waitForSelector(locator);
        await driverInstance.Page.hover(locator);
    }
    static async firstHover(locator: string){
        await driverInstance.Page.waitForSelector(locator);
        await driverInstance.Page.locator(locator).first().hover();
        
    }
    static async firstClick(locator: string){
        await driverInstance.Page.waitForSelector(locator);
        await driverInstance.Page.locator(locator).first().click();
        
    }



}