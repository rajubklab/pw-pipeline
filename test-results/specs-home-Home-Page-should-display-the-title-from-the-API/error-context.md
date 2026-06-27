# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: specs/home.spec.ts >> Home Page >> should display the title from the API
- Location: e2e/specs/home.spec.ts:17:7

# Error details

```
Error: expect(received).toBe(expected) // Object.is equality

Expected: "RAJU BK"
Received: "monkey"
```

# Test source

```ts
  1  | import { http, HttpResponse } from "msw";
  2  | import { test } from "../fixture/testFixture";
  3  | import { server } from "../mock-server/server";
  4  | 
  5  | test.describe("Home Page", () => {
  6  |   test.beforeAll(async () => {
  7  |     server.listen({ onUnhandledRequest: "bypass" });
  8  |   });
  9  |   test.beforeEach(async () => {
  10 |     server.resetHandlers();
  11 |   });
  12 | 
  13 |   test.afterAll(async () => {
  14 |     server.close();
  15 |   });
  16 | 
  17 |   test("should display the title from the API", async ({ homePage }) => {
  18 |     server.use(
  19 |       http.get("https://jsonplaceholder.typicode.com/todos/1", () => {
  20 |         return HttpResponse.json({
  21 |           userId: 1,
  22 |           id: 1,
  23 |           title: "RAJU BK",
  24 |           completed: false,
  25 |         });
  26 |       }),
  27 |     );
  28 |     await homePage.goto();
  29 |     await homePage.waitForTitle();
  30 |     const title = await homePage.getTitle();
  31 |     // await homePage.waitFiveSeconds();
> 32 |     test.expect(title).toBe("RAJU BK");
     |                        ^ Error: expect(received).toBe(expected) // Object.is equality
  33 |   });
  34 | });
  35 | 
```