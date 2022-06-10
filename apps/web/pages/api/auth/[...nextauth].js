import NextAuth from "next-auth";
import Google from "next-auth/providers/google";

const options = {
  providers: [
    Google({
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    }),
  ],
  database: process.env.NEXT_PUBLIC_DATABASE_URL,
  session: {
    jwt: true,
  },
  callbacks: {
    async jwt({ token, user, account, profile, isNewUser }) {
      const isSignIn = user ? true : false;

      if (account) {
        token.accessToken = account.access_token;
      }
      if (isSignIn) {
        const response = await fetch(
          `${process.env.NEXT_PUBLIC_API_URL}/auth/${account.provider}/callback?access_token=${account?.access_token}`
        );
        const data = await response.json();

        token.jwt = data.jwt;
        token.id = data.user.id;
      }

      console.log(token, user, profile, "Token data in [...nextauth.js]");
      return token;
    },
    async session({ session, token, user }) {
      session.jwt = token.jwt;
      session.id = token.id;

      console.log(session, user, token, "Session data in [...nextauth.js]");
      return session;
    },
    async redirect(url, _baseUrl) {
      if (url == "/home") {
        return Promise.resolve("/");
      }

      return Promise.resolve("/");
    },
  },
};

const Auth = (req, res) => NextAuth(req, res, options);

export default Auth;
