import { z } from "zod";
//import { generateOpenApiDocument } from "better-trpc-openapi";

import { eq } from "drizzle-orm";

import { baseProcedure, router } from "./trpc";

import { notes } from "@/db/schema";
import db from "@/db/db";

export const appRouter = router({
    deleteNote: baseProcedure
        .meta({
            openapi: {
                method: "DELETE",
                path: "/delete-note/:id",
            },
        })
        .input(z.object({ id: z.number() }))
        .mutation(async (opts) => {
            await db.delete(notes).where(eq(notes.id, opts.input.id));
        }),
    addNote: baseProcedure
        .meta({
            openapi: {
                method: "POST",
                path: "/add-note",
            },
        })
        .input(
            z.object({
                authorId: z.string(),
                note: z.string(),
            }),
        )
        .mutation(async (opts) => {
            await db.insert(notes).values({
                author: opts.input.authorId,
                data: opts.input.note,
            });
        }),

    getNotesByUser: baseProcedure
        .meta({
            openapi: {
                method: "GET",
                path: "/get-notes/:id",
            },
        })
        .input(
            z.object({
                id: z.string(),
            }),
        )
        .query(async (opts) => {
            return await db.query.notes.findMany({
                where: (notes, { eq }) => eq(notes.author, opts.input.id),
            });
        }),
});

export type AppRouter = typeof appRouter;
