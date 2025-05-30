import { Locator, Page, expect} from "@playwright/test";

export class AssignmentDetail{
  readonly page: Page;
  readonly startVisitButton: Locator;

  constructor(page: Page) {
    this.page = page;
    this.startVisitButton = page.getByTestId("start-visit-button");
  }

  async startVisit() {
    await this.startVisitButton.click();
  }
}
