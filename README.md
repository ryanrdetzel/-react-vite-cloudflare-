# Summary

A template repo that uses tailwindcss, react, vite, and typescript to create a basic app for Cloudflare Pages.

## Branches
- w-shadcnui - Added shadcnui components

## Run dev mode locally 
npx vite dev

## ShadeCN UI
If you want to use shadcnui components, you can follow the steps below.

### Add shadui components 
npx shadcn@latest add button

## Deploy
You need a Cloudflare account and wrangler must be logged in

Edit the project name in the wrangler.toml file first

```
npx vite build
npx wrangler pages deploy
```

The first time you run this you'll be asked to create a project. Accept.
