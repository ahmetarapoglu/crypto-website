import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";

export const authOptions = {
  providers: [
    CredentialsProvider({
      async authorize(credentials) {
        try {
          // base url
          const baseUrl = "hostURL";
          const response = await fetch(baseUrl + "api/Login", {
            method: "POST",
            body: JSON.stringify({
              UserName: credentials.UserName,
              Password: credentials.Password,
            }),
            headers: {
              "Content-Type": "application/json",
            },
          });

          const data = await response.json();

          console.log("data ___");
          console.log(data);

          if (data?.status === true) {
            // returning token to set in session
            return {
              ...data?.description,
            };
          }

          throw new Error("invalid username or password");
        } catch (err) {
          console.error("err");
          console.error(err.toString());
          throw new Error("invalid username or password");
        }
      },
    }),
  ],
  secret: process.env.AUTH_SECRET,
  callbacks: {
    // called after sucessful sigin
    jwt: async ({ token, user }) => {
      console.log("jwt function");
      console.log("token");
      console.log(token);
      console.log("user");
      console.log(user);
      if (user) {
        token = user;
      }
      return token;
    },
    // called whenever session is checked
    session: async ({ session, token }) => {
      console.log("session function");
      console.log("session");
      console.log(session);
      console.log("token");
      console.log(token);
      session.user = token; // Setting token in session
      return session;
    },
    redirect: async ({ url, baseUrl }) => {
      console.log("Redirect Fucntion");
      console.log("url");
      console.log(url);
      console.log("baseUrl");
      console.log(baseUrl);
      // Allows relative callback URLs
      if (url.startsWith("/")) return `${baseUrl}${url}`;
      // Allows callback URLs on the same origin
      else if (new URL(url).origin === baseUrl) return url;
      return baseUrl;
    },
  },
  session: {
    jwt: true,
  },
  pages: {
    signIn: "/auth/login", // Need to define custom login page (if using)
  },
};

export default NextAuth(authOptions);
