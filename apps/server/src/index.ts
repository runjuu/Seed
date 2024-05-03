import { HELLO } from "@seed-sdk/types";
import { Hono } from "hono";

const app = new Hono();

app.get("/", (c) => {
  return c.text(HELLO);
});

export default app;
