import { test as base } from "@playwright/test";
import { HomePageModel } from "../pageModel/homePageModel";
import { UserPageModel } from "../pageModel/userPageModel";

export const test = base.extend<{
  homePage: HomePageModel;
  userPage: UserPageModel;
}>({
  homePage: async ({ page }, use) => {
    const homePage = new HomePageModel(page);
    await use(homePage);
  },
  userPage: async ({ page }, use) => {
    const userPage = new UserPageModel(page);
    await use(userPage);
  },
});

export { expect } from "@playwright/test";
