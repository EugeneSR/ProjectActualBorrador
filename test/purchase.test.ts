import { mainAddChartPage } from "../src/pages/components/MainAddChartPage";
import { driverInstance } from "../src/core/driver";
import { AddChartPage } from "../src/pages/addChart.page";
import { PurchasePage } from '../src/pages/purchase.page';
import { mainPurchase } from '../src/pages/components/MainPurchasePage';
//import { TESTDATA } from '../data.app';
import { LoginPage } from "../src/pages/login.page";
import dotenv from 'dotenv';

dotenv.config({ path: `.env.test`, override: true });

describe('Feature My Stores: Shopping Cart with ', () => {

    let addChartPage: AddChartPage;
    let purchasePage: PurchasePage;
    let loginPage: LoginPage;


    beforeAll(async () => {

        await driverInstance.startDriver();
        addChartPage = new AddChartPage();
        purchasePage = new PurchasePage();
        loginPage = new LoginPage();
        const url = String(process.env.URL);
        await loginPage.navigateTo(url);

    }, 50000);

    afterAll(async () => {
        await driverInstance.closeDriver();
    });

    it('Shopping Cart: items added to shopping items and shp ', async () => {

        await addChartPage.clickDress();
        await addChartPage.selectCasualDress();
        await addChartPage.viewDress();
        await addChartPage.viewCasualDressP();

        await addChartPage.clickQuantity(1); //Click--> quantity:enter only whole numbers

        await addChartPage.selectSize("L"); //Size--> "1" is S ; "2" is "M" ; "3" is "L" 
        await addChartPage.selectColor();
        await addChartPage.addItemDress();

        //-----------Get cart success message--------------------------------
        const message = await mainAddChartPage.showMessageSuccess();

        await addChartPage.checkoutItem();

        //-----------Gets the total amount added to the cart--------------------------------
        const quantity = parseInt(await mainAddChartPage.quantity());

        //**********************EXPECT*************************************/

        expect(message).toContain("Product successfully added to your shopping cart");

        expect(quantity).toEqual(1);

        /**********************END *************************************/

        await purchasePage.clickCkeckout();
        const email = String(process.env.EMAIL); //Parse of variables
        await loginPage.setEmail(email);
        const password = String(process.env.PASS); //Parse of variables
        await loginPage.setPassword(password);
        await loginPage.clickLogin();
        await purchasePage.clickConfirmAdress();
        await purchasePage.clickChecAgreeTerms();
        await purchasePage.clickShipping(); //conseguir la informacion del total de venta

        const totalPrice = await mainPurchase.totalPriceShop();
        //**********************EXPECT*************************************/
        expect(totalPrice).toEqual("$33.00");
        /**********************END *************************************/

        await purchasePage.pay();
        await purchasePage.confirmOrderShop();
        const messagePurchase = await mainPurchase.showMessageSuccess();

        //**********************EXPECT*************************************/
        expect(messagePurchase).toContain("Your order on My Store is complete");
        /**********************END *************************************/

    });

});
