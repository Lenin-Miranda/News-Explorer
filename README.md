# News Explorer

React application for searching news and managing saved articles. The interface includes search results, authentication modals, protected saved-article views and responsive navigation.

**Backend:** [News-BackEnd](https://github.com/Lenin-Miranda/News-BackEnd).

## Run locally

Requires Node.js, npm and the backend for authentication, search and saved articles.

```bash
git clone https://github.com/Lenin-Miranda/News-Explorer.git
cd News-Explorer
npm install
npm run dev
```

Open the URL printed by Vite (port 3000, with the configured `/News-Explorer/` base path). Start the API separately at `http://localhost:3001`.

## API configuration

[src/utils/Api.js](src/utils/Api.js) and [src/utils/NewsApi.js](src/utils/NewsApi.js) select the backend URL based on development/production mode. Configure NewsAPI credentials in the backend; `VITE_NEWS_API_KEY` is not read by this frontend.

The saved-article functions call real backend endpoints with a bearer token. Some legacy mock helpers remain in the source, so review the active call sites when extending the app.

## Commands

| Command | Purpose |
| --- | --- |
| `npm run dev` | Development server |
| `npm run lint` | ESLint |
| `npm run build` | Build into `dist/` |
| `npm run preview` | Preview the built site |
| `npm run deploy` | Publish `dist/` through gh-pages; predeploy builds it |

Deployment requires repository write access and an appropriate backend URL. The deploy command publishes the site.

## Project structure

- `src/components/`: search, article cards, navigation and account forms.
- `src/pages/`: app composition.
- `src/utils/`: API integration and shared helpers.
- `src/assets/`: images and other assets.

## Verify

Run lint/build, then test sign-up, sign-in, keyword search and saving/removing an article with a local API. No automated test script is defined.
