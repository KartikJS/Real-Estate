import PropertiesItem from "./PropertiesItem";
import classes from "./Properties.module.css";
import { bayutUrl, fetchApi } from "../../lib/api";
import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";

const Properties = () => {
  const [searchParams] = useSearchParams();

  const purpose = searchParams.get("purpose") || "for-rent";
  const rentFrequency = searchParams.get("rentFrequency") || "yearly";
  const minPrice = searchParams.get("minPrice") || "0";
  const maxPrice = searchParams.get("maxPrice") || "1000000";
  const roomsMin = searchParams.get("roomsMin") || "0";
  const bathsMin = searchParams.get("bathsMin") || "0";
  const sort = searchParams.get("sort") || "price-desc";
  const areaMin = searchParams.get("areaMin") || "0";
  const areaMax = searchParams.get("areaMax") || "35000";
  const locationExternalIDs = searchParams.get("locationExternalIDs") || "5002";
  const categoryExternalID = searchParams.get("categoryExternalID") || "4";
  const [results, setResults] = useState([]);

  useEffect(() => {
    const fetchResults = async () => {
      const results = await fetchApi(
        `${bayutUrl}/properties/list?locationExternalIDs=${locationExternalIDs}&purpose=${purpose}&hitsPerPage=15&categoryExternalID=${categoryExternalID}&bathsMin=${bathsMin}&rentFrequency=${rentFrequency}&priceMin=${minPrice}&priceMax=${maxPrice}&roomsMin=${roomsMin}&sort=${sort}&areaMin=${areaMin}&areaMax=${areaMax}`
      );
      const searchData = results.hits;
      setResults(searchData);
    };
    fetchResults();
  }, [
    areaMin,
    areaMax,
    bathsMin,
    categoryExternalID,
    locationExternalIDs,
    maxPrice,
    minPrice,
    purpose,
    rentFrequency,
    roomsMin,
    sort,
  ]);

  return (
    <section className={classes.products}>
      <ul>
        {results.map((propertyData) => (
          <PropertiesItem propertyData={propertyData} key={propertyData.id} />
        ))}
      </ul>
    </section>
  );
};

export default Properties;
