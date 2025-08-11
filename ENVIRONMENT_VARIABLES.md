# Environment Variables for Vercel Deployment

## Required Environment Variables

### Database Configuration
```
DATABASE_URL="postgresql://articles_owner:6BEHNJ9cruiA@ep-spring-feather-a1o7aqlh-pooler.ap-southeast-1.aws.neon.tech/articles?sslmode=require&channel_binding=require"
DIRECT_URL="postgresql://articles_owner:6BEHNJ9cruiA@ep-spring-feather-a1o7aqlh-pooler.ap-southeast-1.aws.neon.tech/articles?sslmode=require&channel_binding=require"
```

### JWT Configuration
```
JWT_SECRET="cookies"
```

### Stripe Configuration (Required for payments)
```
STRIPE_SECRET_KEY="sk_test_..."
STRIPE_PUBLISHABLE_KEY="pk_test_..."
```

### Application Configuration
```
NEXT_PUBLIC_BASE_URL="https://your-app.vercel.app"
NODE_ENV="production"
```

## Setting up Environment Variables in Vercel

1. Go to your Vercel dashboard
2. Select your project
3. Go to Settings > Environment Variables
4. Add each variable above with the correct values

## Database Setup

You're using Neon PostgreSQL which is perfect for Vercel deployment!

## Important Notes

- `DIRECT_URL` is required for Prisma in serverless environments (use same value as DATABASE_URL)
- `NEXT_PUBLIC_BASE_URL` must match your Vercel deployment URL
- `JWT_SECRET` should be a long, random string (consider using a more secure secret in production)
- Make sure your database allows connections from Vercel's IP ranges
- Neon automatically handles connection pooling for serverless environments
