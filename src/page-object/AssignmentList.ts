import { Locator, Page, expect } from "@playwright/test";
import { AssignmentDetail } from "./AssignmentDetail";

export class AssignmentList {
  readonly page: Page;
  readonly allAssignmentButton: Locator;
  readonly todayAssignmentButton: Locator;
  readonly displayAssignment: Locator;
  readonly displayVisitDate: Locator;
  readonly assignmentCard: Locator;
  readonly customerAssignment: Locator;

  constructor(page: Page) {
    this.page = page;
    this.allAssignmentButton = page.getByTestId("all-button");
    this.todayAssignmentButton = page.getByTestId("today-button");
    this.displayAssignment = page.getByTestId("assignment-card").first();
    this.assignmentCard = page
      .locator('[data-testid="customer-label"]')
      .first();
    this.customerAssignment = page
      .locator('[data-testid="customer-label"]')
      .filter({ hasText: "CUSTOMER" })
      .first();
    this.displayVisitDate = page.getByTestId("visit-date");
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
    await this.assignmentCard.click();
    expect(this.displayVisitDate).toBeVisible();
  }

  async goToCustomerAssignmentDetail() {
    await this.todayAssignmentButton.click();
    await this.customerAssignment.click();
    expect(this.displayVisitDate).toBeVisible();
  }
}
