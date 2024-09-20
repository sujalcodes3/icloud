import { initTRPC } from "@trpc/server";
import { OpenApiMeta } from "better-trpc-openapi";

const t = initTRPC.meta<OpenApiMeta>().create();

export const router = t.router;
export const baseProcedure = t.procedure;
