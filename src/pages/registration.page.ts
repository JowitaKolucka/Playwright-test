    import { userInfo } from 'os';
    import { CartPage } from '../../src/pages/cart.page';
    import { HomePage } from '../../src/pages/home.page';
    import { ProductsPage } from '../../src/pages/products.page';
    import { expect, Page, test, Locator } from '@playwright/test';
    
    export class RegistrationPage {
        private registerNameInput: Locator;
        private emailRegisterInput: Locator;
        private signUpButton: Locator;
        private newUserSignUpTitle: Locator;
        private genderCheckbox: Locator;
    
        constructor(private page: Page) {
            this.registerNameInput = this.page.getByPlaceholder("Name");
            this.emailRegisterInput = this.page.getByPlaceholder("Email Address");
            this.signUpButton = this.page.getByRole("button", { name: "submit"});
            this.newUserSignUpTitle = this.page.getByText("New User Signup!");
            this.genderCheckbox = this.page.getByRole("checkbox", {})
        }
    
    async registerOnLoginPage(userId: string, userEmail: string, userPassword: string){
        await this.registerNameInput.fill(userId);
        await this.emailRegisterInput.fill(userEmail);
    }
    //async enterAccountInformationForm(title: void, name: string, emailRegisterInput: string, date: void, firstName: string, )
}