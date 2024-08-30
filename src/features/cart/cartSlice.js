import { createSlice } from "@reduxjs/toolkit";
import { toast } from "react-toastify";

const initialState = {
  items: [],
  totalQuantity: 0,
  totalPrice: 0,
  shippingAddress: null,
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart(state, action) {
      const newItem = action.payload;
      const existingItem = state.items.find((item) => item.id === newItem.id);

      if (!existingItem) {
        if (newItem.stock <= 0) {
          toast.warn("Out of stock");
          return;
        }

        state.items.push({
          id: newItem.id,
          name: newItem.name,
          category: newItem.category,
          subcategory: newItem.subcategory,
          price: newItem.price,
          image: newItem.image,
          stock: newItem.stock,
          quantity: 1,
        });
        state.totalQuantity++;
        state.totalPrice += newItem.price;
        toast.success("item berhasil ditambahkan");
      } else {
        // Jika item sudah ada di keranjang, tambahkan kuantitas
        if (existingItem.quantity >= existingItem.stock) {
          toast.warn("Out of stock");
          return;
        }
        existingItem.quantity++;
        state.totalQuantity++;
        state.totalPrice += existingItem.price;
        toast.success("item berhasil ditambahkan");
      }
    },

    deleteItemInCart(state, action) {
      const { id } = action.payload;
      const existingItem = state.items.find((item) => item.id === id);

      if (existingItem) {
        // Kurangi total kuantitas dan harga
        state.totalQuantity -= existingItem.quantity;
        state.totalPrice -= existingItem.price * existingItem.quantity;

        // Hapus item dari array items
        state.items = state.items.filter((item) => item.id !== id);

        toast.success("Item removed from cart");
      }
    },

    clearAllCart(state) {
      state.items = [];
      state.totalQuantity = 0;
      state.totalPrice = 0;
    },

    setShippingAdress(state, action) {
      state.shippingAddress = action.payload;
    },
  },
});

export const { addToCart, deleteItemInCart, clearAllCart, setShippingAdress } =
  cartSlice.actions;

export default cartSlice.reducer;
