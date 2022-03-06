import NextAuth from 'next-auth'
import GoogleAuthProvider from 'next-auth/providers/google'

export default NextAuth({
  pages: {
    signIn: '/login'
  },
  providers: [
    GoogleAuthProvider({
      clientId: process.env.GOOGLE_AUTH_CLIENT_ID,
      clientSecret: process.env.GOOGLE_AUTH_CLIENT_SECRET
    })
  ]
})
