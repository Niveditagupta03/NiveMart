import React from "react";
import CollectionDisplay from "./CollectionDisplay";

const Western = () => {
  return (
    <CollectionDisplay
      apiUrl="http://127.0.0.1:8000/api/v1/product/western" // Update this if the API endpoint changes
      title=" New Collection of Western Cloth"
    />
  );
};

export default Western;
