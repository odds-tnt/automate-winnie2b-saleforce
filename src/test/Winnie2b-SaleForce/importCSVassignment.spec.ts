import { test } from "@playwright/test";
import { LoginPageSaleForce } from "../../page-object/LoginPage";
import {
  urlSaleForcecEnvDev,
  urlSaleForcecEnvUAT,
} from "../../test-data/url-saleforce/url-saleforce";
import { testData_allAssignment } from "../../test-data/user-saleforce/user-saleforce-dev";
import { ImportCSVassignment } from "../../page-object/ImportCSVassignment";

test.beforeEach(async ({ page }) => {
  const loginpagesaleforce = new LoginPageSaleForce(page);
  await page.goto(urlSaleForcecEnvUAT.saleForceLogInPage_UAT);
  await loginpagesaleforce.loginWinnie2bSaleForce(
    testData_allAssignment.email,
    testData_allAssignment.password
  );
});

test.afterEach(async ({ page }) => {
  await page.waitForTimeout(5000);
  await page.close();
});

test.describe("ทดสอบระบบ Winnie2b SaleForce", async () => {
  test("ทดสอบการUploadFileCSV(All Assignment)", async ({ page }) => {
    const importCSVAssignment = new ImportCSVassignment(page);
    await importCSVAssignment.clickButtonAddAssignmentInHomePage();
    await importCSVAssignment.importCSVfileAssignment();
  });

  
});
