import { test, expect } from "../fixture/testFixture";

test.describe("User Page", () => {
  test("should display the title from the API", async ({ userPage }) => {
    await userPage.goto();
    await userPage.waitForTitle();
    const title = await userPage.getTitle();
    // await userPage.waitFiveSeconds();
    expect(title).toBe("monkey dummy");
  });
});
