import { http, HttpResponse } from "msw";
import { test } from "../fixture/testFixture";
import { server } from "../mock-server/server";

test.describe("User Page", () => {
  test.beforeAll(async () => {
    server.listen({ onUnhandledRequest: "bypass" });
  });
  test.beforeEach(async () => {
    server.resetHandlers();
  });

  test.afterAll(async () => {
    server.close();
  });

  test("should display the title from the API", async ({ userPage }) => {
    server.use(
      http.get("https://jsonplaceholder.typicode.com/todos/1", () => {
        return HttpResponse.json({
          userId: 1,
          id: 1,
          title: "HELLO WORLD",
          completed: false,
        });
      }),
    );
    await userPage.goto();
    await userPage.waitForTitle();
    const title = await userPage.getTitle();
    // await userPage.waitFiveSeconds();
    test.expect(title).toBe("HELLO WORLD");
  });
});
