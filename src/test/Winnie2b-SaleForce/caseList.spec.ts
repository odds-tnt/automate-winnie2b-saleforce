import { test, expect, Page, Locator, APIRequestContext } from '@playwright/test';
import { LoginPageSaleForce } from '../../page-object/LoginPage';
import { testData_ERM, testData_SaleESD, testData_SaleESF, testData_VP } from '../../test-data/user-saleforce/user-saleforce-dev';
import { urlSaleForcecEnvLocal } from '../../test-data/url-saleforce/url-saleforce';
import { saleESDCreateCaseToCXM, saleESFCreateCaseToERM } from '../../test-data/Data-Form/CreateCaseForm';

export type CaseType = 'Retailer' | 'Wholesaler' | 'Operation Team' | 'Customer Service';
export type CaseTopic =
  | 'Inactive'
  | 'Rejected'
  | 'Fraud'
  | 'Complaint (Retailer, Wholesaler, Operation team, Customer service)'
  | 'Customer feedback'
  | 'อื่น ๆ';

export type CreateCaseForm = {
  type: CaseType;
  topic: CaseTopic;
  name: string;
  customerId?: string;
  outletMaster?: string;
  detail: string;
}

export type User = {
  name: string;
  role: string;
};

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

export class CaseListPage {
  readonly page: Page;
  readonly filter: Locator;
  readonly formTitle: Locator;
  readonly caseData: Locator;
  readonly confirmVerifyButton: Locator;
  readonly verifyTab: Locator;

  constructor(page: Page) {
    this.page = page;
    this.filter = page.locator('.filter');
    this.caseData = page.locator('[data-testid="case-data"]');
    this.formTitle = page.locator('form > .title');
    this.confirmVerifyButton = page.locator('.modal-container button', { hasText: 'ยืนยัน' });
    this.verifyTab = page.locator('.filter .status.verified');
  }

  async checkCaseData(expected: CreateCaseForm, user: User) {
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

  async gotoPage() {
    await this.page.click('[data-testid="case-button"]');
    await expect(this.filter).toBeVisible();
  }

  async gotoCreateCasePage() {
    await this.page.click('[data-testid="add-case-button"]');
    await expect(this.formTitle).toContainText('เคส')
  }
  
  async gotoVerifyTab() {
    await this.verifyTab.click();
  }

  async verifyCaseByTitle(title: string) {
    const card = this.caseCardByTitle(title);
    const verifyAction = card.locator('.action', { hasText: /ตรวจสอบแล้ว/ });
    await verifyAction.click();
    await this.confirmVerifyButton.click();
  }

  private caseCardByTitle(title: string) {
    return this.page.locator('.case-card', { has: this.page.locator('.title', { hasText: new RegExp(title, 'i') }) });
  }
}

test('Sale ESD create ticket to CXM and verified by VP', async ({ browser, request }) => {
  await resetTestData(request);
  const saleContext = await browser.newContext();
  const salePage = await saleContext.newPage();
  await salePage.goto(urlSaleForcecEnvLocal.saleForce_LogIn);
  
  const loginPage = new LoginPageSaleForce(salePage);
  await loginPage.loginWinnie2bSaleForce(testData_SaleESD.email, testData_SaleESD.password);
  
  const caseListPage = new CaseListPage(salePage);
  await caseListPage.gotoPage();
  await caseListPage.gotoCreateCasePage();
  
  const createCasePage = new CreateCasePage(salePage);
  await createCasePage.createCase(saleESDCreateCaseToCXM);
  await caseListPage.checkCaseData(saleESDCreateCaseToCXM, testData_SaleESD);

  await escalate(request);
  await escalate(request);

  const vpContext = await browser.newContext();
  const vpPage = await vpContext.newPage();
  await vpPage.goto(urlSaleForcecEnvLocal.saleForce_LogIn);

  const loginPageForVP = new LoginPageSaleForce(vpPage);
  await loginPageForVP.loginWinnie2bSaleForce(testData_VP.email, testData_VP.password);

  const caseListPageForVP = new CaseListPage(vpPage);
  await caseListPageForVP.gotoPage();
  await caseListPageForVP.verifyCaseByTitle(saleESDCreateCaseToCXM.name);
  await caseListPageForVP.checkCaseVerified(saleESDCreateCaseToCXM.name);
});

test('Sale ESF create ticket to ERM and rejected by ERM', async ({ browser, request }) => {
  await resetTestData(request);
  const saleContext = await browser.newContext();
  const salePage = await saleContext.newPage();
  await salePage.goto(urlSaleForcecEnvLocal.saleForce_LogIn);
  
  const loginPage = new LoginPageSaleForce(salePage);
  await loginPage.loginWinnie2bSaleForce(testData_SaleESF.email, testData_SaleESF.password);
  
  const caseListPage = new CaseListPage(salePage);
  await caseListPage.gotoPage();
  await caseListPage.gotoCreateCasePage();
  
  const createCasePage = new CreateCasePage(salePage);
  await createCasePage.createCase(saleESFCreateCaseToERM);
  await caseListPage.checkCaseData(saleESFCreateCaseToERM, testData_SaleESF);

  const vpContext = await browser.newContext();
  const vpPage = await vpContext.newPage();
  await vpPage.goto(urlSaleForcecEnvLocal.saleForce_LogIn);

  const loginPageForERM = new LoginPageSaleForce(vpPage);
  await loginPageForERM.loginWinnie2bSaleForce(testData_ERM.email, testData_ERM.password);

  const caseListPageForERM = new CaseListPage(vpPage);
  await caseListPageForERM.gotoPage();
  await caseListPageForERM.verifyCaseByTitle(saleESFCreateCaseToERM.name);
  await caseListPageForERM.checkCaseVerified(saleESFCreateCaseToERM.name);
});

test('AVP should not see create button', async ({ page }) => {
  // TODO: Implement login as AVP
  // TODO: Assert that create button is not visible
  // Example:
  // await page.goto('your-app-url');
  // await expect(page.locator('button#create')).toBeHidden();
});

test('VP should not see create button', async ({ page }) => {
  // TODO: Implement login as VP
  // TODO: Assert that create button is not visible
  // Example:
  // await page.goto('your-app-url');
  // await expect(page.locator('button#create')).toBeHidden();
});

async function resetTestData(request: APIRequestContext) {
  const response = await request.post('https://localhost:7192/test/resetcases', {
    ignoreHTTPSErrors: true
  });
  expect(response.ok()).toBeTruthy();
}

async function escalate(request: APIRequestContext) {
  const timeToEscalate = new Date();
  timeToEscalate.setHours(timeToEscalate.getHours() + 25);
  const response = await request.post('https://localhost:7192/test/escalate', {
    ignoreHTTPSErrors: true,
    data: timeToEscalate
  });
  expect(response.ok()).toBeTruthy();
}