import { useState } from "react";
import DataProduct from "../Products/DummyData.json";
import { useNavigate } from "react-router-dom";

// eslint-disable-next-line react/prop-types
const Input = ({ onSearch }) => {
  const [searchTerm, setSearchTerm] = useState("");
  const [filtered, setFiltered] = useState(DataProduct);
  const navigate = useNavigate();

  const handleSearch = (e) => {
    const { value } = e.target;
    setSearchTerm(value);

    const result = DataProduct.filter((product) =>
      product.name.toLowerCase().includes(searchTerm.toLowerCase())
    );

    setFiltered(result);
    if (onSearch) {
      onSearch(value);
    }
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      navigate(`search?query=${searchTerm}`);
      setSearchTerm("");
    }
  };
  return (
    <div className="relative w-3/6">
      <input
        type="text"
        value={searchTerm}
        onChange={handleSearch}
        onKeyDown={handleKeyDown}
        placeholder="Search..."
        className="focus:outline-none focus:border-emerald-400 rounded-md w-full border border-gray-200 bg-transparent p-2"
      />

      {searchTerm.length > 0 && (
        <div className="absolute top-[100%] left-0 bg-white w-full border border-gray-200 rounded-md shadow-md">
          {filtered.length > 0 ? (
            filtered.map((item) => (
              <div
                key={item.id}
                className="p-1 hover:bg-gray-100 hover:cursor-pointer"
              >
                {item.name}
              </div>
            ))
          ) : (
            <div className="p-2">No results found</div>
          )}
        </div>
      )}
    </div>
  );
};

export default Input;
