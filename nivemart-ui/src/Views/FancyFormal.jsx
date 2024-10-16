import React from "react";
import CollectionDisplay from "./CollectionDisplay";

const FancyFormal = () => {
  return (
    <CollectionDisplay
      apiUrl="http://127.0.0.1:8000/api/v1/product/formals"
      title="New Collection of Fancy Formals Cloth"
    />
  );
};

export default FancyFormal;
