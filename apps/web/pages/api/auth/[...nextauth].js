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
        token.isNewUser = isNewUser;

        // Make a Update query to the strapi API endpoint to update the users collection
        await fetch(
          `${process.env.NEXT_PUBLIC_API_URL}/users/${data.user.id}`,
          {
            method: "PUT",
            body: JSON.stringify({
              firstName: `${token.name.split(" ")[0]}`,
              lastName: `${token.name.split(" ")[1]}`,
              picture: `${token.picture}`,
            }),
            headers: {
              Authorization: `Bearer ${data.jwt}`,
              "Content-Type": "application/json",
            },
          }
        )
          .then((data) => data.json())
          .then((json) => {
            console.log("Returned data from PUT", json);
            token.firstName = json.firstName;
            token.lastName = json.lastName;
            token.picture = json.picture;
            token.phone = json.phone;
          });
      }

      console.log(token, "Token data in [...nextauth.js]");
      return token;
    },
    async session({ session, token, user }) {
      session.jwt = token.jwt;
      session.user.id = token.id;
      session.user.firstName = token.firstName;
      session.user.lastName = token.lastName;
      session.user.picture = token.picture;
      session.user.phone = token.phone;

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
