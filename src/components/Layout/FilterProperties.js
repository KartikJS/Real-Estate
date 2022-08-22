import classes from "./FilterProperties.module.css";

import { useState } from "react";

import { filterData } from "../../lib/filterData";

import { useSearchParams } from "react-router-dom";
import DropDown from "./DropDown";

const FilterProperties = () => {
  const [filters] = useState(filterData);
  const [searchParams, setSearchParams] = useSearchParams();

  const searchProperties = (filterData) => {
    Object.entries(filterData).forEach(([name, value]) => {
      if (name === "minMaxPrice") {
        const [min, max] = value.split("-");
        min
          ? searchParams.set("minPrice", min)
          : searchParams.delete("minPrice");
        max
          ? searchParams.set("maxPrice", max)
          : searchParams.delete("maxPrice");
      } else if (name === "minMaxArea") {
        const [min, max] = value.split("-");
        min ? searchParams.set("minArea", min) : searchParams.delete("minArea");
        max ? searchParams.set("maxArea", max) : searchParams.delete("maxArea");
      } else {
        searchParams.set(name, value);
      }
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
              searchProperties({
                [filter.queryName]: e.target.value,
              });
            }}
          />
        ))}
      </div>
    </div>
  );
};

export default FilterProperties;
