import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import DataProduct from "./DummyData.json";

const SearchResult = () => {
  const location = useLocation();
  const [filtered, setFiltered] = useState([]);

  const queryParams = new URLSearchParams(location.search);
  const searchTerm = queryParams.get("query");

  useEffect(() => {
    if (searchTerm) {
      const result = DataProduct.filter((product) =>
        product.name.toLowerCase().includes(searchTerm.toLowerCase())
      );
      setFiltered(result);
    }
  }, [searchTerm]);

  console.log(filtered);
  return (
    <div>
      {filtered.length > 0 ? (
        filtered.map((item) => <div key={item.id}>{item.name}</div>)
      ) : (
        <div>item not found</div>
      )}
    </div>
  );
};

export default SearchResult;
