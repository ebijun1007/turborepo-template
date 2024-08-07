import { Hono } from "hono";
import { adminApp } from "./routes/admin";
import { webApp } from "./routes/web";

type Bindings = {
	MY_VARIABLE: string;
};

const app = new Hono<{ Bindings: Bindings }>()
	.route("/admins", adminApp)
	.route("/web", webApp);

type AppType = typeof app;

export default app;
export type { AppType };
