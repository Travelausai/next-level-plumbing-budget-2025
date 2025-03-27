# Vercel Deployment Guide

## 1. Sign Up/Sign In to Vercel

1. Go to [Vercel](https://vercel.com)
2. Sign up or sign in (you can use your GitHub account for easy integration)

## 2. Import Your GitHub Repository

1. Click "Add New..." → "Project"
2. Connect to your GitHub account if prompted
3. Find and select the `next-level-plumbing-budget-2025` repository
4. Click "Import"

## 3. Configure Project Settings

1. Configure your project:
   - Framework Preset: Select "Other" (since this is a static HTML site)
   - Build and Output Settings: Leave as default
   - Root Directory: Leave as default (should be `/`)
   - Environment Variables: None needed for this project

2. Click "Deploy"

## 4. Test Your Deployed Site

1. Once deployment is complete, Vercel will provide you with a URL (typically something like `https://next-level-plumbing-budget-2025.vercel.app`)
2. Visit the URL to ensure everything looks correct
3. Test the calculator functionality
4. Test the form submission to ensure it connects to your Go High Level CRM

## 5. Add a Custom Domain (Optional)

1. In Vercel dashboard, go to your project settings
2. Click "Domains"
3. Add your custom domain
4. Follow the DNS configuration instructions

## 6. Vercel Deployment Benefits

- **Automatic HTTPS**: Secure your site with SSL certificates
- **Global CDN**: Fast loading times worldwide
- **Continuous Deployment**: Any changes pushed to GitHub will automatically be deployed
- **Analytics**: Basic analytics for your site
- **Serverless Functions**: If you need to add backend functionality in the future