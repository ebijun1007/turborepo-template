
# About

This is a web application template repository designed for hosting on Cloudflare. It uses Turborepo to manage a Remix frontend application and a Hono backend application.


# Prepare

1. Replace the project name with the current directory name or another string of your choice.
2. Install npm packages

```
find . -type f -not -path '*/\.*' -exec sed -i "s/turborepo-template/$(basename "$PWD")/g" {} +
pnpm i
```


# Architecture

WIP