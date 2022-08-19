import Card from "../UI/Card";
import classes from "./PropertiesItem.module.css";
import { Link } from "react-router-dom";
import DefaultImage from "../../img/defaultImage.jpeg";
import millify from "millify";
// import "boxicons";

const PropertiesItem = ({
  propertyData: {
    coverPhoto,
    price,
    rentFrequency,
    title,
    area,
    rooms,
    baths,
    agency,
    externalID,
  },
}) => {
  return (
    <div className={classes.item}>
      <Card>
        <Link className={classes.linkText} to={`/propertyData/${externalID}`}>
          <img
            className={classes.image}
            src={coverPhoto ? coverPhoto.url : DefaultImage}
          ></img>

          <div className={classes.content}>
            <div className={classes.price}>
              AED {millify(price)}
              <p>{rentFrequency && `/${rentFrequency}`}</p>
            </div>
            <img
              src={agency?.logo.url}
              alt="agencyImg"
              className={classes.agency}
            ></img>
          </div>
          <header>
            <h4>
              {title.length > 30 ? `${title.substring(0, 30)}...` : title}
            </h4>
          </header>
          <div className={classes.actions}>
            <div className={classes.icons}>
              <li>
                <p>
                  <i className="bx bx-bed iconColor"></i>
                  {rooms}
                </p>
              </li>
              <li>
                <p>
                  | <i className="bx bx-bath"></i>
                  {baths}
                </p>
              </li>
              <li>
                <p>
                  | <i className="bx bx-area"></i>
                  {millify(area)} sqft
                </p>
              </li>
            </div>
          </div>
        </Link>
      </Card>
    </div>
  );
};
export default PropertiesItem;
