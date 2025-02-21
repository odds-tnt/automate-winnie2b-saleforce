import { test } from "@playwright/test";
import { urlSaleForcecEnvDev, urlSaleForcecEnvUAT } from "../../test-data/url-saleforce/url-saleforce";
import { LoginPageSaleForce } from "../../page-object/LoginPage";
import {
  testData_myAssignment,
  testData_allAssignment,
  testData_invalid,
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
    await loginpagesaleforce.FillEmailForLoginWinnie2bSaleForce(
      testData_allAssignment.email
    );
    await loginpagesaleforce.FillPassWordForLoginWinnie2bSaleForce(
      testData_allAssignment.password
    );
    await loginpagesaleforce.ClickSubmitForLoginWinnie2bSaleForce();
    await loginpagesaleforce.CheckLoginWinnie2bSaleForceSuccessForAllAssign();
  });

  test("เข้าสู่ระบบสำเร็จ(My Assignment)", async ({ page }) => {
    const loginpagesaleforce = new LoginPageSaleForce(page);
    await loginpagesaleforce.FillEmailForLoginWinnie2bSaleForce(
      testData_myAssignment.email
    );
    await loginpagesaleforce.FillPassWordForLoginWinnie2bSaleForce(
      testData_myAssignment.password
    );
    await loginpagesaleforce.ClickSubmitForLoginWinnie2bSaleForce();
    await loginpagesaleforce.CheckLoginWinnie2bSaleForceSuccessForMyAssign();
  });

  test("เข้าสู่ระบบไม่สำเร็จ เมื่อกรอก Email ไม่ถูกต้อง", async ({ page }) => {
    const loginpagesaleforce = new LoginPageSaleForce(page);
    await loginpagesaleforce.FillEmailForLoginWinnie2bSaleForce(
      testData_invalid.email
    );
    await loginpagesaleforce.FillPassWordForLoginWinnie2bSaleForce(
      testData_allAssignment.password
    );
    await loginpagesaleforce.ClickSubmitForLoginWinnie2bSaleForce();
    await loginpagesaleforce.checkEmailOrPasswordInvalid();
  });

  test("เข้าสู่ระบบไม่สำเร็จ เมื่อกรอก Password ไม่ถูกต้อง", async ({
    page,
  }) => {
    const loginpagesaleforce = new LoginPageSaleForce(page);
    await loginpagesaleforce.FillEmailForLoginWinnie2bSaleForce(
      testData_allAssignment.email
    );
    await loginpagesaleforce.FillPassWordForLoginWinnie2bSaleForce(
      testData_invalid.password
    );
    await loginpagesaleforce.ClickSubmitForLoginWinnie2bSaleForce();
    await loginpagesaleforce.checkEmailOrPasswordInvalid();
  });

  test("เข้าสู่ระบบไม่สำเร็จ เมื่อไม่กรอก Email", async ({ page }) => {
    const loginpagesaleforce = new LoginPageSaleForce(page);
    await loginpagesaleforce.FillPassWordForLoginWinnie2bSaleForce(
      testData_allAssignment.password
    );
    await loginpagesaleforce.ClickSubmitForLoginWinnie2bSaleForce();
    await loginpagesaleforce.checkEmailIsEmpty();
  });

  test("เข้าสู่ระบบไม่สำเร็จ เมื่อไม่กรอก Password", async ({ page }) => {
    const loginpagesaleforce = new LoginPageSaleForce(page);
    await loginpagesaleforce.FillEmailForLoginWinnie2bSaleForce(
      testData_allAssignment.email
    );
    await loginpagesaleforce.ClickSubmitForLoginWinnie2bSaleForce();
    await loginpagesaleforce.checkPasswordIsEmpty();
  });
});
