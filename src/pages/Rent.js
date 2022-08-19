import Properties from "../components/Properties/Properties";
import FilterProperties from "../components/Layout/FilterProperties";
import { Fragment } from "react";
import classes from "./Rent.module.css";

const Rent = () => {
  return (
    <Fragment>
      <div className={classes.search}>
        <h1>Search properties to rent</h1>
      </div>

      <FilterProperties />
      <Properties />
    </Fragment>
  );
};
export default Rent;
