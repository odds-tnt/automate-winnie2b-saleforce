import { Locator, Page, expect } from "@playwright/test";
import { visit_date } from "../test-data/Data-Form/Edit-dataForm";
import {
  urlSaleForcecEnvUAT,
  urlSaleForcecEnvDev,
} from "../test-data/url-saleforce/url-saleforce";

export class EditAssignment {
  readonly page: Page;
  readonly all_button: Locator;
  readonly search_box: Locator;
  readonly select_assignment: Locator;
  readonly edit_assignment_button: Locator;
  readonly edit_visit_date: Locator;
  readonly selected_visit_date: Locator;
  readonly owner_email_input: Locator;
  readonly save_edit_button: Locator;
  readonly error_email: Locator;

  constructor(page: Page) {
    this.page = page;
    this.all_button = page.getByTestId("all-button");
    this.search_box = page.getByRole("textbox",{name:(/^\s*(ค้นหา|Search)\s*$/)});
    this.select_assignment = page.getByTestId("assignment-card").first();
    this.edit_assignment_button = page.getByText(/^\s*(แก้ไข|Edit)\s*$/);
    this.edit_visit_date = page.getByTestId("edit-visit-date");
    this.selected_visit_date = page.getByLabel(visit_date.visit_date_selected);
    this.owner_email_input = page.getByTestId("owner-email-input");
    this.error_email = page.locator('[data-testid="error-email"]');
    this.save_edit_button = page.getByTestId("save-edit-button");
    
  }

  async clickViewAssignmentShowAll() {
    await this.all_button.click();
  }

  async searchAssignment(StoreName: string) {
    await this.search_box.fill(StoreName);
  }

  async selectAssignment() {
    await this.select_assignment.click();
  }

  async clickEditAssignment() {
    await this.edit_assignment_button.click();
  }

  async editVisitDate() {
    await this.edit_visit_date.click();
    await this.selected_visit_date.click();
  }

  async editOwnerEmail(OwnerEmail: string) {
    await this.owner_email_input.fill(OwnerEmail);
  }

  async editErrorOwnerEmail(OwnerEmail: string) {
    await this.owner_email_input.fill(OwnerEmail);
    expect(this.error_email).toBeVisible();
    expect(this.error_email).toHaveText(
    'ไม่พบบัญชีอีเมลนี้ในระบบ โปรดตรวจสอบความถูกต้อง หรือยืนยันว่าได้ลงทะเบียนแล้ว')
  }

  async clickSaveEdit() {
    await this.save_edit_button.click();
  }

  async checkEditVisitAssignmentSuccess() {
    await expect(this.page).toHaveURL(
      urlSaleForcecEnvUAT.saleForce_Allassign_HomePage
    );
  }
}
