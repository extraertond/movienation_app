# MovieNation App

This project consists in a web application based in React to search movies and info about them.

## Run Locally
To deploy this project I recommend use Node 16 LTS, repo includes .env file because it doesn't contain sensitive information, after that run the following command:

Clone the project

```bash
  git clone https://github.com/extraertond/movienation_app.git
```

Go to the project directory

```bash
  cd movienation_app
```

Install dependencies

```bash
  npm install
```

Start the server

```bash
  npm run start
```

## Demo (click to open the video)
[![Alt text](https://i.ibb.co/HVJjwCt/image.png)](https://www.youtube.com/watch?v=Ag5hhuN2zZA)

Also you can visit the app live: https://polite-ganache-f51206.netlify.app/

## Tech Stack

**Framework:** React v18 and TypeScript, for structuring components: 

*Layout > Page > Component three*

Layout has a Router and some pages, every page has components.

This project is created and configurated from scratch with Babel and Webpack installing only required dependencies.

**RTK Query:** For make requests I used axios throught RTK Query, a library embedded in Redux Toolkit. This library allow the developer manage easily request status and automatic cache (you can test that when you visit twice a movie detail it doesn't make a recall).

**React Router:** I used react-router for routing in the application, all missing routes redirect to list component.

**Style:** Applied Mobile First strategy for responsive design. SCSS with [BEM pattern](https://getbem.com/)

**Internationalization:** Used i18n standard and i18next i18next-react libraries.

**Jest & React Testing Library:** For unit and functional testing I used raw jest, for integration testing I used react-testing-library mocking data and utilities. At this moment I reached almost 80% coverage.

## Features

- Mobile First
- Debounced search.
- Cache storaging.
- Paginated results.
- Internationalization.
- Watchlist and favorites lists stored in browser's localStorage.
- Embed trailers and images in movie page.
