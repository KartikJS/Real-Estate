import PropertiesItem from "./PropertiesItem";
import classes from "./Properties.module.css";
import { bayutUrl, fetchApi } from "../../lib/api";
import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import Loading from "../../components/UI/LoadingSpinner";

const Properties = () => {
  const [searchParams] = useSearchParams();
  const purpose = searchParams.get("purpose") || "for-rent";
  const rentFrequency = searchParams.get("rentFrequency") || "yearly";
  const minPrice = searchParams.get("minPrice") || "0";
  const maxPrice = searchParams.get("maxPrice") || "1000000";
  const roomsMin = searchParams.get("roomsMin") || "0";
  const bathsMin = searchParams.get("bathsMin") || "0";
  const sort = searchParams.get("sort") || "price-desc";
  const minArea = searchParams.get("minArea") || "0";
  const maxArea = searchParams.get("maxArea") || "35000";
  const locationExternalIDs = searchParams.get("locationExternalIDs") || "5002";
  const categoryExternalID = searchParams.get("categoryExternalID") || "4";
  const [results, setResults] = useState([]);
  const [loading, setLoading] = useState(false);

  const [empty, setEmpty] = useState(false);
  useEffect(() => {
    const fetchResults = async () => {
      setLoading(true);
      const bayutresults = await fetchApi(
        `${bayutUrl}/properties/list?locationExternalIDs=${locationExternalIDs}&purpose=${purpose}&hitsPerPage=12&categoryExternalID=${categoryExternalID}&bathsMin=${bathsMin}&rentFrequency=${rentFrequency}&priceMin=${minPrice}&priceMax=${maxPrice}&roomsMin=${roomsMin}&sort=${sort}&areaMin=${minArea}&areaMax=${maxArea}`
      );
      const searchData = bayutresults.hits;
      setResults(searchData);
      setLoading(false);
      bayutresults.hits.length === 0 ? setEmpty(true) : setEmpty(false);
    };

    fetchResults();
  }, [
    minArea,
    maxArea,
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
    <section>
      {loading ? (
        <div className={classes.centered}>
          <Loading />
        </div>
      ) : (
        <ul className={classes.products}>
          {results.map((propertyData) => (
            <PropertiesItem propertyData={propertyData} key={propertyData.id} />
          ))}
        </ul>
      )}
      {!loading && empty && <h1>No Results Found</h1>}
    </section>
  );
};

export default Properties;
