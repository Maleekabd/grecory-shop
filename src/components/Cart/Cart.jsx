import { Link } from "react-router-dom";
import { FaRegTrashAlt } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import { deleteItemInCart } from "../../features/cart/cartSlice";
import { toast } from "react-toastify";
toast

const Cart = () => {
  const getCartData = useSelector((state) => state.cart);
  const dispatch = useDispatch();

  const handleDeleteItemInCart = (item) => {
    dispatch(deleteItemInCart(item));
  };
  return (
    <section className="p-5">
      <section className="flex lg:flex-nowrap md:flex-wrap ">
        <section className="p-5 w-full h-auto bg-white ">
          <table className="w-full">
            <thead className="border-b-[1px]">
              <tr className="text-lg">
                <td className="text-left">No.</td>
                <td className="text-left">Gambar</td>
                <td className="text-left">Nama</td>
                <td className="text-left">Harga</td>
                <td className="text-center">Action</td>
              </tr>
            </thead>
            <tbody className="mt-10">
              {getCartData?.items?.map((data) => (
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
                      <button onClick={() => handleDeleteItemInCart(data)}>
                        <FaRegTrashAlt />
                      </button>
                    </td>
                  </tr>
                </>
              ))}
            </tbody>
          </table>
        </section>
        <section className="flex flex-col justify-around gap-5 sticky top-40 m-5 p-5 bg-gray-100 rounded-md w-2/6 h-96">
          <Link className="text-sm hover:text-white" to={"/"}>
            Continue Shipping
          </Link>
          <h1 className="-mt-20 text-2xl">Order Summary</h1>
          <section className="">
            <h2>Total Items : {getCartData.totalQuantity}</h2>
            <h2>Subtotal : ${getCartData.totalPrice}</h2>
            <h2>Shipping : 0</h2>
            <h2>Total : ${getCartData.totalPrice}</h2>
            <Link to={"/checkout"}>
              <button className="mt-2 bg-emerald-400 hover:bg-emerald-500 text-white rounded p-2 w-full">
                Checkout
              </button>
            </Link>
          </section>
        </section>
      </section>
    </section>
  );
};

export default Cart;
