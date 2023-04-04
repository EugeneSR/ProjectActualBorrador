import { mainAddChartPage } from "../src/pages/components/MainAddChartPage";
import { driverInstance } from "../src/core/driver";
import { AddChartShopPage } from "../src/pages/addChartShop.page";
import dotenv from 'dotenv';

import { TESTDATA } from '../data.app';
dotenv.config({ path: `.env.test`, override: true });

describe('Feature My Store: Shopping Cart', () => {

    let addChartShopPage: AddChartShopPage;
    //let purchasePage: PurchasePage;

    beforeAll(async () => {
        await driverInstance.startDriver();
        addChartShopPage = new AddChartShopPage();

    }, 50000);

    afterAll(async () => {
        await driverInstance.closeDriver();
    });

    it('Go To Page', async () => {
        const url = String(process.env.URL);
        await addChartShopPage.navigateTo(url);
    });

    it('Shopping Cart: items added to shopping cart', async () => {

        await addChartShopPage.clickDress();
        await addChartShopPage.selectCasualDress();
        await addChartShopPage.viewDress();
        await addChartShopPage.viewCasualDressP();

        await addChartShopPage.clickQuantity(3); //Click--> quantity:enter only whole numbers

        await addChartShopPage.selectSize("L"); //Size--> "1" is S ; "2" is "M" ; "3" is "L" 
        await addChartShopPage.selectColor();
        await addChartShopPage.addItemDress();

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