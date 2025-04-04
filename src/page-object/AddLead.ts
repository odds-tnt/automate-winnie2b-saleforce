import { Locator, Page, expect } from "@playwright/test";

export class AddLead {
  readonly page: Page;
  readonly storeNameInput: Locator;
  readonly customerNameInput: Locator;
  readonly addressInput: Locator;
  readonly nextBtn: Locator;
  readonly displayLeadForm: Locator;
  readonly registeredBtn: Locator;
  readonly customerIdInput: Locator;
  readonly orderedBtn: Locator;
  readonly orderIdInput: Locator;
  readonly inconvenientBtn: Locator;
  readonly notRegisteredBtn: Locator;
  readonly waitingForDecisionBtn: Locator;
  readonly notFoundOwnerBtn: Locator;
  readonly notConvenientToTalkBtn: Locator;
  readonly notInterestedBtn: Locator;
  readonly visitSummary: Locator;
  readonly submitBtn: Locator;

  constructor(page: Page) {
    this.page = page;
    this.storeNameInput = page.getByTestId("StoreName");
    this.customerNameInput = page.getByTestId("CustomerName");
    this.addressInput = page.getByTestId("address");
    this.nextBtn = page.getByTestId("next-button");
    this.displayLeadForm = page.getByTestId("visit-button-A13");
    this.registeredBtn = page.getByTestId("visit-button-A13");
    this.customerIdInput = page.getByTestId("orderId"); //ต้องแก้ชื่อ datatestid
    this.orderedBtn = page.getByTestId("visit-button-B17");
    this.orderIdInput = page.getByTestId("orderId");
    this.inconvenientBtn = page.getByTestId("visit-button-B18");
    this.notRegisteredBtn = page.getByTestId("visit-button-A14");
    this.waitingForDecisionBtn = page.getByTestId("visit-button-B19");
    this.notFoundOwnerBtn = page.getByTestId("visit-button-B20");
    this.notConvenientToTalkBtn = page.getByTestId("visit-button-B21");
    this.notInterestedBtn = page.getByTestId("visit-button-B22");
    this.visitSummary = page.getByText("ผลการเข้าเยี่ยม");
    this.submitBtn = page.getByTestId("submit-button");
  }

  async fillLeadInfo() {
    await this.storeNameInput.click();
    await this.storeNameInput.fill("ร้านป้านง");
    await this.customerNameInput.click();
    await this.customerNameInput.fill("นงนุช");
    await this.addressInput.click();
    await this.addressInput.fill(
      "101 ถนนพระราม 6 แขวงพญาไท เขตพญาไท กรุงเทพมหานคร 10400"
    );
    await this.nextBtn.click();
    // expect(this.displayLeadForm).toBeVisible();
  }

  async selectRegistered() {
    await this.registeredBtn.click();
    await this.customerIdInput.click();
    await this.customerIdInput.fill("5454");
    await this.nextBtn.click();
  }

  async selectOrdered() {
    await this.orderedBtn.click();
    await this.orderIdInput.click();
    await this.orderIdInput.fill("00000228");
    await this.nextBtn.click();
    expect(this.visitSummary).toBeVisible();
  }

  async selectInconvenient() {
    await this.inconvenientBtn.click();
    await this.nextBtn.click();
    expect(this.visitSummary).toBeVisible();
  }

  async selectNotRegistered() {
    await this.notRegisteredBtn.click();
    await this.nextBtn.click();
  }

  async selectWaittingForDecision() {
    await this.waitingForDecisionBtn.click();
    await this.nextBtn.click();
    expect(this.visitSummary).toBeVisible();
  }

  async selectNotFoundOwnerBtn() {
    await this.notFoundOwnerBtn.click();
    await this.nextBtn.click();
    expect(this.visitSummary).toBeVisible();
  }

  async selectNotConvienientToTalk() {
    await this.notConvenientToTalkBtn.click();
    await this.nextBtn.click();
    expect(this.visitSummary).toBeVisible();
  }

  async selectNotInterested() {
    await this.notInterestedBtn.click();
    await this.nextBtn.click();
    expect(this.visitSummary).toBeVisible();
  }

  async clickSubmitButton() {
    await this.submitBtn.click();
  }
}
