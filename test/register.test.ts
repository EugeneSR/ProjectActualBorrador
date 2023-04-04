import { driverInstance } from "../src/core/driver";
import { RegisterPage } from "../src/pages/register.page";
import { TESTDATA } from "../data.app";
import dotenv from 'dotenv';
import { mainHeader } from "../src/pages/components/MainHeaderPage";
dotenv.config({ path: `.env.test`, override: true });

describe('Feature My Store: Register Account', () => {

    let registerPage: RegisterPage;

    beforeAll(async () => {
        await driverInstance.startDriver();
        registerPage = new RegisterPage();

    }, 50000);

    afterAll(async () => {
        await driverInstance.closeDriver();
    });

    it('Go To Page', async () => {
        const url = String(process.env.URL);
        await registerPage.navigateTo(url);
    });

    it('Register: the user registers successfully', async () => {

        await registerPage.clickLink();  //Select icon Login, but option register

        await registerPage.registerEmail(TESTDATA.email);

        await registerPage.clickButtonValidateEmail(); //

        await registerPage.createInformationAccount(TESTDATA.gender, TESTDATA.name, TESTDATA.lastName, TESTDATA.password
            , TESTDATA.day, TESTDATA.month, TESTDATA.year);

        await registerPage.clickCreateAccountButton();

        const message = await mainHeader.showMessageSuccess();
 
       
    
        await registerPage.showInformation();

        //**********************EXPECT*************************************/
        expect(message).toEqual(" Your account has been created.");

        //**********************END *************************************/

    });

});