import NextAuth from 'next-auth'
// import AppleProvider from 'next-auth/providers/apple'
// import FacebookProvider from 'next-auth/providers/facebook'
// import GoogleProvider from 'next-auth/providers/google'
// import EmailProvider from 'next-auth/providers/email'
import GitHubProvider from 'next-auth/providers/github'
import mongoose from 'mongoose'
import user from '@/models/user'
import Payment from '@/models/Payment'

export const authoptions = NextAuth({
  providers: [
    // OAuth authentication providers...
    GitHubProvider({
      clientId: process.env.GITHUB_ID,
      clientSecret: process.env.GITHUB_SECRET
    }),
  //   AppleProvider({
  //     clientId: process.env.APPLE_ID,
  //     clientSecret: process.env.APPLE_SECRET
  //   }),
  //   FacebookProvider({
  //     clientId: process.env.FACEBOOK_ID,
  //     clientSecret: process.env.FACEBOOK_SECRET
  //   }),
  //   GoogleProvider({
  //     clientId: process.env.GOOGLE_ID,
  //     clientSecret: process.env.GOOGLE_SECRET
  //   }),
  //   // Passwordless / email sign in
  //   EmailProvider({
  //     server: process.env.MAIL_SERVER,
  //     from: 'NextAuth.js <no-reply@example.com>'
  //   }),
  ],
  callbacks: {
    async signIn({ user, account, profile, email, credentials }) {
    
      if (account.provider =="github") {
        //connect to database
        const client = await mongoose.connect("mongodb://localhost:27017/chai")
        const currentUser = user.findOne({email:email})
        if(!currentUser){
          const newUser = new user({
            email:profile.email,
            username: email.split("@")[0],
          })
        await newUser.save()
        }
      }
    }
  }
})

export {authoptions as GET, authoptions as POST}