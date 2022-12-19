import { Navigate, BrowserRouter, Route, Routes } from "react-router-dom";
import { PATH_OF_ROUTES } from "../constants/endpoints";
import { MovieDetail } from "../pages/MovieDetail/MovieDetail";
import { Trending } from "../pages/Trending/Trending";
import { MainLayout } from "../layouts/MainLayout";
import { MovieList } from "../pages/MovieList/MovieList";

export const Router = () => {
  const routes = [
    {
      path: PATH_OF_ROUTES.INDEX,
      element: <Trending />,
    },
    {
      path: PATH_OF_ROUTES.DETAIL,
      element: <MovieDetail />,
    },
    {
      path: PATH_OF_ROUTES.SEARCH,
      element: <MovieList type="search" />,
    },
    {
      path: PATH_OF_ROUTES.WATCHLIST,
      element: <MovieList type="watchlist" />,
    },
    {
      path: PATH_OF_ROUTES.FAVORITES,
      element: <MovieList type="favorites" />,
    },
    { path: "*", element: <Navigate to="" /> },
  ];

  return (
    <BrowserRouter>
      <MainLayout>
        <Routes>
          {routes.map((route) => (
            <Route key={route.path} path={route.path} element={route.element} />
          ))}
        </Routes>
      </MainLayout>
    </BrowserRouter>
  );
};
