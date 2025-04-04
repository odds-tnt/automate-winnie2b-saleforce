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
  test("เข้าเยี่ยมร้านค้าใหม่: ลงทะเบียนและสั่งซื้อสินค้าแล้ว)", async ({
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

  test("เข้าเยี่ยมร้านค้าใหม่: ลงทะเบียน แต่ไม่สะดวกทำการสั่งซื้อในช่วงเวลาเข้าเยี่ยม )", async ({
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
    await addLead.selectInconvenient();
    await addLead.clickSubmitButton();
  });

  test("เข้าเยี่ยมร้านค้าใหม่: ยังไม่ลงทะเบียนและรอตัดสินใจ )", async ({
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
    await addLead.selectNotRegistered();
    await addLead.selectWaittingForDecision();
    await addLead.clickSubmitButton();
  });

  test("เข้าเยี่ยมร้านค้าใหม่: ยังไม่ลงทะเบียน เจ้าของร้านไม่อยู่ )", async ({
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
    await addLead.selectNotRegistered();
    await addLead.selectNotFoundOwnerBtn();
    await addLead.clickSubmitButton();
  });

  test("เข้าเยี่ยมร้านค้าใหม่: ยังไม่ลงทะเบียน ไม่สะดวกคุย )", async ({
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
    await addLead.selectNotRegistered();
    await addLead.selectNotConvienientToTalk();
    await addLead.clickSubmitButton();
  });

  test("เข้าเยี่ยมร้านค้าใหม่: ยังไม่ลงทะเบียน ไม่สนใจ )", async ({ page }) => {
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
    await addLead.selectNotRegistered();
    await addLead.selectNotInterested();
    await addLead.clickSubmitButton();
  });
});
