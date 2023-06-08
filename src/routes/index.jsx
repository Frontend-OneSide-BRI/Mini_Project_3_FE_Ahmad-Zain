import Home from "src/pages/Home";

const routes = [
  {
    element: <Home />,
    path: "/",
    layout: true,
    access: "guess",
  },
  {
    element: <h1>Not Found</h1>,
    path: "*",
    layout: true,
    access: "guess",
  },
];

export default routes;
