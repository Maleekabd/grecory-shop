/* eslint-disable react/prop-types */
import slugify from "slugify";
import { Link, useParams } from "react-router-dom";

const Product = ({ Datas }) => {
  const { title } = useParams();
  console.log(title);

  return (
    <section className="h-auto">
      <div className="p-5">
        <div className="m-10">
          <h1 className="text-3xl">Products</h1>
          <div>
            <ul className="grid sm:grid-cols-4 md:grid-cols-6 lg:grid-cols-8 gap-3">
              {Datas.map((item) => (
                <Link
                  to={`/category/${slugify(item.category, {
                    strict: true,
                    lower: true,
                  })}/${slugify(item.name, {strict:true, lower:true})}`}
                  key={item.id}
                  className="flex justify-between flex-col h-auto relative border"
                  //   style={{
                  //     height: "250px",
                  //   }}
                >
                  <img
                    loading="lazy"
                    style={{
                      width: "150px",
                      height: "150px",
                    }}
                    src={item.image}
                    alt=""
                  />
                  <h1 className="p-2 text-sm">{item.name}</h1>
                  <p className="p-2 pt-0 font-bold">$ {item.price}</p>
                  <button className="hover:bg-emerald-300 bg-emerald-400 w-full text-sm p-2 ">
                    Add
                  </button>
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
