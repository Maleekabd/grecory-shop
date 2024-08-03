import Data from "../Products/DummyData.json";
import { Link } from "react-router-dom";
import { FaRegTrashAlt } from "react-icons/fa";

const Cart = () => {
  return (
    <>
      <h2 className="text-3xl text-center mt-5">Your Cart</h2>

      <section className="flex lg:flex-nowrap md:flex-wrap">
        <section className="p-5 w-full h-auto">
          <table className="w-full">
            <thead className="border-b-[1px] border-b-gray-600">
              <tr className="text-lg">
                <td className="text-left">No.</td>
                <td className="text-left">Gambar</td>
                <td className="text-left">Nama</td>
                <td className="text-left">Harga</td>
                <td className="text-center">Action</td>
              </tr>
            </thead>
            <tbody className="mt-10">
              {Data?.map((data) => (
                <>
                  <tr key={data.id} className="border-b-[1px] border-gray-300">
                    <td className="text-left">{data.id}</td>
                    <td className="text-left">
                      <img
                        className=" w-44 p-3"
                        src={data.image}
                        alt="ini gambar"
                      />
                    </td>
                    <td className="text-left">{data.name}</td>
                    <td className="text-left">$ {data.price}</td>
                    <td className="text-center">
                      <h2 className="sr-only">delete</h2>
                      <button>
                        <FaRegTrashAlt />
                      </button>
                    </td>
                  </tr>
                </>
              ))}
            </tbody>
          </table>
        </section>
        <section className="flex flex-col justify-between sticky top-40 m-5 p-5 bg-yellow-200 w-2/6 h-96">
          <Link className="text-sm hover:text-white" to={"/"}>
            Continue Shipping
          </Link>
          <section>
            <h2>Subtotal</h2>
            <h2>Total</h2>
            <button className="bg-emerald-700 hover:bg-emerald-500 text-white rounded p-2 w-full">
              Checkout
            </button>
          </section>
        </section>
      </section>
    </>
  );
};

export default Cart;
