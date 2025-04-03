import { test } from "@playwright/test";
import { urlSaleForcecEnvUAT } from "../../test-data/url-saleforce/url-saleforce";
import { LoginPageSaleForce } from "../../page-object/LoginPage";
import {
  testData_myAssignment,
  testData_allAssignment,
  testData_invalid,
  testData_empty,
} from "../../test-data/user-saleforce/user-saleforce-dev";

test.beforeEach(async ({ page }) => {
  await page.goto(urlSaleForcecEnvUAT.saleForceLogInPage_UAT);
});

test.afterEach(async ({ page }) => {
  await page.waitForTimeout(5000);
  await page.close();
});

test.describe("เข้าสู่ระบบ Winnie2b SaleForce", async () => {
  test("เข้าสู่ระบบสำเร็จ(All Assignment)", async ({ page }) => {
    const loginpagesaleforce = new LoginPageSaleForce(page);
    await loginpagesaleforce.loginWinnie2bSaleForce(
      testData_allAssignment.email,
      testData_allAssignment.password
    );
    await loginpagesaleforce.checkLoginSuccessForAllAssignmentRole();
  });

  test("เข้าสู่ระบบสำเร็จ(My Assignment)", async ({ page }) => {
    const loginpagesaleforce = new LoginPageSaleForce(page);
    await loginpagesaleforce.loginWinnie2bSaleForce(
      testData_myAssignment.email,
      testData_myAssignment.password
    );
    await loginpagesaleforce.checkLoginSuccessForMyAssignmentRole();
  });

  test("เข้าสู่ระบบไม่สำเร็จ เมื่อกรอก Email ไม่ถูกต้อง", async ({ page }) => {
    const loginpagesaleforce = new LoginPageSaleForce(page);
    await loginpagesaleforce.loginWinnie2bSaleForce(
      testData_invalid.email,
      testData_allAssignment.password
    );
    await loginpagesaleforce.checkEmailOrPasswordInvalid();
  });

  test("เข้าสู่ระบบไม่สำเร็จ เมื่อกรอก Password ไม่ถูกต้อง", async ({
    page,
  }) => {
    const loginpagesaleforce = new LoginPageSaleForce(page);
    await loginpagesaleforce.loginWinnie2bSaleForce(
      testData_allAssignment.email,
      testData_invalid.password
    );
    await loginpagesaleforce.checkEmailOrPasswordInvalid();
  });

  test("เข้าสู่ระบบไม่สำเร็จ เมื่อไม่กรอก Email", async ({ page }) => {
    const loginpagesaleforce = new LoginPageSaleForce(page);
    await loginpagesaleforce.loginWinnie2bSaleForce(
      testData_empty.email,
      testData_allAssignment.password
    );
    await loginpagesaleforce.checkEmailIsEmpty();
  });

  test("เข้าสู่ระบบไม่สำเร็จ เมื่อไม่กรอก Password", async ({ page }) => {
    const loginpagesaleforce = new LoginPageSaleForce(page);
    await loginpagesaleforce.loginWinnie2bSaleForce(
      testData_allAssignment.email,
      testData_empty.password
    );
    await loginpagesaleforce.checkPasswordIsEmpty();
  });
});
