import { test } from "@playwright/test";
import { LoginPageSaleForce } from "../../page-object/LoginPage";
import { testData_allAssignment } from "../../test-data/user-saleforce/user-saleforce-dev";
import { dataTestAssignmentForm } from "../../test-data/Data-AssignmentForm/Data-AssignmentForm";
import {
  urlSaleForcecEnvDev,
  urlSaleForcecEnvUAT,
} from "../../test-data/url-saleforce/url-saleforce";
import { EditAssignment } from "../../page-object/EditAssignment";
import { OwnerEmail } from "../../test-data/Data-AssignmentForm/Edit-dataForm";

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
  test("ทดสอบการ Edit Assignment", async ({ page }) => {
    const editAssignment = new EditAssignment(page);
    await editAssignment.ClickViewAssignmentShowAll();
    await editAssignment.SearchAssignment(dataTestAssignmentForm.StoreName);
    await page.waitForTimeout(3000);
    await editAssignment.SelectAssignment();
    await editAssignment.ClickEditAssignment();
    await editAssignment.EditVisitDate();
    await editAssignment.EditOwnerEmail(OwnerEmail.Email);
    await editAssignment.ClickSaveEdit();
    await editAssignment.CheckEditVisitAssignmentSuccess();
  });

  test("ทดสอบการ Edit Email ที่ไม่มีในระบบ", async ({ page }) => {
    const editAssignment = new EditAssignment(page);
    await editAssignment.ClickViewAssignmentShowAll();
    await editAssignment.SearchAssignment(dataTestAssignmentForm.StoreName);
    await page.waitForTimeout(3000);
    await editAssignment.SelectAssignment();
    await editAssignment.ClickEditAssignment();
    await editAssignment.EditErrorOwnerEmail(OwnerEmail.Email_Error);
  });
});
