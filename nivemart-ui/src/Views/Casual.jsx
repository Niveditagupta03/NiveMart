import React from "react";
import CollectionDisplay from "./CollectionDisplay";

const Casual = () => {
  return (
    <CollectionDisplay
      apiUrl="http://127.0.0.1:8000/api/v1/product/casual" // Update this if the API endpoint changes
      title=" New Collection of Casual Cloth"
    />
  );
};

export default Casual;
