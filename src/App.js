import React from "react";
//
import { Route, Routes, Navigate } from "react-router-dom";
import Layout from "./components/Layout/Layout";
import { Fragment } from "react";
import Rent from "./pages/Rent";
import Buy from "./pages/Buy";
import ManageProperties from "./pages/ManageProperties";
import Resources from "./pages/Resources";
import Sell from "./pages/Sell";

function App() {
  return (
    <Fragment>
      <Layout>
        <Routes>
          <Route
            path="/*"
            element={<Navigate to="/search/purpose/for-rent" />}
          ></Route>
          <Route path="/search/purpose/*"></Route>
          <Route path="/search/purpose/for-rent" element={<Rent />}></Route>
          <Route path="/search/purpose/for-buy" element={<Buy />}></Route>
          <Route path="/search/purpose/for-sell" element={<Sell />}></Route>
          <Route
            path="/search/purpose/for-managingproperties"
            element={<ManageProperties />}
          ></Route>
          <Route
            path="/search/purpose/for-resources"
            element={<Resources />}
          ></Route>
        </Routes>
      </Layout>
    </Fragment>
  );
}

export default App;
