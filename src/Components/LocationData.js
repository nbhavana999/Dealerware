import React, { useState, useEffect } from "react";
import "../cssFiles/LocationData.scss";
import LocalAirportIcon from "@material-ui/icons/LocalAirport";
import BusinessIcon from "@material-ui/icons/Business";
function LocationData({ data, search }) {
  const [isVisible, setIsVisible] = useState(true);
  useEffect(() => {
    checkIfExist();
  }, []);
  const checkIfExist = () => {
    if (search !== "") {
      if (
        data.name?.match(search) == null &&
        data.airport_code?.match(search) == null
      ) {
        setIsVisible(isVisible => false);
      } else {
        setIsVisible(isVisible => true);
      }
    }
  };

  return (
    <>
      {data.bookable & isVisible ? (
        <div className="individualBlocker">
          <div className="blackBar"></div>
          <div className="contentAndInfo">
            <div className="headingTitle">
              {data.name + "    "}
              {data.airport_code != null ? <>({data.airport_code})</> : <></>}
            </div>

            {data.airport_code == null ? (
              <>
                <div className="locateContent">
                  <BusinessIcon />
                  <div className="locationDesc">{"  " + data.description}</div>
                </div>
              </>
            ) : (
              <div className="locateContent">
                <LocalAirportIcon />
                <div className="locationDesc">{"  " + data.description}</div>
              </div>
            )}
          </div>
        </div>
      ) : (
        <></>
      )}
    </>
  );
}

export default LocationData;
