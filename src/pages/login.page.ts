import { userInfo } from 'os';
import { CartPage } from '../../src/pages/cart.page';
import { HomePage } from '../../src/pages/home.page';
import { ProductsPage } from '../../src/pages/products.page';
import { expect, Page, test, Locator } from '@playwright/test';

export class LoginPage {
    private loginInput: Locator;
    private passwordLoginInput: Locator;
    private loginButton: Locator;
    private registerNameInput: Locator;
    private emailRegisterInput: Locator;
    private signUpButton: Locator;
    private loginError: Locator;

    constructor(private page: Page) {
        this.loginInput = page.getByTestId("login-email");
        this.passwordLoginInput = this.page.getByLabel("password");
        this.loginButton = this.page.getByRole("button", { name: "login-button" });
        this.registerNameInput = this.page.getByPlaceholder("Name");
        this.emailRegisterInput = this.page.getByPlaceholder("Email Address");
        this.signUpButton = this.page.getByRole("button", { name: "submit"});
        this.loginError = this.page.getByText('Your email or password is incorrect!');
    }

    async register(userId: string, userEmail: string, userPassword: string){
        await this.registerNameInput.fill(userId);
        await this.emailRegisterInput.fill(userEmail);
    }

    async login(userId: string, userPassword: string): Promise<void> {
        await this.loginInput.fill(userId);
        await this.passwordLoginInput.fill(userPassword);
        await this.loginButton.click();
    }
    async loginWithoutPassword(userId: string) {
    await this.loginInput.fill(userId);
}

    getLoginError() {
    return this.page.getByText('Your email or password is incorrect!');
}
}