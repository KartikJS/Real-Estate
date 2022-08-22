// NOTE THIS SOURCE CODE IS OLD VERSION PLEASE VISIT ALPHA1 BRANCH FOR NEW CODE

import React from "react";
//
import { Route, Routes, Navigate } from "react-router-dom";
import Layout from "./components/Layout/Layout";
import { Fragment } from "react";
import Rent from "./pages/Rent";

function App() {
  return (
    <Fragment>
      <Layout>
        <Routes>
          <Route
            path="/*"
            element={<Navigate to="/search?purpose=for-rent" />}
          ></Route>
          <Route path="/search/*" element={<Rent />}></Route>
        </Routes>
      </Layout>
    </Fragment>
  );
}

export default App;
