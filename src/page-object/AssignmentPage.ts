import { Locator, Page, expect } from "@playwright/test";

export class AssignmentPage {
  readonly page: Page;
  readonly allAssignmentButton: Locator;
  readonly todayAssignmentButton: Locator;
  readonly displayAssignment: Locator;

  constructor(page: Page) {
    this.page = page;
    this.allAssignmentButton = page.getByTestId("all-button");
    this.todayAssignmentButton = page.getByTestId("today-button");
    this.displayAssignment = page.getByTestId("assignment-card");
  }

  async allAssignment() {
    await this.allAssignmentButton.click();
    expect(this.displayAssignment).toBeVisible();
  }

  async todayAssignment() {
    await this.allAssignmentButton.click();
    expect(this.displayAssignment).toBeVisible();
  }
}
