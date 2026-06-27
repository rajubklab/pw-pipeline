import { Page } from "@playwright/test";

export class UserPageModel {
  private page: Page;
  constructor(page: Page) {
    this.page = page;
  }

  async goto() {
    await this.page.goto("/user");
  }

  async waitForTitle() {
    await this.page.waitForSelector("h1");
  }

  async getTitle() {
    return await this.page.textContent("h1");
  }

  async waitFiveSeconds() {
    await this.page.waitForTimeout(5000);
  }
}
