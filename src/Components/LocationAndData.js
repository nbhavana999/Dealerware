import React, { useState } from "react";
import "../cssFiles/LocationAndData.scss";
import LocationData from "./LocationData";
function LocationAndData({ data }) {
  const [search, setSearch] = useState("");
  return (
    <div className="dataContent">
      <div className="dataHeader">Choose Location</div>
      <div className="searchPath">
        <input
          type="text"
          placeholder="Search by city or airport code"
          className="searchBar"
          value={search}
          onChange={(e) => {
            setSearch((search) => e.target.value);
          }}
        />
      </div>
      <div className="locationDisplay">
        {data.map((item, index) => (
          <LocationData data={item} key={index} search={search} />
        ))}
      </div>
    </div>
  );
}

export default LocationAndData;
