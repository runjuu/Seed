import { Hono } from 'hono'
import { HELLO } from "@seed-sdk/types";

const app = new Hono()

app.get('/', (c) => {
  return c.text(HELLO)
})

export default app
