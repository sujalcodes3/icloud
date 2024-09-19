import GitHub from "next-auth/providers/github";
import NextAuth, { NextAuthOptions } from "next-auth";

export const authOptions : NextAuthOptions = { 
    providers: [
        GitHub({ 
            clientSecret: process.env.AUTH_GITHUB_SECRET as string,
            clientId: process.env.AUTH_GITHUB_ID as string,
        }),
    ],
};

const handler = NextAuth(authOptions);

export { handler as GET, handler as POST }


