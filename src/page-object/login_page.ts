import { Locator, Page, expect } from "@playwright/test";

export class LoginPageSaleForce {
    readonly page:Page
    readonly email_user:Locator
    readonly password_user:Locator
    readonly summit_login:Locator

    constructor (page:Page){
        this.page = page
        this.email_user = page.locator('#username')
        this.password_user = page.locator('#password')
        this.summit_login = page.locator('//*[@id="kc-login"]')
    }

    async FillEmailForLoginWinnie2bSaleForce(Email:string){
        await this.email_user.fill(Email)
    }

    async FillPassWordForLoginWinnie2bSaleForce(password:string){
        await this.password_user.fill(password)
    }

    async ClickSubmitForLoginWinnie2bSaleForce(){
        await this.summit_login.click()
    }

    async CheckLoginWinnie2bSaleForceSuccessForAllAssign(){
        await expect(this.page).toHaveURL('https://sales.dev.winnie2b.com/assignment/all-assignment')
    }

    async CheckLoginWinnie2bSaleForceSuccessForMyAssign(){
        await expect(this.page).toHaveURL('https://sales.dev.winnie2b.com/assignment/my-assignment')
    }

    async CheckErrorWhenFillWrongUserOrEmthpyField(){
        expect(() => {
            throw new Error('Invalid username or password.');
          }).toThrowError();
    }

    async CheckErrorWhenFillWrongPassWordOrEmthpyField(){
        expect(() => {
            throw new Error('Invalid username or password.');
          }).toThrowError();
    }
}