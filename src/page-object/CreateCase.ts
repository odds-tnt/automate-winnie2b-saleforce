import { Locator, Page } from "@playwright/test";
import { CaseType, CaseTopic, CreateCaseForm } from "../test-data/Data-Form/CreateCaseForm";

export class CreateCasePage {
  readonly page: Page;
  readonly caseTypeDropdown: Locator;
  readonly caseTopicDropdown: Locator;
  readonly detailTextarea: Locator;
  readonly caseName: Locator;
  readonly customerId: Locator;
  readonly outletMaster: Locator;
  readonly submitButton: Locator;

  constructor(page: Page) {
    this.page = page;
    this.caseTypeDropdown = page.locator('[data-testid="caseType"] select');
    this.caseTopicDropdown = page.locator('[data-testid="caseTopic"] select');
    this.caseName = page.locator('input[formcontrolname="name"]');
    this.customerId = page.locator('input[formcontrolname="customerId"]');
    this.outletMaster = page.locator('input[formcontrolname="outletMaster"]');
    this.detailTextarea = page.locator('textarea[formcontrolname="detail"]');
    this.submitButton = page.locator('button.submit-button[type="submit"]');
  }

  async selectCaseType(type: CaseType) {
    await this.caseTypeDropdown.selectOption({ label: type });
  }

  async selectCaseTopic(topic: CaseTopic) {
    await this.caseTopicDropdown.selectOption({ label: topic });
  }

  async fillDetail(detail: string) {
    await this.detailTextarea.fill(detail);
  }

  async submit() {
    await this.submitButton.click();
  }

  async createCase({ type, topic, name, customerId, outletMaster, detail }: CreateCaseForm) {
    await this.selectCaseType(type);
    await this.selectCaseTopic(topic);
    await this.caseName.fill(name);
    if (customerId) await this.customerId.fill(customerId);
    if (outletMaster) await this.outletMaster.fill(outletMaster);
    await this.fillDetail(detail);
    await this.submit();
  }
}