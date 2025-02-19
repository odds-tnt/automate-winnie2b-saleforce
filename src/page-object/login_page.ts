import { Locator, Page, expect } from "@playwright/test";
import { error } from "console";

export class LoginPageSaleForce {
    readonly page:Page
    readonly email_user:Locator
    readonly password_user:Locator
    readonly summit_login:Locator
    readonly error_user:Locator
    readonly error_password:Locator
    

    constructor (page:Page){
        this.page = page
        this.email_user = page.locator('#username')
        this.password_user = page.locator('#password')
        this.summit_login = page.getByRole('button', { name: 'Login' })
        this.error_user = page.locator('//*[@id="kc-form-login"]/div/div/div[2]/span')
        this.error_password = page.locator('//*[@id="kc-form-login"]/div/div/div[3]/span')

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
        await expect(this.page).toHaveURL('https://sales.uat.winnie2b.com/assignment/all-assignment')
    }

    async CheckLoginWinnie2bSaleForceSuccessForMyAssign(){
        await expect(this.page).toHaveURL('https://sales.uat.winnie2b.com/assignment/my-assignment')
    }

    async CheckErrorWhenFillWrongUserOrEmthpyField(){
        await expect(this.error_user).toBeVisible();
        // expect(() => {
        //     throw new Error(' กรุณากรอกอีเมลหรือชื่อผู้ใช้')
        //   }).toThrowError(' กรุณากรอกอีเมลหรือชื่อผู้ใช้')
    }

    async CheckErrorWhenFillWrongPassWordOrEmthpyField(){
        await expect(this.error_password).toBeVisible();
        // expect(() => {
        //     throw new Error(' กรุณากรอกรหัสผ่าน')
        //   }).toThrowError(' กรุณากรอกรหัสผ่าน')
    }
}