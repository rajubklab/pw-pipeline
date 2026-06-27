export const register = async () => {
  if (process.env.NEXT_RUNTIME === "nodejs") {
    const { server } = await import("./e2e/mock-server/server");
    server.listen();
  }
};
