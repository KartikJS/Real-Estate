import classes from "./FilterProperties.module.css";

import { useState } from "react";

import { filterData } from "../../lib/filterData";

import { useSearchParams } from "react-router-dom";
import DropDown from "./DropDown";

const FilterProperties = () => {
  const [filters] = useState(filterData);
  const [searchParams, setSearchParams] = useSearchParams();

  const searchProperties = (filterValues) => {
    Object.entries(filterValues).forEach(([name, value]) => {
      searchParams.set(name, value);
    });
    setSearchParams(searchParams);
  };

  return (
    <div className={classes.container}>
      <div className={classes.item}>
        {filters.map((filter) => (
          <DropDown
            key={filter.queryName}
            placeholder={filter.placeholder}
            filter={filter}
            onChange={(e) => {
              searchProperties({ [filter.queryName]: e.target.value });
            }}
          />
        ))}
      </div>
    </div>
  );
};

export default FilterProperties;
