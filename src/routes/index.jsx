import MovieDetail from "src/pages/MovieDetail";
import Movies from "src/pages/Movies";
import Home from "src/pages/Home";

const routes = [
  {
    element: <h1>Not Found</h1>,
    path: "*",
    layout: true,
    // access: "guess",
  },
  {
    element: <Home />,
    path: "/",
    layout: true,
    // access: "guess",
  },
  {
    element: <Movies />,
    path: "/movies",
    layout: true,
    // access: "guess",
  },
  {
    element: <MovieDetail />,
    path: "/movies/:id",
    layout: true,
    // access: "guess",
  },
];

export default routes;
