/* eslint-disable react/prop-types */
import slugify from "slugify";
import { Link, useParams } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addToCart } from "../../features/cart/cartSlice";

const Product = ({ Datas }) => {
  const dispatch = useDispatch();
  const { title } = useParams();

  const handleAddToCart = (item) => {
    dispatch(addToCart(item));
  };

  return (
    <section className="h-auto">
      <div className="p-5">
        <div className="m-10">
          <h1 className="text-3xl">Products</h1>
          <div>
            <ul className="grid min-[320px]:grid-cols-2 sm:grid-cols-4 md:grid-cols-6 lg:grid-cols-5 gap-3">
              {Datas.map((item) => (
                <Link
                  to={`/category/${slugify(item.category, {
                    strict: true,
                    lower: true,
                  })}/${slugify(item.name, { strict: true, lower: true })}`}
                  key={item.id}
                  className="hover:shadow-xl rounded-md flex justify-between flex-col h-auto relative border"
                  //   style={{
                  //     height: "250px",
                  //   }}
                >
                  <img
                    loading="lazy"
                    style={{
                      objectFit: "cover",
                      height: "150px",
                    }}
                    src={item.image}
                    alt=""
                    className="rounded-md"
                  />
                  <h1 className="p-2 text-sm">{item.name}</h1>
                  <p className="p-2 pt-0 font-bold">$ {item.price}</p>
                  <div className="m-3">
                    <button
                      onClick={() => handleAddToCart(item)}
                      className="rounded-md text-white  bg-emerald-600 w-full text-sm p-2 "
                    >
                      Add
                    </button>
                  </div>
                </Link>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Product;
