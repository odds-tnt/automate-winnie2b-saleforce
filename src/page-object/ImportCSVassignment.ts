import { Locator, Page, expect } from "@playwright/test";
import {
  urlSaleForcecEnvUAT,
  urlSaleForcecEnvDev,
  PathFileCSV,
} from "../test-data/url-saleforce/url-saleforce";
import { PathFileCSV_Assignment } from "../test-data/url-saleforce/url-filePathCSV";
import { setTimeout } from "timers/promises";

export class ImportCSVassignment {
  readonly page: Page;
  readonly add_assignment_button: Locator;
  readonly importCSV_button: Locator;
  readonly addCSV_field: Locator;
  readonly effectiveDate_selected: Locator;
  readonly confirm_button: Locator;
  constructor(page: Page) {
    this.page = page;
    this.add_assignment_button = page.getByTestId("add-assignment-button");
    this.importCSV_button = page.getByRole("button", { name: /^(นําเข้า CSV|Import CSV)$/ });
    this.addCSV_field = page.locator('input[id = "assignment-upload"]');
    this.effectiveDate_selected = page.getByRole('button', { name: 'เดือนถัดไป เม.ย.' })
    this.confirm_button = page.getByRole("button", { name: /^\s*(Confirm|ยืนยัน)\s*$/ });
  }

  async clickButtonAddAssignmentInHomePage() {
    await this.add_assignment_button.click();
  }

  async importCSVfileAssignment() {
    await this.importCSV_button.click();
    await this.addCSV_field.setInputFiles(
      PathFileCSV_Assignment.CSV_FileAssignment
    );
    await this.effectiveDate_selected.click();
    await this.confirm_button.waitFor({ state: 'visible' });
    await this.confirm_button.click();
    await expect(this.page).toHaveURL(
      urlSaleForcecEnvUAT.saleForce_Allassign_HomePage
    );
  }
}
