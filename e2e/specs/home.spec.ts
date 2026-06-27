import { http, HttpResponse } from "msw";
import { expect, test } from "../fixture/testFixture";

test.describe("Home Page", () => {
  test("should display the title from the API", async ({ homePage }) => {
    await homePage.goto();
    await homePage.waitForTitle();
    const title = await homePage.getTitle();
    // await homePage.waitFiveSeconds();
    expect(title).toBe("monkey");
  });
});
