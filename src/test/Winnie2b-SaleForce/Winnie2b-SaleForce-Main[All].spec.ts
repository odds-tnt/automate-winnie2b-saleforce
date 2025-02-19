import { LoginPageSaleForce } from "../../page-object/login_page";
import { urlSaleForcecEnvDev, urlSaleForcecEnvUAT } from "../../test-data/url-saleforce/url-dev-saleforce";
import { Expect,test, } from "@playwright/test";
import { dataTest_Allassign } from "../../test-data/user-saleforce/user-saleforce-dev";
import { AddNewAssignment } from "../../page-object/add_newAssignment";
import { dataTest_VisitForm } from "../../test-data/DATA-VisitForm/data-visitForm";

test.beforeEach(async ({ page }) => {
    await page.goto(urlSaleForcecEnvUAT.saleForceLogInPage_UAT)
});

test.afterEach(async ({ page }) => {
    await page.waitForTimeout(5000)
    await page.close()
});

test.describe('ทดสอบระบบ Winnie2b SaleForce', async()=>{
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

    test('ทดสอบการเพิ่ม Visit Plan แบบ Manual(All Assignment)', async({page})=>{
        const loginpagesaleforce = new LoginPageSaleForce(page)
        const addNewAssignment = new AddNewAssignment(page)
        await loginpagesaleforce.FillEmailForLoginWinnie2bSaleForce(dataTest_Allassign.Email_All)
        await loginpagesaleforce.FillPassWordForLoginWinnie2bSaleForce(dataTest_Allassign.password_All)
        await loginpagesaleforce.ClickSubmitForLoginWinnie2bSaleForce()
        await loginpagesaleforce.CheckLoginWinnie2bSaleForceSuccessForAllAssign()
        await addNewAssignment.clickButtonAddAssignmentInHomePage()
        await addNewAssignment.selectAddNewForCreateVisitPlanManual()
        await addNewAssignment.selectStoreTypeInVisitPlanForm(dataTest_VisitForm.StoreType)
        await addNewAssignment.fillStoreNameInVisitPlanForm(dataTest_VisitForm.StoreName)
        await addNewAssignment.fillCustomerNameInVisitPlanForm(dataTest_VisitForm.CustomerName)
        await addNewAssignment.fillKnownStoreNameInVisitPlanForm(dataTest_VisitForm.KnowStroeName)
        await addNewAssignment.fillCustomerIDInVisitPlanForm(dataTest_VisitForm.CustomerID)
        await addNewAssignment.fillFirstNameInVisitPlanForm(dataTest_VisitForm.FirstName)
        await addNewAssignment.fillLastNameInVisitPlanForm(dataTest_VisitForm.LastName)
        await addNewAssignment.fillPhoneNumberInVisitPlanForm(dataTest_VisitForm.PhoneNumber)
        await addNewAssignment.fillSecondaryPhoneNumberInVisitPlanForm(dataTest_VisitForm.SecondaryPhoneNumber)
        await addNewAssignment.fillAddressInVisitPlanForm(dataTest_VisitForm.Address)
        await addNewAssignment.fillDistrictInVisitPlanForm(dataTest_VisitForm.District)
        await addNewAssignment.fillProvinceInVisitPlanForm(dataTest_VisitForm.Province)
        await addNewAssignment.fillPostCodeInVisitPlanForm(dataTest_VisitForm.PostCode)
        await addNewAssignment.fillLatitudeInVisitPlanForm(dataTest_VisitForm.Latitude)
        await addNewAssignment.fillLongitudeInVisitPlanForm(dataTest_VisitForm.Longitude)
        await addNewAssignment.SelectedWorkingDayInVisitPlanForm()
        await addNewAssignment.SelectStartTimeInVisitPlan()
        await addNewAssignment.SelectEndTimeInVisitPlan()
        await addNewAssignment.FillCustomerStatusInVisitPlan(dataTest_VisitForm.CustomerStatus)
        await addNewAssignment.SelectRegisteredDateInVisitPlan()
        await addNewAssignment.FillRegisteredByInVisitPlan(dataTest_VisitForm.RegisteredBy)
        await addNewAssignment.FillOutletMasterInVisitPlan(dataTest_VisitForm.OutletMaster)
        await addNewAssignment.FillSalesOfficeInVisitPlan(dataTest_VisitForm.SalesOffice)
        await addNewAssignment.FillClassInVisitPlan(dataTest_VisitForm.Class)
        await addNewAssignment.FillAutonomousInVisitPlan(dataTest_VisitForm.Autonomous)
        await addNewAssignment.FillSubtradeChannelIDInVisitPlan(dataTest_VisitForm.SubtradeChannelID)
        await addNewAssignment.FillFrequencyGroupOfRepeatsPurchasedInVisitPlan(dataTest_VisitForm.FrequencyGroupOfRepeatsPurchased)
        await addNewAssignment.FillVisitWeekInVisitPlan(dataTest_VisitForm.VisitWeek)
        await addNewAssignment.FillVisitFrequencyInVisitPlan(dataTest_VisitForm.VisitFrequency)
        await addNewAssignment.FillVisitEveryInVisitPlan(dataTest_VisitForm.VisitEvery)
        await addNewAssignment.FillCustomerTypeInVisitPlan(dataTest_VisitForm.CustomerType)
        await addNewAssignment.FillOwnerRoleInVisitPlan(dataTest_VisitForm.OwnerRole)
        await addNewAssignment.FillOwnerNameInVisitPlan(dataTest_VisitForm.OwnerName)
        await addNewAssignment.FillOwnerEmailInVisitPlan(dataTest_VisitForm.OwnerEmail)
        await addNewAssignment.FillVisitByInVisitPlan(dataTest_VisitForm.VisitBy)
        await addNewAssignment.FillSalesRouteInVisitPlan(dataTest_VisitForm.SalesRoute)
        await addNewAssignment.FillRDWeeksInVisitPlan(dataTest_VisitForm.RD_Weeks)
        await addNewAssignment.FillRDFrequencyInVisitPlan(dataTest_VisitForm.RD_Frequency)
        await addNewAssignment.FillRDEveryInVisitPlan(dataTest_VisitForm.RD_Every)
        await addNewAssignment.FillVisitMonthInVisitPlan(dataTest_VisitForm.VisitMonth)
        await addNewAssignment.ClickStartVisitPlan()

    })

    }
)