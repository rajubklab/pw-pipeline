import { http, HttpResponse } from "msw";
import { userMock } from "../mocks/user.ts";

export const handlers = [
  http.get("https://jsonplaceholder.typicode.com/todos/1", (req, res, ctx) => {
    return HttpResponse.json({
      userId: 1,
      id: 1,
      title: "monkey",
      completed: false,
    });
  }),
  http.get("https://jsonplaceholder.typicode.com/users/1", (req, res, ctx) => {
    return HttpResponse.json(userMock);
  }),
];
