# Quick Vercel Environment Setup

## Copy these exact values to your Vercel Environment Variables:

### 1. Database (Already provided)
```
DATABASE_URL=postgresql://articles_owner:6BEHNJ9cruiA@ep-spring-feather-a1o7aqlh-pooler.ap-southeast-1.aws.neon.tech/articles?sslmode=require&channel_binding=require
DIRECT_URL=postgresql://articles_owner:6BEHNJ9cruiA@ep-spring-feather-a1o7aqlh-pooler.ap-southeast-1.aws.neon.tech/articles?sslmode=require&channel_binding=require
```

### 2. Authentication
```
JWT_SECRET=cookies
```

### 3. Application (Update with your actual Vercel URL)
```
NEXT_PUBLIC_BASE_URL=https://your-app-name.vercel.app
NODE_ENV=production
```

### 4. Stripe (Get from your Stripe dashboard)
```
STRIPE_SECRET_KEY=sk_test_your_stripe_secret_key_here
STRIPE_PUBLISHABLE_KEY=pk_test_your_stripe_publishable_key_here
```

## Steps to add in Vercel:

1. Go to your Vercel project dashboard
2. Click "Settings" tab
3. Click "Environment Variables" in the left sidebar
4. Add each variable above
5. Make sure to select "Production" environment for all variables
6. Click "Save"

## After adding environment variables:

1. Redeploy your project in Vercel
2. The build should now succeed
3. Test the application functionality

## Need Stripe keys?

If you don't have Stripe set up yet:
1. Go to https://stripe.com
2. Create an account
3. Go to Developers > API keys
4. Copy the test keys (start with `sk_test_` and `pk_test_`)
