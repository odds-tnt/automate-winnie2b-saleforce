import { Locator, Page, expect } from "@playwright/test";
import { urlSaleForcecEnvUAT } from "../test-data/url-saleforce/url-saleforce";

export class AssignmentPage {
  readonly page: Page;
  readonly allAssignmentButton: Locator;
  readonly todayAssignmentButton: Locator;
  readonly displayAssignment: Locator;
  readonly displayAssignmentDetail: Locator;
  readonly startVisitButton: Locator;

  constructor(page: Page) {
    this.page = page;
    this.allAssignmentButton = page.getByTestId("all-button");
    this.todayAssignmentButton = page.getByTestId("today-button");
    this.displayAssignment = page.getByTestId("assignment-card");
    this.displayAssignmentDetail = page.getByTestId("visit-date");
    this.startVisitButton = page.getByTestId("start-visit-button");
  }

  async allAssignment() {
    await this.allAssignmentButton.click();
    expect(this.displayAssignment).toBeVisible();
  }

  async todayAssignment() {
    await this.todayAssignmentButton.click();
    expect(this.displayAssignment).toBeVisible();
  }

  async goToAssignmentDetail() {
    await this.todayAssignmentButton.click();
    await this.displayAssignment.click();
    expect(this.displayAssignmentDetail).toBeVisible();
  }

  async startVisit() {
    await this.startVisitButton.click();
    expect(this.page).toHaveURL(urlSaleForcecEnvUAT.visitForm);
  }
}
