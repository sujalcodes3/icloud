import { z } from "zod";
//import { generateOpenApiDocument } from "better-trpc-openapi";

import { eq } from "drizzle-orm";

import { baseProcedure, router } from "./trpc";

import { entities, notes } from "@/db/schema";
import db from "@/db/db";

export const appRouter = router({
  deleteNote: baseProcedure
    .meta({
      openapi: {
        method: "DELETE",
        path: "/delete-note/{id}",
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
        path: "/add-note/{author_id}/{note}",
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
        path: "/get-notes/{id}",
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

  addImage: baseProcedure
    .meta({
      openapi: {
        method: "POST",
        path: "/add-image/{id}/{url}",
      },
    })
    .input(
      z.object({
        id: z.string(),
        url: z.string(),
        title: z.string(),
      }),
    )
    .mutation(async (opts) => {
      await db.insert(entities).values({
        uploadedBy: opts.input.id,
        type: "image",
        url: opts.input.url,
        title: opts.input.title,
      });
    }),
  addPdfFile: baseProcedure
    .meta({
      openapi: {
        method: "POST",
        path: "/add-pdffile/{id}/{url}",
      },
    })
    .input(
      z.object({
        id: z.string(),
        url: z.string(),
        title: z.string(),
      }),
    )
    .mutation(async (opts) => {
      await db.insert(entities).values({
        uploadedBy: opts.input.id,
        type: "pdf",
        url: opts.input.url,
        title: opts.input.title,
      });
    }),
  getPdfsByUser: baseProcedure
    .meta({
      openapi: {
        method: "GET",
        path: "/get-files/{id}",
      },
    })
    .input(
      z.object({
        id: z.string(),
      }),
    )
    .query(async (opts) => {
      return await db.query.entities.findMany({
        columns: {
          id: true,
          url: true,
          title: true,
        },
        where: (entities, { eq }) =>
          eq(entities.uploadedBy, opts.input.id) && eq(entities.type, "pdf"),
      });
    }),
  getImagesByUser: baseProcedure
    .meta({
      openapi: {
        method: "GET",
        path: "/get-images/{id}",
      },
    })
    .input(
      z.object({
        id: z.string(),
      }),
    )
    .query(async (opts) => {
      return await db.query.entities.findMany({
        columns: {
          id: true,
          url: true,
          title: true,
        },
        where: (entities, { eq }) =>
          eq(entities.uploadedBy, opts.input.id) && eq(entities.type, "image"),
      });
    }),
});

export type AppRouter = typeof appRouter;
