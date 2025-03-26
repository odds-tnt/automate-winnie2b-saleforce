import { Locator, Page, expect } from "@playwright/test";

export class LeadList {
  readonly page: Page;
  readonly listBtn: Locator;
  readonly displayLead: Locator;
  readonly addLeadBtn: Locator;
  readonly displayLeadInfo: Locator;

  constructor(page: Page) {
    this.page = page;
    this.listBtn = page.getByTestId("lead-button");
    this.displayLead = page.getByTestId("visit-store-button");
    this.addLeadBtn = page.getByTestId("visit-store-button");
    this.displayLeadInfo = page.getByText("เข้าเยี่ยมร้านค้าใหม่"); 
  }

  async leadListPage(){
    await this.listBtn.click();
    expect(this.displayLead).toBeVisible();
  }

  async leadInfoPage(){
    await this.addLeadBtn.click();
    expect(this.displayLeadInfo).toBeVisible();
  }
}
