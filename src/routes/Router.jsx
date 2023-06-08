import { BrowserRouter, Routes, Route } from "react-router-dom";
import React from "react";

import Layout from "src/components/Layout";
import routes from "src/routes/index";

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        {routes.map((e) => (
          <>
            {e.layout && (
              <Route
                key={e.path}
                path={e.path}
                element={<Layout access={e.access}>{e.element}</Layout>}
              />
            )}
            {!e.layout && (
              <Route key={e.path} path={e.path} element={e.element} />
            )}
          </>
        ))}
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
