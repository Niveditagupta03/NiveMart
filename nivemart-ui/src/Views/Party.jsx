import React from "react";
import CollectionDisplay from "./CollectionDisplay";

const Party = () => {
  return (
    <CollectionDisplay
      apiUrl="http://127.0.0.1:8000/api/v1/product/outing" // Update this if the API endpoint changes
      title="New Collection of Party Cloth"
    />
  );
};

export default Party;
