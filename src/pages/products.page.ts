import { Page } from '@playwright/test';

export class ProductsPage {
  url = ' /products';
  constructor(private page: Page) {}
  async goto(): Promise<void> {
    await this.page.goto(this.url);
  }

  async title(): Promise<string> {
    return this.page.title();
  }
}
