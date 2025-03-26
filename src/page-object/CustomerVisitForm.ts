import { Locator, Page, expect } from "@playwright/test";
import { data_test_visit_form } from "../test-data/Data-AssignmentForm/Data-VisitForm";

export class VisitFormPage {
  readonly page: Page;
  readonly orderBtn: Locator;
  readonly inputOrderId: Locator;
  readonly nextBtn: Locator;
  readonly nextBtnPage2: Locator;
  readonly visitSummary: Locator;
  readonly submitBtn: Locator;
  readonly notOrderBtn: Locator;
  readonly visitChoiceLevelTwo: Locator;
  readonly badDeliveredBtn: Locator;
  readonly buyFromDepartmentStoreBtn: Locator;
  readonly buyFromStockistInAreaBtn: Locator;
  readonly storeNameBox: Locator;
  readonly productNameBox: Locator;
  readonly wabiProductExpensiveBnt: Locator;
  readonly productFullStockBtn: Locator;
  readonly orderLessThenMinimumBtn: Locator;
  readonly otherBtn: Locator;
  readonly reasonBox: Locator;
  readonly notFoundOwnerBtn: Locator;
  readonly shopTemporarilyClosedBtn: Locator;
  readonly shopClosedBtn: Locator;
  readonly noteBox: Locator;
  readonly uploadImageBox: Locator;
  readonly uploadImage: Locator;

  constructor(page: Page) {
    this.page = page;
    this.nextBtn = page.getByTestId("next-button");
    this.nextBtnPage2 = page.getByRole('button', { name: 'ถัดไป' });
    this.visitSummary = page.getByText("ผลการเข้าเยี่ยม");
    this.submitBtn = page.getByRole('button', { name: 'บันทึก' });
    this.orderBtn = page.getByTestId("visit-button-A08");
    this.inputOrderId = page.getByTestId("orderId");
    this.notOrderBtn = page.getByTestId("visit-button-A09");
    this.visitChoiceLevelTwo = page.getByText("ไม่สะดวกทำการสั่งซื้อในช่วงเวลาเข้าเยี่ยม"); 
    this.badDeliveredBtn = page.getByTestId("visit-button-B10");
    this.buyFromDepartmentStoreBtn = page.getByTestId("visit-button-B11");
    this.buyFromStockistInAreaBtn = page.getByTestId("visit-button-B12");
    this.storeNameBox = page.getByTestId("currentStore");
    this.productNameBox = page.locator("#productName");
    this.wabiProductExpensiveBnt = page.getByTestId("visit-button-B13");
    this.productFullStockBtn = page.getByTestId("visit-button-B14");
    this.orderLessThenMinimumBtn = page.getByTestId("visit-button-B15");
    this.otherBtn = page.getByTestId("visit-button-B16");
    this.reasonBox = page.getByTestId("reason");
    this.notFoundOwnerBtn = page.getByTestId("visit-button-A10");
    this.shopTemporarilyClosedBtn = page.getByTestId("visit-button-A11");
    this.shopClosedBtn = page.getByTestId("visit-button-A12");
    this.noteBox = page.getByTestId("note");
    this.uploadImageBox = page.locator('input[id = "image-input"]');
  }
  //visitChoice 1
  async selectVisitChoiceOrderProduct() {
    await this.orderBtn.click();
    // expect(this.inputOrderId).toBeVisible();

    await this.inputOrderId.click();
    await this.inputOrderId.fill("000001");
    await this.nextBtn.click();
    expect(this.visitSummary).toBeVisible();
  }

  //visitChoice 2
  async selectVisitChoiceNotInterested() {
    await this.notOrderBtn.click();
    await this.nextBtn.click();
    expect(this.visitChoiceLevelTwo).toBeVisible();
  }

  //visitChoiceLevel 2-1
  async selectVisitChoiceBadDelivered() {
    await this.badDeliveredBtn.click();
    await this.nextBtnPage2.click();
    expect(this.visitSummary).toBeVisible();
  }

  //visitChoiceLevel 2-2
  async selectVisitChoiceBuyFromDepartmentStore() {
    await this.buyFromDepartmentStoreBtn.click();
    await this.nextBtnPage2.click();
    expect(this.visitSummary).toBeVisible();
  }

  //visitChoiceLevel 2-3
  async selectVisitChoiceBuyFromStockistInArea() {
    await this.buyFromStockistInAreaBtn.click();
    expect(this.storeNameBox).toBeVisible();

    await this.storeNameBox.click();
    await this.storeNameBox.fill("ร้านค้าส่ง A");
    await this.productNameBox.click();
    await this.productNameBox.fill("สินค้าอุปโภคและบริโภค");
    await this.nextBtnPage2.click();
    expect(this.visitSummary).toBeVisible();
  }

  //visitChoiceLevel 2-4
  async selectVisitChoiceWabiProductExpensive() {
    await this.wabiProductExpensiveBnt.click();
    await this.nextBtnPage2.click();
    expect(this.visitSummary).toBeVisible();
  }

  //visitChoiceLevel 2-5
  async selectVisitChoiceProductFullStock() {
    await this.productFullStockBtn.click();
    await this.nextBtnPage2.click();
    expect(this.visitSummary).toBeVisible();
  }

  //visitChoiceLevel 2-6
  async selectVisitChoiceOrderLessThenMinimum() {
    await this.orderLessThenMinimumBtn.click();
    await this.nextBtnPage2.click();
    expect(this.visitSummary).toBeVisible();
  }

  //visitChoiceLevel 2-7
  async selectVisitChoiceOther() {
    await this.otherBtn.click();
    // expect(this.reasonBox).toBeVisible();

    await this.reasonBox.click();
    await this.reasonBox.fill("ติดธุระอยู่");
    await this.nextBtnPage2.click();
    expect(this.visitSummary).toBeVisible();
  }

  //visitChoice 3
  async selectVisitChoiceNotFoundOwner() {
    await this.notFoundOwnerBtn.click();
    await this.nextBtn.click();
    expect(this.visitSummary).toBeVisible();
  }

  //visitChoice 4
  async selectVisitChoiceShopTemporarilyClosed() {
    await this.shopTemporarilyClosedBtn.click();
    await this.nextBtn.click();
    expect(this.visitSummary).toBeVisible();
  }

  //visitChoice 5
  async selectVisitChoiceShopClosed() {
    await this.shopClosedBtn.click();
    await this.nextBtn.click();
    expect(this.visitSummary).toBeVisible();
  }

  //summaryAddNote
  async addNoteInSummaryPage() {
    await this.noteBox.click();
    await this.noteBox.fill("ลูกค้าต้องการให้เข้ามาใหม่สัปดาห์หน้า");
  }

  //summaryAddImage
  async addImageInSummaryPage() {
    await this.uploadImageBox.setInputFiles(
          data_test_visit_form.darkSpace_ImagePath
        );
  }

  async clickSubmitButton() {
    await this.submitBtn.click();
  }
}