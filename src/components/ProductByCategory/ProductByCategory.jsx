/* eslint-disable react/prop-types */
import { Link, useParams } from "react-router-dom";
import slugify from "slugify";

const ProductByCategory = ({ Datas }) => {
  const { name, id } = useParams();
  const formattedCategory = formatCategory(name);
  const filteredProducts = Datas.filter(
    (product) => product.category === formattedCategory
  );

  console.log(formattedCategory);
  console.log(filteredProducts);

  return (
    <section className="h-auto">
      <div className="p-5">
        <div className="min-[320px]:mx-auto md:m-10 lg:m-10">
          <h2 className="pb-5 min-[320px]:text-md min-[320px]:font-bold lg:text-3xl">
            {formattedCategory.toLocaleUpperCase()}
          </h2>
          <div className="flex flex-wrap min-[320px]:gap-2 md:gap-4 lg:gap-4">
            {filteredProducts.map((product) => (
              <Link
                to={`/category/${slugify(product.category, {
                  lower: true,
                  strict: true,
                })}/${slugify(product.name, { lower: true })}`}
                key={product.id}
                className="hover:shadow-xl rounded-md flex lg:justify-between flex-col h-auto relative border"
              >
                {/* <div className="flex flex-col items-start">
                  <figure className="w-full"> */}
                <img
                  className="object-cover rounded-md"
                  style={{ height: "150px" }}
                  src={product.image}
                  alt={product.name}
                />
                {/* </figure> */}
                <h1 className="p-2 text-sm">{product.name}</h1>
                <p className="p-2 pt-0 font-bold">$ {product.price}</p>
                {/* </div> */}
                <div className="m-3">
                  <button className="rounded-md p-2 bg-emerald-600 text-white w-full bottom-0">
                    Add
                  </button>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductByCategory;

export const formatCategory = (name) => {
  return name
    .split("-")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ")
    .replace("And", "&");
};
