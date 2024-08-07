npx wrangler d1 export turborepo-template --remote --output=./database.sql
rm -rf .wrangler/state/v3/d1
npx wrangler d1 execute turborepo-template --local --file=./database.sql