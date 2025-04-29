import { expect, Locator, Page } from "@playwright/test";
import { CreateCaseForm } from "../test-data/Data-Form/CreateCaseForm";
import { CreateCasePage } from "./CreateCase";
import { User } from "../test-data/user-saleforce/user-saleforce-dev";

export class CaseListPage {
  readonly page: Page;
  readonly filter: Locator;
  readonly formTitle: Locator;
  readonly caseData: Locator;
  readonly confirmVerifyButton: Locator;
  readonly pendingTab: Locator;
  readonly verifyTab: Locator;
  readonly rejectTab: Locator;
  readonly createCaseButton: Locator;
  readonly cases: Locator;
  readonly actionableCases: Locator;
  readonly reason: Locator;
  readonly confirmRejectButton: Locator;

  constructor(page: Page) {
    this.page = page;
    this.filter = page.locator('.filter');
    this.caseData = page.locator('[data-testid="case-data"]');
    this.formTitle = page.locator('form > .title');
    this.confirmVerifyButton = page.locator('.modal-container button', { hasText: 'ยืนยัน' });
    this.reason = page.locator('.modal-container textarea[formcontrolname="reason"]');
    this.confirmRejectButton = page.locator('.modal-container .btn', { hasText: 'ยืนยัน' });
    this.pendingTab = page.locator('.filter .status.pending');
    this.verifyTab = page.locator('.filter .status.verified');
    this.rejectTab = page.locator('.filter .status.rejected');
    this.createCaseButton = page.locator('[data-testid="add-case-button"]');
    this.cases = page.locator('.case-card');
    this.actionableCases = page.getByTestId('verify-button');
  }

  async gotoCreateCasePage() {
    await this.createCaseButton.click();
    await expect(this.formTitle).toContainText('เคส')
  }

  async reload() {
    await this.page.reload();
  }
  
  async gotoPendingTab() {
    await this.pendingTab.click();
  }

  async gotoVerifyTab() {
    await this.verifyTab.click();
  }

  async gotoRejectTab() {
    await this.rejectTab.click();
  }

  async checkCaseData({ expected, by: user }: { expected: CreateCaseForm, by: User }) {
    const card = this.caseCardByTitle(expected.name);
    await expect(card.locator('.type')).toHaveText(expected.type);
    await expect(card.locator('.topic')).toHaveText(expected.topic);
    await expect(card.locator('.text')).toHaveText(expected.detail);
    await expect(card.locator('[data-testid="profile-name"]')).toContainText(user.name);
    await expect(card.locator('[data-testid="profile-role"]')).toContainText(new RegExp(user.role, 'i'));
    if (expected.customerId) {
      await expect(card.locator('.customer')).toContainText(expected.customerId);
    }
    if (expected.outletMaster) {
      await expect(card.locator('.owner')).toContainText(expected.outletMaster);
    }
  }

  async checkCaseVerified(title: string) {
    const card = this.caseCardByTitle(title);
    await expect(card.locator('.status-title')).toHaveText(/ตรวจสอบแล้ว/);
  }

  async verifyCaseByTitle(title: string) {
    const card = this.caseCardByTitle(title);
    const verifyAction = card.locator('.action', { hasText: /ตรวจสอบแล้ว/ });
    await verifyAction.click();
    await this.confirmVerifyButton.click();
  }

  async rejectCaseByTitle(title: string) {
    const card = this.caseCardByTitle(title);
    const rejectAction = card.locator('.action', { hasText: /ปฏิเสธ/ });
    await rejectAction.click();
    await this.reason.fill('reason test');
    await this.confirmRejectButton.click();
  }

  async createCase({ for: data }: { for: CreateCaseForm }) {
    await this.gotoCreateCasePage();
    const createCasePage = new CreateCasePage(this.page);
    await createCasePage.createCase(data);
  }

  async actionableCasesByTitle(title: string) { 
    this.cases
      .filter({ has: this.cases.locator('.title', { hasText: new RegExp(title, 'i') }) })
      .filter({ has: this.cases.getByTestId('verify-button') });
    return this.actionableCases.filter({ hasText: new RegExp(title, 'i') });
  }

  async checkCaseSummary({ pending, verified, rejected }: { pending: number, verified: number, rejected: number }) {
    await expect(this.pendingTab.locator('.amount')).toHaveText(pending.toString());
    await expect(this.verifyTab.locator('.amount')).toHaveText(verified.toString());
    await expect(this.rejectTab.locator('.amount')).toHaveText(rejected.toString());
  }

  private caseCardByTitle(title: string) {
    return this.page.locator('.case-card', { has: this.page.locator('.title', { hasText: new RegExp(title, 'i') }) });
  }
}