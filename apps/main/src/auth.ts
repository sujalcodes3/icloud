import NextAuth from "next-auth";

import GitHub from "next-auth/providers/github";
import { DrizzleAdapter } from "@auth/drizzle-adapter";

import db from "./db/db";

export const { handlers, auth, signOut, signIn } = NextAuth({
    providers: [GitHub],
    adapter: DrizzleAdapter(db),
    callbacks: {
        async session({ session, user }) {
            session.user.id = user.id;
            return session;
        },
    },
});
