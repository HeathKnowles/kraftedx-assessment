import Google from "next-auth/providers/google";
import Credentials from "next-auth/providers/credentials";
import type { NextAuthOptions } from "next-auth";

export const authOptions: NextAuthOptions = {
    providers: [
        Google({
            clientId: process.env.GOOGLE_CLIENT_ID!,
            clientSecret: process.env.GOOGLE_CLIENT_SECRET!,
        }),
        Credentials({
            name: "Credentials",
            credentials: {
                email: {
                    label:"Email",
                    type: "email"
                },
                passsword: {
                    label: "Password",
                    type: "Password"
                },
            },
            async authorize(credentials) {
                // Set Up Auth
            }
        })
    ]
}