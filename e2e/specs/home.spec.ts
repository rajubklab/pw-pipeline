import { http, HttpResponse } from "msw";
import { test } from "../fixture/testFixture";
import { server } from "../mock-server/server";

test.describe("Home Page", () => {
  test.beforeAll(async () => {
    server.listen({ onUnhandledRequest: "bypass" });
  });
  test.beforeEach(async () => {
    server.resetHandlers();
  });

  test.afterAll(async () => {
    server.close();
  });

  test("should display the title from the API", async ({ homePage }) => {
    server.use(
      http.get("https://jsonplaceholder.typicode.com/todos/1", () => {
        return HttpResponse.json({
          userId: 1,
          id: 1,
          title: "RAJU BK",
          completed: false,
        });
      }),
    );
    await homePage.goto();
    await homePage.waitForTitle();
    const title = await homePage.getTitle();
    // await homePage.waitFiveSeconds();
    test.expect(title).toBe("RAJU BK");
  });
});
