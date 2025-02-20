import { Locator, Page, expect } from "@playwright/test";
import { error } from "console";

export class LoginPageSaleForce {
  readonly page: Page;
  readonly email: Locator;
  readonly password: Locator;
  readonly submitButton: Locator;
  readonly emailErrorLabel: Locator;
  readonly passwordErrorLabel: Locator;

  constructor(page: Page) {
    this.page = page;
    this.email = page.locator("#username");
    this.password = page.locator("#password");
    this.submitButton = page.getByRole("button", { name: "Login" });
    this.emailErrorLabel = page.locator("#username ~ .login-validate");
    this.passwordErrorLabel = page.locator("#password ~ .login-validate");
  }

  async FillEmailForLoginWinnie2bSaleForce(email: string) {
    await this.email.fill(email);
  }

  async FillPassWordForLoginWinnie2bSaleForce(password: string) {
    await this.password.fill(password);
  }

  async ClickSubmitForLoginWinnie2bSaleForce() {
    await this.submitButton.click();
  }

  async CheckLoginWinnie2bSaleForceSuccessForAllAssign() {
    await expect(this.page).toHaveURL(
      "https://sales.uat.winnie2b.com/assignment/all-assignment"
    );
  }

  async CheckLoginWinnie2bSaleForceSuccessForMyAssign() {
    await expect(this.page).toHaveURL(
      "https://sales.uat.winnie2b.com/assignment/my-assignment"
    );
  }

  async checkEmailIsEmpty() {
    const content = await this.emailErrorLabel.textContent();
    expect(content?.trim().replaceAll("&nbsp;", "")).toBe(
      "Please enter your email or username"
    );
  }

  async checkPasswordIsEmpty() {
    const content = await this.passwordErrorLabel.textContent();
    expect(content?.trim().replaceAll("&nbsp;", "")).toBe(
      "Please enter your password"
    );
  }

  async checkEmailOrPasswordInvalid() {
    const content = await this.passwordErrorLabel.textContent();
    expect(content?.trim().replaceAll("&nbsp;", "")).toBe(
      "email/username or password isn't correct"
    );
  }
}
