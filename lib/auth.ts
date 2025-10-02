import ForgotPasswordEmail from '@/components/emails/reset-password';
import { db } from '@/db/drizzle';
import { schema } from '@/db/schema';
import { betterAuth } from 'better-auth';
import { drizzleAdapter } from 'better-auth/adapters/drizzle';
import { nextCookies } from 'better-auth/next-js';
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY as string);

export const auth = betterAuth({
  emailAndPassword: {
    enabled: true,
    sendResetPassword: async ({ user, url }) => {
      await resend.emails.send({
        from: 'onboarding@resend.dev', // testing address
        to: user.email,
        subject: 'Reset your password',
        react: ForgotPasswordEmail({
          resetUrl: url,
          userEmail: user.email,
          username: user.name,
        }),
      });
    },
  },
  socialProviders: {
    google: {
      clientId: process.env.GOOGLE_CLIENT_ID as string,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET as string,
    },
  },
  database: drizzleAdapter(db, {
    provider: 'pg',
    schema,
  }),
  plugins: [nextCookies()],
});
