# Atlanta Overseas Education - Project Handover & Deployment Guide

This document outlines the final steps to deploy the application and execute a "clean exit," ensuring all infrastructure, billing, and code ownership are fully transferred to the client.

## Part 1: Deployment (Vercel)

Vercel is the recommended hosting platform for Next.js applications.

### 1. Push Code to GitHub
Ensure all your final changes are committed and pushed to a remote repository.
```bash
git add .
git commit -m "Final production build ready for deployment"
git branch -M main
git remote add origin https://github.com/YOUR_USERNAME/atlanta-overseas-web.git
git push -u origin main
```

### 2. Deploy on Vercel
1. Log in to [Vercel](https://vercel.com/) using your GitHub account.
2. Click **Add New** -> **Project**.
3. Import the `atlanta-overseas-web` repository.
4. Leave framework settings as default (Next.js).

### 3. Configure Environment Variables
Before clicking "Deploy", expand the **Environment Variables** section and copy/paste all variables from your local `.env.local` file:
*   `ATLANTA_GROQ_KEY`
*   `NEXT_PUBLIC_SUPABASE_URL`
*   `NEXT_PUBLIC_SUPABASE_ANON_KEY`
*   `SUPABASE_SERVICE_ROLE_KEY`
*   `VERIFY_TOKEN`
*   `PHONE_NUMBER_ID`
*   `WHATSAPP_TOKEN`

### 4. Build and Launch
1. Click **Deploy**.
2. Once the build succeeds, Vercel will provide a live `.vercel.app` URL. 
3. *Optional:* Go to the project settings in Vercel under **Domains** to attach the client's custom `.com` domain.

---

## Part 2: The "Clean Exit" Checklist

Execute these steps chronologically to transfer all assets and remove your personal liability/billing from the project.

### Step 1: AI Provider (Groq)
1. Instruct the client to create an account at [Groq Cloud](https://console.groq.com/).
2. Have them generate a new API key.
3. In your Vercel Project Dashboard, navigate to **Settings** -> **Environment Variables**.
4. Replace the existing `ATLANTA_GROQ_KEY` with the client's new key.
5. **Redeploy** the application in Vercel for the new key to take effect.
6. **Clean Exit:** Go to your personal Groq dashboard and delete the development key you were using.

### Step 2: Database (Supabase)
1. Go to your Supabase Dashboard -> **Organization Settings** -> **Team**.
2. Invite the client's email address and assign them the **Owner** role.
3. Once the client accepts the invitation and configures their billing details:
4. **Clean Exit:** Click the three dots next to your name and select **Leave Organization**. You will lose access to the database and chat logs.

### Step 3: Meta & WhatsApp Developer Account
1. Go to the [Meta Business Settings](https://business.facebook.com/settings).
2. Under **Users** -> **People**, click **Invite People**.
3. Enter the client's email and grant them **Full Control (Admin)** of the Business Portfolio.
4. Confirm they have added a payment method under **Billing & Payments** (required for messages beyond the free tier).
5. **Clean Exit:** Click on your name in the "People" list and select **Remove from Business Portfolio**.

### Step 4: Hosting & Code (Vercel & GitHub)
*   **Vercel Transfer:** In the Vercel Project Settings, navigate to **Advanced** -> **Transfer Project**. Enter the client's Vercel account email. Once accepted, the project moves to their dashboard.
*   **GitHub Transfer:** In the GitHub Repository Settings, navigate to **General** -> scroll down to the **Danger Zone** -> click **Transfer Ownership** and enter the client's GitHub username.

### Step 5: Local Machine Cleanup
1. Open the `.env.local` file on your computer.
2. **Clean Exit:** Delete the actual values, leaving only the variable names (e.g., `ATLANTA_GROQ_KEY=`). This prevents accidental leakage of production credentials if the local folder is ever moved or uploaded.

---
*Following this guide ensures the client holds 100% ownership of their infrastructure and you execute a secure, professional handover.*