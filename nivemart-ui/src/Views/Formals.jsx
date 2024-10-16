import React from "react";
import CollectionDisplay from "./CollectionDisplay";

const Formals = () => {
  return (
    <CollectionDisplay
      apiUrl="http://127.0.0.1:8000/api/v1/product/formals"
      title="New Collection of Formals Cloth"
    />
  );
};

export default Formals;
