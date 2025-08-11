# Vercel Deployment Checklist

## ✅ Pre-Deployment Fixes Applied

1. **Created `vercel.json`** - Optimized for serverless deployment
2. **Centralized Prisma Client** - Created `src/lib/prisma.js` to prevent connection issues
3. **Updated all server actions** - Replaced individual PrismaClient instances with centralized one
4. **Enhanced Next.js config** - Added proper configuration for serverless environment
5. **Updated package.json** - Added Vercel-specific build script
6. **Fixed layout error handling** - Added try-catch for user authentication in layout
7. **Updated Prisma schema** - Added `directUrl` for serverless compatibility

## 🔧 Environment Variables Required

Make sure these are set in your Vercel dashboard:

### Database
- `DATABASE_URL` - Your PostgreSQL connection string
- `DIRECT_URL` - Same as DATABASE_URL (required for Prisma in serverless)

### Authentication
- `JWT_SECRET` - A long, random string for JWT signing

### Stripe (if using payments)
- `STRIPE_SECRET_KEY` - Your Stripe secret key
- `STRIPE_PUBLISHABLE_KEY` - Your Stripe publishable key

### Application
- `NEXT_PUBLIC_BASE_URL` - Your Vercel deployment URL (e.g., https://your-app.vercel.app)
- `NODE_ENV` - Set to "production"

## 🗄️ Database Setup

1. **Set up PostgreSQL database** (Vercel Postgres, Supabase, Neon, etc.)
2. **Run migrations**: The build process will handle this with `prisma db push`
3. **Seed data** (optional): Run `npm run db:seed` after deployment

## 🚀 Deployment Steps

1. **Push to GitHub** - Ensure all changes are committed
2. **Connect to Vercel** - Link your GitHub repository
3. **Set environment variables** - Add all required variables in Vercel dashboard
4. **Deploy** - Vercel will use the `vercel-build` script automatically

## 🔍 Post-Deployment Verification

1. **Check build logs** - Ensure no errors during build
2. **Test database connection** - Verify Prisma can connect
3. **Test authentication** - Try signing up/logging in
4. **Test core features** - Booking, therapist search, etc.
5. **Check console logs** - Monitor for any runtime errors

## 🐛 Common Issues & Solutions

### Database Connection Issues
- Ensure `DIRECT_URL` is set
- Check database allows connections from Vercel
- Verify connection string format

### Build Failures
- Check all environment variables are set
- Ensure database is accessible
- Verify Prisma schema is valid

### Runtime Errors
- Check Vercel function logs
- Monitor database connection limits
- Verify JWT_SECRET is set

## 📞 Support

If you encounter issues:
1. Check Vercel deployment logs
2. Verify environment variables
3. Test database connectivity
4. Check browser console for client-side errors
