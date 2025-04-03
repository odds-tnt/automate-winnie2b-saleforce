import { test } from "@playwright/test";
import { LoginPageSaleForce } from "../../page-object/LoginPage";
import { urlSaleForcecEnvUAT } from "../../test-data/url-saleforce/url-saleforce";
import { testData_allAssignment } from "../../test-data/user-saleforce/user-saleforce-dev";
import { LeadList } from "../../page-object/LeadList";
import { AddLead } from "../../page-object/AddLead";

test.beforeEach(async ({ page }) => {
  await page.goto(urlSaleForcecEnvUAT.saleForceLogInPage_UAT);
});

test.afterEach(async ({ page }) => {
  await page.waitForTimeout(5000);
  await page.close();
});

test.describe("เข้าเยี่ยมร้านค้าใหม่", async () => {
  test("เข้าเยี่ยมร้านค้าใหม่ ลงทะเบียนแล้ว)", async ({
    page,
  }) => {
    const loginpagesaleforce = new LoginPageSaleForce(page);
    const displayLead = new LeadList(page);
    const addLead = new AddLead(page);
    await loginpagesaleforce.loginWinnie2bSaleForce(
      testData_allAssignment.email,
      testData_allAssignment.password
    );
    await loginpagesaleforce.checkLoginSuccessForAllAssignmentRole();
    await displayLead.leadListPage();
    await displayLead.leadInfoPage();
    await addLead.fillLeadInfo();
    await addLead.selectRegistered();
    await addLead.selectOrdered();
    await addLead.clickSubmitButton();
  });
})
