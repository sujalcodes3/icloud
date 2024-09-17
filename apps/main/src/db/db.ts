import { config } from "dotenv";
import { drizzle } from "drizzle-orm/postgres-js";
import postgres from "postgres";

import * as schema from "./schema";

config({ path: ".env" });

const connectionString: string = process.env.DB_URL as string;

const client = postgres(connectionString, { prepare: false, max: 1 });

const db = drizzle(client, { schema });

export default db;
