# Summary

A template repo that uses tailwindcss, react, vite, and typescript to create a basic app for Cloudflare Pages.

Also includes
- react-query
- react-router

## Setup

After Cloning:
- Change the name in wrangler.toml

  
```
npm install vite
npm i
```
## Env

Create a new app in clerk and add the publishable key to the .env.local file

```
.env.local
VITE_CLERK_PUBLISHABLE_KEY=
```

Need to also include a production key in the .env.production file.

## Run dev mode locally 
npx vite dev

## ShadeCN UI
If you want to use shadcnui components, you can follow the steps below.

### Add shadui components 
npx shadcn@latest add button




## Config

Assuming you're running this with the api backend template you'll want to deploy the api first and then update the VITE_API_URL in the .env file to point to the api url.

```
.env.production
```

## Deploy
You need a Cloudflare account and wrangler must be logged in

Edit the project name in the wrangler.toml file first
Make sure the vars section is filled out correctly.
After you deploy the backend you'll need the correct API url in production env

```
npx vite build
npx wrangler pages deploy
```

The first time you run this you'll be asked to create a project. Accept.
