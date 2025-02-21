import { test } from "@playwright/test";
import { LoginPageSaleForce } from "../../page-object/LoginPage";
import { urlSaleForcecEnvUAT } from "../../test-data/url-saleforce/url-saleforce";
import { testData_allAssignment } from "../../test-data/user-saleforce/user-saleforce-dev";
import { AssignmentPage } from "../../page-object/AssignmentPage";

test.beforeEach(async ({ page }) => {
  await page.goto(urlSaleForcecEnvUAT.saleForceLogInPage_UAT);
});

test.afterEach(async ({ page }) => {
  await page.waitForTimeout(5000);
  await page.close();
});

test.describe("เข้าเยี่ยมลูกค้าของ TNT", async () => {
  test("เข้าเยี่ยมลูกค้าของ TNT โดยลูกค้าทำการสั่งซื้อสินค้า)", async ({
    page,
  }) => {
    const loginpagesaleforce = new LoginPageSaleForce(page);
    const assignmentPage = new AssignmentPage(page);
    await loginpagesaleforce.loginWinnie2bSaleForce(
      testData_allAssignment.email,
      testData_allAssignment.password
    );
    await loginpagesaleforce.checkLoginSuccessForAllAssignmentRole();
    await assignmentPage.goToAssignmentDetail();
    await assignmentPage.startVisit();
  });
});

//ยังติดเรื่อง permission location
