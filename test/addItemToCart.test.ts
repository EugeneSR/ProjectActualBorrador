import { mainAddChartPage } from "../src/pages/components/MainAddChartPage";
import { driverInstance } from "../src/core/driver";
import { AddChartShopPage } from "../src/pages/addChartShop.page";
import { LoginPage } from "../src/pages/login.page";
import dotenv from 'dotenv';

import { TESTDATA } from '../data.app';
dotenv.config({ path: `.env.test`, override: true });
declare const reporter:any;


describe('Feature My Store: Shopping Cart', () => {

    let addChartShopPage: AddChartShopPage;
    let loginPage: LoginPage;

    beforeAll(async () => {
        await driverInstance.startDriver();
        
        loginPage = new LoginPage();
        const url = String(process.env.URL);
        await loginPage.navigateTo(url);
        addChartShopPage = new AddChartShopPage();
        

    }, 50000);

    afterAll(async () => {
        await driverInstance.closeDriver();
    });

    it('Shopping Cart: items added to shopping cart', async () => {
        reporter
        .description("Login into http://automationpractice/index  ")  
        .story("BOND-102");
        await addChartShopPage.clickDress();
        await addChartShopPage.selectCasualDress();
        await addChartShopPage.viewDress();
        await addChartShopPage.viewCasualDressP();

        await addChartShopPage.clickQuantity(3); //Click--> quantity:enter only whole numbers

        await addChartShopPage.selectSize("L"); //Size--> "1" is S ; "2" is "M" ; "3" is "L" 
        await addChartShopPage.selectColor();

        await addChartShopPage.addItemDress();

        const screenshotBuffer = await driverInstance.Page.screenshot();
       reporter.addAttachment("Screenshot", screenshotBuffer, "image/png");

        //-----------Get cart success message--------------------------------
        const message = await mainAddChartPage.showMessageSuccess();

        await addChartShopPage.checkoutItem();


        //-----------Gets the total amount added to the cart--------------------------------
        const quantity = parseInt(await mainAddChartPage.quantity());
        
        //**********************EXPECT*************************************/

        expect(message).toContain("Product successfully added to your shopping cart");
        
       expect(quantity).toEqual(3);

        //**********************END *************************************/

    });

});