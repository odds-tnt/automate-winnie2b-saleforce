import { test, expect, Page, APIRequestContext, Browser } from '@playwright/test';
import { LoginPageSaleForce } from '../../page-object/LoginPage';
import { testData_AVP as AVP, testData_ERM as ERM, testData_SaleESD as ESD, testData_SaleESF as ESF, testData_VP as VP, testData_CXM as CXM, User } from '../../test-data/user-saleforce/user-saleforce-dev';
import { urlSaleForcecEnvUAT } from '../../test-data/url-saleforce/url-saleforce';
import { makeCaseToCXM, makeCaseToERM } from '../../test-data/Data-Form/CreateCaseForm';
import { CaseListPage } from '../../page-object/CaseList';

test('Complete case feature flow', async ({ browser, request }) => {
  // Prepare case data
  await resetTestData(request);
  const CASE_TO_CXM = makeCaseToCXM('Case to CXM');
  const CASE_TO_ERM = makeCaseToERM('Case to ERM');
  const CASE_TO_AVP_1 = makeCaseToCXM('Case to AVP #1');
  const CASE_TO_AVP_2 = makeCaseToERM('Case to AVP #2');

  const esdCaseList = await newCaseListPage({ browser, for: ESD });
  const esfCaseList = await newCaseListPage({ browser, for: ESF });
  const ermCaseList = await newCaseListPage({ browser, for: ERM });
  const cxmCaseList = await newCaseListPage({ browser, for: CXM });
  const avpCaseList = await newCaseListPage({ browser, for: AVP });
  const vpCaseList = await newCaseListPage({ browser, for: VP });
  
  await esdCaseList.createCase({ for: CASE_TO_CXM });
  await esdCaseList.checkCaseData({ expected: CASE_TO_CXM, by: ESD });
  await esfCaseList.createCase({ for: CASE_TO_ERM});
  await esfCaseList.checkCaseData({ expected: CASE_TO_ERM, by: ESF });
  await cxmCaseList.createCase({ for: CASE_TO_AVP_1 });
  await cxmCaseList.checkCaseData({ expected: CASE_TO_AVP_1, by: CXM });
  await ermCaseList.createCase({ for: CASE_TO_AVP_2 });
  await ermCaseList.checkCaseData({ expected: CASE_TO_AVP_2, by: ERM });

  await expect(avpCaseList.createCaseButton).not.toBeVisible();
  await expect(vpCaseList.createCaseButton).not.toBeVisible();

  // Check case visibility
  await esdCaseList.reload();
  await esdCaseList.gotoPendingTab();
  await expect(esdCaseList.cases).toHaveCount(1);
  await expect(esdCaseList.actionableCases).toHaveCount(0);

  await esfCaseList.reload();
  await esfCaseList.gotoPendingTab();
  await expect(esfCaseList.cases).toHaveCount(1);
  await expect(esdCaseList.actionableCases).toHaveCount(0);

  await ermCaseList.reload();
  await ermCaseList.gotoPendingTab();
  await expect(ermCaseList.cases).toHaveCount(4);
  await expect(ermCaseList.actionableCases).toHaveCount(1);
  await expect(ermCaseList.actionableCasesByTitle('Case to ERM')).toBeTruthy();

  await cxmCaseList.reload();
  await cxmCaseList.gotoPendingTab();
  await expect(cxmCaseList.cases).toHaveCount(4);
  await expect(cxmCaseList.actionableCases).toHaveCount(1);
  await expect(cxmCaseList.actionableCasesByTitle('Case to CXM')).toBeTruthy();

  await avpCaseList.reload();
  await avpCaseList.gotoPendingTab();
  await expect(avpCaseList.cases).toHaveCount(4);
  await expect(avpCaseList.actionableCases).toHaveCount(2);
  await expect(avpCaseList.actionableCasesByTitle('Case to AVP #1')).toBeTruthy();
  await expect(avpCaseList.actionableCasesByTitle('Case to AVP #2')).toBeTruthy();

  // Check case summary
  await esdCaseList.checkCaseSummary({ pending: 1, verified: 0, rejected: 0 });
  await esfCaseList.checkCaseSummary({ pending: 1, verified: 0, rejected: 0 });
  // ERM, CXM, AVP, AVP should see the same summary
  await ermCaseList.checkCaseSummary({ pending: 4, verified: 0, rejected: 0 }); 
  await avpCaseList.checkCaseSummary({ pending: 4, verified: 0, rejected: 0 }); 

  // Proceeed Action
  await ermCaseList.verifyCaseByTitle('Case to ERM');
  await ermCaseList.reload();
  await ermCaseList.gotoPendingTab();
  await expect(ermCaseList.cases).toHaveCount(3);
  await ermCaseList.gotoVerifyTab();
  await expect(ermCaseList.cases).toHaveCount(1);
  await ermCaseList.gotoRejectTab();
  await expect(ermCaseList.cases).toHaveCount(0);
  await ermCaseList.checkCaseSummary({ pending: 3, verified: 1, rejected: 0 });

  await esfCaseList.reload();
  await esfCaseList.gotoPendingTab();
  await expect(esfCaseList.cases).toHaveCount(0);
  await esfCaseList.gotoVerifyTab();
  await expect(esfCaseList.cases).toHaveCount(1);
  await esfCaseList.gotoRejectTab();
  await expect(esfCaseList.cases).toHaveCount(0);
  await esfCaseList.checkCaseSummary({ pending: 0, verified: 1, rejected: 0 });

  await avpCaseList.rejectCaseByTitle('Case to AVP #1');
  await avpCaseList.reload();
  await avpCaseList.gotoPendingTab();
  await expect(avpCaseList.cases).toHaveCount(2);
  await avpCaseList.gotoVerifyTab();
  await expect(avpCaseList.cases).toHaveCount(1);
  await avpCaseList.gotoRejectTab();
  await expect(avpCaseList.cases).toHaveCount(1);
  await avpCaseList.checkCaseSummary({ pending: 2, verified: 1, rejected: 1 });

  await escalate(request);
  
  await cxmCaseList.reload();
  await cxmCaseList.gotoPendingTab();
  await expect(cxmCaseList.cases).toHaveCount(2);
  await expect(cxmCaseList.actionableCases).toHaveCount(0);
  await cxmCaseList.gotoVerifyTab();
  await expect(cxmCaseList.cases).toHaveCount(1);
  await cxmCaseList.gotoRejectTab();
  await expect(cxmCaseList.cases).toHaveCount(1);
  await cxmCaseList.checkCaseSummary({ pending: 2, verified: 1, rejected: 1 });
  
  await avpCaseList.reload();
  await avpCaseList.gotoPendingTab();
  await expect(avpCaseList.cases).toHaveCount(2);
  await expect(avpCaseList.actionableCases).toHaveCount(1);
  await expect(avpCaseList.actionableCasesByTitle('Case to CXM')).toBeTruthy();

  await vpCaseList.reload();
  await vpCaseList.gotoPendingTab();
  await expect(vpCaseList.cases).toHaveCount(2);
  await expect(vpCaseList.actionableCases).toHaveCount(1);
  await expect(vpCaseList.actionableCasesByTitle('Case to AVP #2')).toBeTruthy();
});

async function newCaseListPage({ browser, for: user }: { browser: Browser, for: User }) {
  const context = await browser.newContext();
  const page = await context.newPage();
  await loginAs({ page, for: user });
  await page.locator('[data-testid="case-button"]').click();
  const caseListPage = new CaseListPage(page);
  return caseListPage;
}

async function loginAs({ page, for: user }: { page: Page, for: User }) {
  await page.goto(urlSaleForcecEnvUAT.saleForceLogInPage_UAT);
  const login = new LoginPageSaleForce(page);
  await login.loginWinnie2bSaleForce(user.email, user.password);
}

async function resetTestData(request: APIRequestContext) {
  const response = await request.post(`${urlSaleForcecEnvUAT.saleForceLogInPage_UAT}test/resetcases`, {
    ignoreHTTPSErrors: true
  });
  expect(response.ok()).toBeTruthy();
}

async function escalate(request: APIRequestContext) {
  const timeToEscalate = new Date();
  timeToEscalate.setHours(timeToEscalate.getHours() + 25);
  const response = await request.post(`${urlSaleForcecEnvUAT.saleForceLogInPage_UAT}test/escalate`, {
    ignoreHTTPSErrors: true,
    data: timeToEscalate
  });
  expect(response.ok()).toBeTruthy();
}

