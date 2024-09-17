import { z } from "zod";
import { baseProcedure, router } from "./trpc";

import { notes } from "@/db/schema";
import  db  from "@/db/db";

export const appRouter = router({
    getTodos: baseProcedure.query(async () => {
        return await db.select().from(notes);
    }),
    addTodo: baseProcedure.input(z.string()).mutation(async (opts) => { 
        await db.insert(notes).values({ author: "sujal", data: opts.input });
    })
});

export type AppRouter = typeof appRouter;
