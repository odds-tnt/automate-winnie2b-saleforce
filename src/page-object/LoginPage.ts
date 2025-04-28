import { Locator, Page, expect } from "@playwright/test";
import { urlSaleForcecEnvUAT } from "../test-data/url-saleforce/url-saleforce";

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

  async loginWinnie2bSaleForce(email: string, password: string) {
    await this.email.fill(email);
    await this.password.fill(password);
    // DON'T forget to change it back
    // await this.submitButton.click();
    await this.page.locator("#kc-login").click();
  }

  async checkLoginSuccessForAllAssignmentRole() {
    await expect(this.page).toHaveURL(
      urlSaleForcecEnvUAT.saleForce_Allassign_HomePage
    );
  }

  async checkLoginSuccessForMyAssignmentRole() {
    await expect(this.page).toHaveURL(
      urlSaleForcecEnvUAT.saleForce_Myassign_HomePage
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
