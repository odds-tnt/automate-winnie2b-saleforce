import { DarkSpaceVisitForm } from "../../page-object/DarkspaceVisitForm";
import { LoginPageSaleForce } from "../../page-object/LoginPage";
import { urlSaleForcecEnvUAT } from "../../test-data/url-saleforce/url-saleforce";
import { testData_allAssignment } from "../../test-data/user-saleforce/user-saleforce-dev";
import { test, expect } from "@playwright/test";
import { data_test_visit_form } from "../../test-data/Data-AssignmentForm/Data-VisitForm";

test.beforeEach(async ({ page }) => {
  const loginpagesaleforce = new LoginPageSaleForce(page);
  const darkSpaceVisitForm = new DarkSpaceVisitForm(page);
  await page.goto(urlSaleForcecEnvUAT.saleForceLogInPage_UAT);
  await loginpagesaleforce.loginWinnie2bSaleForce(
    testData_allAssignment.email,
    testData_allAssignment.password
  );
  await darkSpaceVisitForm.clickAllAssignmentButton();
  await darkSpaceVisitForm.clickDarkSpaceSelected();
  await darkSpaceVisitForm.clickStartVisitButton();
});

test.afterEach(async ({ page }) => {
  await page.waitForTimeout(3000);
  await page.close();
});

test.describe("ทดสอบการเพิ่มข้อมูล Visit Form ของ DarkSpace", async () => {
  test("กรณีเลือก ทำการสั่งซื้อสินค้า ", async ({ page }) => {
    const darkSpaceVisitForm = new DarkSpaceVisitForm(page);
    await darkSpaceVisitForm.clickSelected_PlaceOrderForProduct(
      data_test_visit_form.darkSpace_OrderCode
    );
  });

  test("กรณีเลือก ไม่สนใจ, ซื้อจากแพลตฟอร์มอื่น, เลือก Makro", async ({
    page,
  }) => {
    const darkSpaceVisitForm = new DarkSpaceVisitForm(page);
    await darkSpaceVisitForm.clickSelected_NotInterest_BuyOtherPlatForm_Makro();
  });

  test("กรณีเลือก ไม่สนใจ, ซื้อจากแพลตฟอร์มอื่น, เลือก Shopee", async ({
    page,
  }) => {
    const darkSpaceVisitForm = new DarkSpaceVisitForm(page);
    await darkSpaceVisitForm.clickSelected_NotInterest_BuyOtherPlatForm_Shopee();
  });

  test("กรณีเลือก ไม่สนใจ, ซื้อจากแพลตฟอร์มอื่น, เลือก Lazada", async ({
    page,
  }) => {
    const darkSpaceVisitForm = new DarkSpaceVisitForm(page);
    await darkSpaceVisitForm.clickSelected_NotInterest_BuyOtherPlatForm_Lazada();
  });

  test("กรณีเลือก ไม่สนใจ, ซื้อจากแพลตฟอร์มอื่น, เลือก Tiktok", async ({
    page,
  }) => {
    const darkSpaceVisitForm = new DarkSpaceVisitForm(page);
    await darkSpaceVisitForm.clickSelected_NotInterest_BuyOtherPlatForm_Tiktok();
  });

  test("กรณีเลือก ไม่สนใจ, ซื้อจากแพลตฟอร์มอื่น, เลือก Go WholeSale", async ({
    page,
  }) => {
    const darkSpaceVisitForm = new DarkSpaceVisitForm(page);
    await darkSpaceVisitForm.clickSelected_NotInterest_BuyOtherPlatForm_GoWholeSale();
  });

  test("กรณีเลือก ไม่สนใจ, ซื้อจากแพลตฟอร์มอื่น, เลือก อื่นๆ", async ({
    page,
  }) => {
    const darkSpaceVisitForm = new DarkSpaceVisitForm(page);
    await darkSpaceVisitForm.clickSelected_NotInterest_BuyOtherPlatForm_Other_FillReason();
  });

  test("กรณีเลือก ไม่สนใจ, ชอบการซื้อแบบเดิมมากกว่า, เลือก ร้านค้าส่งในพื้นที่", async ({
    page,
  }) => {
    const darkSpaceVisitForm = new DarkSpaceVisitForm(page);
    await darkSpaceVisitForm.clickselected_NotInterest_LikeOldBuy_LocalWholesale();
  });

  test("กรณีเลือก ไม่สนใจ, ชอบการซื้อแบบเดิมมากกว่า, เลือก ซื้อจากห้างสรรพสินค้า", async ({
    page,
  }) => {
    const darkSpaceVisitForm = new DarkSpaceVisitForm(page);
    await darkSpaceVisitForm.clickselected_NotInterest_LikeOldBuy_ByMall();
  });

  test("กรณีเลือก ไม่สนใจ, ชอบการซื้อแบบเดิมมากกว่า, เลือก ซื้อจากร้านค้าส่ง และห้างสรรพสินค้า", async ({
    page,
  }) => {
    const darkSpaceVisitForm = new DarkSpaceVisitForm(page);
    await darkSpaceVisitForm.clickselected_NotInterest_LikeOldBuy_WholesaleAndDepartmentStores();
  });

  test("กรณีเลือก ไม่สนใจ, เจ้าของร้านไม่มีสมาร์ทโฟน หรือใช้ไม่เป็น", async ({
    page,
  }) => {
    const darkSpaceVisitForm = new DarkSpaceVisitForm(page);
    await darkSpaceVisitForm.clickselected_OwnerNotHaveSmartPhoneOrNotUse();
  });

  test("กรณีเลือก ไม่สนใจ, สินค้าใน Winnie2b ราคาสูงกว่าที่อื่น ไม่สามารถสั่งซื้อได้", async ({
    page,
  }) => {
    const darkSpaceVisitForm = new DarkSpaceVisitForm(page);
    await darkSpaceVisitForm.clickselected_Winnie2bPriceTooHigh();
  });

  test("กรณีเลือก ไม่สนใจ, ไม่มั่นใจในการใช้งานแอป", async ({ page }) => {
    const darkSpaceVisitForm = new DarkSpaceVisitForm(page);
    await darkSpaceVisitForm.clickselected_NotConfidentUsingApp();
  });

  test("กรณีเลือก ไม่สนใจ, สั่งซื้อสินค้าไม่ถึงขั้นต่ำ", async ({ page }) => {
    const darkSpaceVisitForm = new DarkSpaceVisitForm(page);
    await darkSpaceVisitForm.clickselected_OrderBelowMinimum();
  });

  test("กรณีเลือก ไม่สนใจ, สินค้าเต็มสต็อค", async ({ page }) => {
    const darkSpaceVisitForm = new DarkSpaceVisitForm(page);
    await darkSpaceVisitForm.clickselected_IsStockFull();
  });

  test("กรณีเลือก ไม่สนใจ, อื่นๆ, เหตุผล", async ({ page }) => {
    const darkSpaceVisitForm = new DarkSpaceVisitForm(page);
    await darkSpaceVisitForm.clickselected_Other_FillReason();
  });

  test("กรณีเลือก เจ้าของไม่สะดวกคุย / ไม่เจอเจ้าของ", async ({ page }) => {
    const darkSpaceVisitForm = new DarkSpaceVisitForm(page);
    await darkSpaceVisitForm.clickselected_OwnerCurrentlyUnavailableOrNotMeet();
  });

  test("กรณีเลือก ร้านปิดชั่วคราว", async ({ page }) => {
    const darkSpaceVisitForm = new DarkSpaceVisitForm(page);
    await darkSpaceVisitForm.clickselected_StoreCloseTemporarily();
  });

  test("กรณีเลือก ร้านปิดถาวร", async ({ page }) => {
    const darkSpaceVisitForm = new DarkSpaceVisitForm(page);
    await darkSpaceVisitForm.clickselected_IsStoreOutOfBusiness();
  });

  test("กรณีเลือก รอตัดสินใจ / รอปรึกษาเจ้าของร้าน", async ({ page }) => {
    const darkSpaceVisitForm = new DarkSpaceVisitForm(page);
    await darkSpaceVisitForm.clickselected_WaitForDecisionOrConsultOwner();
  });

  test("กรณีเลือก ไม่พบร้านค้าตามพิกัด", async ({ page }) => {
    const darkSpaceVisitForm = new DarkSpaceVisitForm(page);
    await darkSpaceVisitForm.clickselected_NotFoundStoreAtLocation();
  });
});
