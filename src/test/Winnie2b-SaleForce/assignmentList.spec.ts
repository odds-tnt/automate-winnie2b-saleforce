import { test } from "@playwright/test";
import { LoginPageSaleForce } from "../../page-object/LoginPage";
import { urlSaleForcecEnvUAT } from "../../test-data/url-saleforce/url-saleforce";
import { testData_allAssignment } from "../../test-data/user-saleforce/user-saleforce-dev";
import { AssignmentList } from "../../page-object/AssignmentList";

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
    const assignmentList = new AssignmentList(page);
    await loginpagesaleforce.loginWinnie2bSaleForce(
      testData_allAssignment.email,
      testData_allAssignment.password
    );
    await assignmentList.allAssignment();
  });

  test("เข้าหน้ารายการ Today Assignment)", async ({ page }) => {
    const loginpagesaleforce = new LoginPageSaleForce(page);
    const assignmentList = new AssignmentList(page);
    await loginpagesaleforce.loginWinnie2bSaleForce(
      testData_allAssignment.email,
      testData_allAssignment.password
    );
    await assignmentList.todayAssignment();
  });
});
