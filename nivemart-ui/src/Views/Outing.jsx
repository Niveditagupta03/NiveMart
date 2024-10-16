import React from "react";
import CollectionDisplay from "./CollectionDisplay";

const Outing = () => {
  return (
    <CollectionDisplay
      apiUrl="http://127.0.0.1:8000/api/v1/product/outing"
      title="New Collection of Outing Cloth"
    />
  );
};

export default Outing;
