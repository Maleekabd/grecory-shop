import { useParams } from "react-router-dom";
import { formatCategory } from "../ProductByCategory/ProductByCategory";

const ProductById = ({ Datas }) => {
  const { id } = useParams();
  const formattedCategory = formatCategory(id);
  console.log(formattedCategory);

  return (
    <section className="h-auto">
      {Datas.map(
        (item) =>
          item.name === formattedCategory && (
            <div key={item.id} className="p-5">
              <h1 className="font-normal text-sm p-5 px-0">{`Category > ${item.category} > ${item.subcategory}`}</h1>
              <div className="flex justify-between w-full">
                <figure className="grid grid-cols-3 w-full gap-y-2 gap-2">
                  <img
                    className="col-span-3 h-72 w-full"
                    src={item.image}
                    alt=""
                  />
                  <img className="col-span-1 h-44" src={item.image} alt="" />
                  <img className="col-span-1  h-44" src={item.image} alt="" />
                  <img className="col-span-1  h-44" src={item.image} alt="" />
                </figure>

                {/*description */}
                <div className="w-full">
                  <div className="p-5 h-full">
                    <div className="p-3 h-full flex flex-col justify-between">
                      <div>
                        <h1 className="text-xl">{item.name}</h1>
                        <h2 className="text-lg font-bold">$ {item.price}</h2>
                        <p>{item.description}</p>
                      </div>
                      <div className="flex items-center flex-col gap-1">
                        <button className="hover:bg-emerald-400 border border-emerald-300 w-full p-2">
                          Add To Cart
                        </button>
                        <button className="bg-emerald-300 border border-emerald-300 w-full p-2 hover:bg-white hover:border hover:border-emerald-300">
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
