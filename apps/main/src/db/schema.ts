import { pgTable, serial, text, timestamp } from "drizzle-orm/pg-core";

export const user = pgTable("user", {
  id: serial("id"),
});

export const notes = pgTable("notes", {
  id: serial("id").primaryKey().notNull(),
  //author: integer("author_id").references(() => user.id),
  author: text("author").notNull(),
  data: text("data"),

  createdAt: timestamp("created_at", {
    precision: 6,
    withTimezone: true,
  }).defaultNow(),

  updatedAt: timestamp("updated_at", {
    precision: 6,
    withTimezone: true,
  }).defaultNow(),
});

export type Post = typeof notes.$inferSelect;
