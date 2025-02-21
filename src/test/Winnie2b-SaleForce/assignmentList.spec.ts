import { expect, Expect, test } from "@playwright/test";
import { LoginPageSaleForce } from "../../page-object/LoginPage";
import {
  urlSaleForcecEnvDev,
  urlSaleForcecEnvUAT,
} from "../../test-data/url-saleforce/url-saleforce";
import { testData_allAssignment } from "../../test-data/user-saleforce/user-saleforce-dev";
import { AssignmentPage } from "../../page-object/AssignmentPage";

test.beforeEach(async ({ page }) => {
  await page.goto(urlSaleForcecEnvUAT.saleForceLogInPage_UAT);
});

test.afterEach(async ({ page }) => {
  await page.waitForTimeout(5000);
  await page.close();
});

test.describe("เข้าหน้ารายการ Assignment", async () => {
  test("เข้าหน้ารายการ All Assignment)", async ({ page }) => {
    const loginpagesaleforce = new LoginPageSaleForce(page);
    const assignmentPage = new AssignmentPage(page);
    await loginpagesaleforce.FillEmailForLoginWinnie2bSaleForce(
      testData_allAssignment.email
    );
    await loginpagesaleforce.FillPassWordForLoginWinnie2bSaleForce(
      testData_allAssignment.password
    );
    await loginpagesaleforce.ClickSubmitForLoginWinnie2bSaleForce();
    await loginpagesaleforce.CheckLoginWinnie2bSaleForceSuccessForAllAssign();
    await assignmentPage.allAssignment();
  });

  test("เข้าหน้ารายการ Today Assignment)", async ({ page }) => {
    const loginpagesaleforce = new LoginPageSaleForce(page);
    const assignmentPage = new AssignmentPage(page);
    await loginpagesaleforce.FillEmailForLoginWinnie2bSaleForce(
      testData_allAssignment.email
    );
    await loginpagesaleforce.FillPassWordForLoginWinnie2bSaleForce(
      testData_allAssignment.password
    );
    await loginpagesaleforce.ClickSubmitForLoginWinnie2bSaleForce();
    await loginpagesaleforce.CheckLoginWinnie2bSaleForceSuccessForAllAssign();
    await assignmentPage.todayAssignment();
  });
});
