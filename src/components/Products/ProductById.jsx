/* eslint-disable react/prop-types */
import { Link, useParams } from "react-router-dom";
import { formatCategory } from "../ProductByCategory/ProductByCategory";
import slugify from "slugify";
import { useDispatch } from "react-redux";
import { addToCart } from "../../features/cart/cartSlice";
import { toast } from "react-toastify";
toast;

const ProductById = ({ Datas }) => {
  const { id } = useParams();

  const dispatch = useDispatch();
  const formattedCategory = formatCategory(id);

  const getPath = window.location.pathname.includes(`${id}`);
  const text_color = getPath ? "text-emerald-400" : "";

  // handle submit
  const handleAddToCart = (item) => {
    dispatch(addToCart(item));
  };

  return (
    <section className="h-auto">
      {Datas.map(
        (item) =>
          item.name === formattedCategory && (
            <div key={item.id} className="p-5">
              <h1 className="font-normal text-sm p-5 px-0">
                <Link
                  to={`/category/${slugify(item.category, {
                    lower: true,
                    strict: true,
                  })}`}
                >
                  {item.category} &gt;{" "}
                </Link>
                <Link
                  to={`/category/${slugify(item.category, {
                    lower: true,
                    strict: true,
                  })}/${slugify(item.name, { lower: true })}`}
                >
                  {item.subcategory} &gt;{" "}
                </Link>
                <Link
                  className={text_color}
                  to={`/category/${slugify(item.category, {
                    lower: true,
                    strict: true,
                  })}/${slugify(item.name, { lower: true })}`}
                >
                  {item.name}
                </Link>
              </h1>
              <div className="flex min-[320px]:flex-col lg:flex-row justify-between  w-full">
                <figure className="grid min-[320px]:grid-cols-3 md:grid-cols-3 lg:grid-cols-3 w-full gap-2">
                  <img
                    className="col-span-3 h-72 w-full"
                    src={item.image}
                    alt=""
                  />
                  <img
                    className="col-span-1 min-[320px]:h-20 md:h-44 lg:h-44"
                    src={item.image}
                    alt=""
                  />
                  <img
                    className="col-span-1 min-[320px]:h-20 md:h-44 h-44"
                    src={item.image}
                    alt=""
                  />
                  <img
                    className="col-span-1 min-[320px]:h-20 md:h-44 h-44"
                    src={item.image}
                    alt=""
                  />
                </figure>

                {/*description */}
                <div className="w-full">
                  <div className="p-5  pt-0 h-full">
                    <div className="p-3 pt-0 h-full flex flex-col justify-between">
                      <div>
                        <h1 className="text-xl">{item.name}</h1>
                        <h2 className="text-lg font-bold">$ {item.price}</h2>
                        <p>{item.description}</p>
                        <p>
                          Lorem ipsum dolor, sit amet consectetur adipisicing
                          elit. Similique molestias repellendus a magni hic,
                          nulla et reprehenderit doloribus consequatur
                          voluptatem eos dolor nemo beatae tempore magnam, vel
                          odit minima ipsum! Recusandae saepe eaque sed
                          voluptatum aspernatur eveniet neque laudantium eum
                          facilis porro ad ducimus at, ipsum dicta voluptatem
                          vel, repudiandae aut in. Ea culpa quam blanditiis?
                          Voluptatibus enim, porro, quasi excepturi voluptatem
                          autem distinctio assumenda quos sapiente perferendis
                          quae veritatis veniam error nobis vero placeat nulla
                          magni odio officiis itaque magnam iste, fugiat eum.
                          Aliquam accusamus quaerat iure dolorum recusandae
                          unde! At quas dolor in architecto veniam et, non
                          laudantium.
                        </p>
                      </div>
                      <div className="flex items-center flex-col gap-1">
                        <button
                          onClick={() => handleAddToCart(item)}
                          className="border border-emerald-300 w-full p-2 hover:font-bold"
                        >
                          Add To Cart
                        </button>
                        <button className="bg-emerald-300 border border-emerald-300 w-full p-2 hover:font-bold">
                          Buy
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )
      )}
    </section>
  );
};

export default ProductById;
