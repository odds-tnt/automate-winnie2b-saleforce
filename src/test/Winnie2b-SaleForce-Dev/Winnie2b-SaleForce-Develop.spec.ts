import { LoginPageSaleForce } from "../../page-object/login_page";
import { urlSaleForcecEnvDev } from "../../test-data/url-saleforce-dev/url-dev-saleforce";
import { Expect,test, } from "@playwright/test";
import { dataTest_Allassign } from "../../test-data/user-saleforce/user-saleforce-dev";

test.beforeEach(async ({ page }) => {
    await page.goto(urlSaleForcecEnvDev.saleForceLogInPage_DEV);
});

test.afterEach(async ({ page }) => {
    await page.close();
});

test.describe('ทดสอบหน้า Login Page ของระบบ Winnie2b SaleForce', async()=>{
    test('ทดสอบการเข้าสู่ระบบสำเร็จ(All Assignment)', async({page})=>{
        const loginpagesaleforce = new LoginPageSaleForce(page)
        await loginpagesaleforce.FillEmailForLoginWinnie2bSaleForce(dataTest_Allassign.Email_All)
        await loginpagesaleforce.FillPassWordForLoginWinnie2bSaleForce(dataTest_Allassign.password_All)
        await loginpagesaleforce.ClickSubmitForLoginWinnie2bSaleForce()
        await loginpagesaleforce.CheckLoginWinnie2bSaleForceSuccessForAllAssign()
    })

    test('ทดสอบการเข้าสู่ระบบสำเร็จ(My Assignment)', async({page})=>{
        const loginpagesaleforce = new LoginPageSaleForce(page)
        await loginpagesaleforce.FillEmailForLoginWinnie2bSaleForce(dataTest_Allassign.Email_My)
        await loginpagesaleforce.FillPassWordForLoginWinnie2bSaleForce(dataTest_Allassign.password_My)
        await loginpagesaleforce.ClickSubmitForLoginWinnie2bSaleForce()
        await loginpagesaleforce.CheckLoginWinnie2bSaleForceSuccessForMyAssign()
    })

    test('ทดสอบการแสดง Error เมื่อไม่ได้กรอกหรือไม่มี User', async({page})=>{
        const loginpagesaleforce = new LoginPageSaleForce(page)
        await loginpagesaleforce.FillEmailForLoginWinnie2bSaleForce(dataTest_Allassign.Email_Error)
        await loginpagesaleforce.ClickSubmitForLoginWinnie2bSaleForce()
        await loginpagesaleforce.CheckErrorWhenFillWrongUserOrEmthpyField()
    })    

    test('ทดสอบการแสดง Error เมื่อไม่ได้กรอกหรือไม่มี PassWord', async({page})=>{
        const loginpagesaleforce = new LoginPageSaleForce(page)
        await loginpagesaleforce.FillEmailForLoginWinnie2bSaleForce(dataTest_Allassign.Email_All)
        await loginpagesaleforce.ClickSubmitForLoginWinnie2bSaleForce()
        await loginpagesaleforce.CheckErrorWhenFillWrongPassWordOrEmthpyField()
    })    

    }
)