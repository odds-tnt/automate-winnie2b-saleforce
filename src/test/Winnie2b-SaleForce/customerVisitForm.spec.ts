import { test } from "@playwright/test";
import { LoginPageSaleForce } from "../../page-object/LoginPage";
import { urlSaleForcecEnvUAT } from "../../test-data/url-saleforce/url-saleforce";
import { testData_allAssignment } from "../../test-data/user-saleforce/user-saleforce-dev";
import { AssignmentList } from "../../page-object/AssignmentList";
import { VisitFormPage } from "../../page-object/CustomerVisitForm";
import { AssignmentDetail } from "../../page-object/AssignmentDetail";


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
    const assignmentList = new AssignmentList(page);
    const assignmentDetail = new AssignmentDetail(page);
    const visitFormPage = new VisitFormPage(page);
    await loginpagesaleforce.loginWinnie2bSaleForce(
      testData_allAssignment.email,
      testData_allAssignment.password
    );
    await loginpagesaleforce.checkLoginSuccessForAllAssignmentRole();
    await assignmentList.goToCustomerAssignmentDetail();
    await assignmentDetail.startVisit();
    await visitFormPage.selectVisitChoiceOrderProduct();
    await visitFormPage.clickSubmitButton();
  });

  test("เข้าเยี่ยมลูกค้าของ TNT โดยลูกค้าไม่สะดวกทำการสั่งซื้อในช่วงเวลาเข้าเยี่ยม-การส่งมอบที่ไม่ดีในอดีต)", async ({
    page,
  }) => {
    const loginpagesaleforce = new LoginPageSaleForce(page);
    const assignmentList = new AssignmentList(page);
    const assignmentDetail = new AssignmentDetail(page);
    const visitFormPage = new VisitFormPage(page);
    await loginpagesaleforce.loginWinnie2bSaleForce(
      testData_allAssignment.email,
      testData_allAssignment.password
    );
    await loginpagesaleforce.checkLoginSuccessForAllAssignmentRole();
    await assignmentList.goToAssignmentDetail();
    await assignmentDetail.startVisit();
    await visitFormPage.selectVisitChoiceNotInterested();
    await visitFormPage.selectVisitChoiceBadDelivered();
    await visitFormPage.clickSubmitButton();
  });

  test("เข้าเยี่ยมลูกค้าของ TNT โดยลูกค้าไม่สะดวกทำการสั่งซื้อในช่วงเวลาเข้าเยี่ยม-ซื้อจากห้างสรรพสินค้า)", async ({
    page,
  }) => {
    const loginpagesaleforce = new LoginPageSaleForce(page);
    const assignmentList = new AssignmentList(page);
    const assignmentDetail = new AssignmentDetail(page);
    const visitFormPage = new VisitFormPage(page);
    await loginpagesaleforce.loginWinnie2bSaleForce(
      testData_allAssignment.email,
      testData_allAssignment.password
    );
    await loginpagesaleforce.checkLoginSuccessForAllAssignmentRole();
    await assignmentList.goToAssignmentDetail();
    await assignmentDetail.startVisit();
    await visitFormPage.selectVisitChoiceNotInterested();
    await visitFormPage.selectVisitChoiceBuyFromDepartmentStore();
    await visitFormPage.clickSubmitButton();
  });

  test("เข้าเยี่ยมลูกค้าของ TNT โดยลูกค้าไม่สะดวกทำการสั่งซื้อในช่วงเวลาเข้าเยี่ยม-ซื้อจากร้านค้าส่งในพื้้นที่)", async ({
    page,
  }) => {
    const loginpagesaleforce = new LoginPageSaleForce(page);
    const assignmentList = new AssignmentList(page);
    const assignmentDetail = new AssignmentDetail(page);
    const visitFormPage = new VisitFormPage(page);
    await loginpagesaleforce.loginWinnie2bSaleForce(
      testData_allAssignment.email,
      testData_allAssignment.password
    );
    await loginpagesaleforce.checkLoginSuccessForAllAssignmentRole();
    await assignmentList.goToAssignmentDetail();
    await assignmentDetail.startVisit();
    await visitFormPage.selectVisitChoiceNotInterested();
    await visitFormPage.selectVisitChoiceBuyFromStockistInArea();
    await visitFormPage.clickSubmitButton();
  });

  test("เข้าเยี่ยมลูกค้าของ TNT โดยลูกค้าไม่สะดวกทำการสั่งซื้อในช่วงเวลาเข้าเยี่ยม-สินค้าในวาบิราคาสูงกว่าที่อื่น ไม่สามารถสั่งซื้อได้)", async ({
    page,
  }) => {
    const loginpagesaleforce = new LoginPageSaleForce(page);
    const assignmentList = new AssignmentList(page);
    const assignmentDetail = new AssignmentDetail(page);
    const visitFormPage = new VisitFormPage(page);
    await loginpagesaleforce.loginWinnie2bSaleForce(
      testData_allAssignment.email,
      testData_allAssignment.password
    );
    await loginpagesaleforce.checkLoginSuccessForAllAssignmentRole();
    await assignmentList.goToAssignmentDetail();
    await assignmentDetail.startVisit();
    await visitFormPage.selectVisitChoiceNotInterested();
    await visitFormPage.selectVisitChoiceWabiProductExpensive();
    await visitFormPage.clickSubmitButton();
  });

  test("เข้าเยี่ยมลูกค้าของ TNT โดยลูกค้าไม่สะดวกทำการสั่งซื้อในช่วงเวลาเข้าเยี่ยม-สินค้าเต็มสต็อค)", async ({
    page,
  }) => {
    const loginpagesaleforce = new LoginPageSaleForce(page);
    const assignmentList = new AssignmentList(page);
    const assignmentDetail = new AssignmentDetail(page);
    const visitFormPage = new VisitFormPage(page);
    await loginpagesaleforce.loginWinnie2bSaleForce(
      testData_allAssignment.email,
      testData_allAssignment.password
    );
    await loginpagesaleforce.checkLoginSuccessForAllAssignmentRole();
    await assignmentList.goToAssignmentDetail();
    await assignmentDetail.startVisit();
    await visitFormPage.selectVisitChoiceNotInterested();
    await visitFormPage.selectVisitChoiceProductFullStock();
    await visitFormPage.clickSubmitButton();
  });

  test("เข้าเยี่ยมลูกค้าของ TNT โดยลูกค้าไม่สะดวกทำการสั่งซื้อในช่วงเวลาเข้าเยี่ยม-สั่งซื้อสินค้าไม่ถึงขั้นต่ำ)", async ({
    page,
  }) => {
    const loginpagesaleforce = new LoginPageSaleForce(page);
    const assignmentList = new AssignmentList(page);
    const assignmentDetail = new AssignmentDetail(page);
    const visitFormPage = new VisitFormPage(page);
    await loginpagesaleforce.loginWinnie2bSaleForce(
      testData_allAssignment.email,
      testData_allAssignment.password
    );
    await loginpagesaleforce.checkLoginSuccessForAllAssignmentRole();
    await assignmentList.goToAssignmentDetail();
    await assignmentDetail.startVisit();
    await visitFormPage.selectVisitChoiceNotInterested();
    await visitFormPage.selectVisitChoiceOrderLessThenMinimum();
    await visitFormPage.clickSubmitButton();
  });

  test("เข้าเยี่ยมลูกค้าของ TNT โดยลูกค้าไม่สะดวกทำการสั่งซื้อในช่วงเวลาเข้าเยี่ยม-อื่นๆ)", async ({
    page,
  }) => {
    const loginpagesaleforce = new LoginPageSaleForce(page);
    const assignmentList = new AssignmentList(page);
    const assignmentDetail = new AssignmentDetail(page);
    const visitFormPage = new VisitFormPage(page);
    await loginpagesaleforce.loginWinnie2bSaleForce(
      testData_allAssignment.email,
      testData_allAssignment.password
    );
    await loginpagesaleforce.checkLoginSuccessForAllAssignmentRole();
    await assignmentList.goToAssignmentDetail();
    await assignmentDetail.startVisit();
    await visitFormPage.selectVisitChoiceNotInterested();
    await visitFormPage.selectVisitChoiceOther();
    await visitFormPage.clickSubmitButton();
  });

  test("เข้าเยี่ยมลูกค้าของ TNT โดยเจ้าของร้านไม่สะดวกคุย / ไม่เจอเจ้าของร้าน)", async ({
    page,
  }) => {
    const loginpagesaleforce = new LoginPageSaleForce(page);
    const assignmentList = new AssignmentList(page);
    const assignmentDetail = new AssignmentDetail(page);
    const visitFormPage = new VisitFormPage(page);
    await loginpagesaleforce.loginWinnie2bSaleForce(
      testData_allAssignment.email,
      testData_allAssignment.password
    );
    await loginpagesaleforce.checkLoginSuccessForAllAssignmentRole();
    await assignmentList.goToAssignmentDetail();
    await assignmentDetail.startVisit();
    await visitFormPage.selectVisitChoiceNotFoundOwner();
    await visitFormPage.clickSubmitButton();
  });

  test("เข้าเยี่ยมลูกค้าของ TNT โดยร้านค้าปิดชั่วคราว)", async ({ page }) => {
    const loginpagesaleforce = new LoginPageSaleForce(page);
    const assignmentList = new AssignmentList(page);
    const assignmentDetail = new AssignmentDetail(page);
    const visitFormPage = new VisitFormPage(page);
    await loginpagesaleforce.loginWinnie2bSaleForce(
      testData_allAssignment.email,
      testData_allAssignment.password
    );
    await loginpagesaleforce.checkLoginSuccessForAllAssignmentRole();
    await assignmentList.goToAssignmentDetail();
    await assignmentDetail.startVisit();
    await visitFormPage.selectVisitChoiceShopTemporarilyClosed();
    await visitFormPage.clickSubmitButton();
  });

  test("เข้าเยี่ยมลูกค้าของ TNT โดยร้านค้าปิดกิจการ)", async ({ page }) => {
    const loginpagesaleforce = new LoginPageSaleForce(page);
    const assignmentList = new AssignmentList(page);
    const assignmentDetail = new AssignmentDetail(page);
    const visitFormPage = new VisitFormPage(page);
    await loginpagesaleforce.loginWinnie2bSaleForce(
      testData_allAssignment.email,
      testData_allAssignment.password
    );
    await loginpagesaleforce.checkLoginSuccessForAllAssignmentRole();
    await assignmentList.goToAssignmentDetail();
    await assignmentDetail.startVisit();
    await visitFormPage.selectVisitChoiceShopClosed();
    await visitFormPage.clickSubmitButton();
  });

  test("เข้าเยี่ยมลูกค้าของ TNT โดยระบุข้อมูลเพิ่มเติม)", async ({ page }) => {
    const loginpagesaleforce = new LoginPageSaleForce(page);
    const assignmentList = new AssignmentList(page);
    const assignmentDetail = new AssignmentDetail(page);
    const visitFormPage = new VisitFormPage(page);
    await loginpagesaleforce.loginWinnie2bSaleForce(
      testData_allAssignment.email,
      testData_allAssignment.password
    );
    await loginpagesaleforce.checkLoginSuccessForAllAssignmentRole();
    await assignmentList.goToAssignmentDetail();
    await assignmentDetail.startVisit();
    await visitFormPage.selectVisitChoiceShopClosed();
    await visitFormPage.addNoteInSummaryPage();
    await visitFormPage.clickSubmitButton();
  });

  test("เข้าเยี่ยมลูกค้าของ TNT โดยอัปโหลดรูป)", async ({ page }) => {
    const loginpagesaleforce = new LoginPageSaleForce(page);
    const assignmentList = new AssignmentList(page);
    const assignmentDetail = new AssignmentDetail(page);
    const visitFormPage = new VisitFormPage(page);
    await loginpagesaleforce.loginWinnie2bSaleForce(
      testData_allAssignment.email,
      testData_allAssignment.password
    );
    await loginpagesaleforce.checkLoginSuccessForAllAssignmentRole();
    await assignmentList.goToAssignmentDetail();
    await assignmentDetail.startVisit();
    await visitFormPage.selectVisitChoiceShopClosed();
    await visitFormPage.addImageInSummaryPage();
    await visitFormPage.clickSubmitButton();
  });
});

//ยังติดเรื่อง permission location
