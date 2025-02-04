import React from "react";
import { TbPlus, TbMinus } from "react-icons/tb";
import { AiFillDelete } from "react-icons/ai";
import { useDispatch } from "react-redux";
import {
  deleteCartItem,
  increaseQty,
  decreaseQty,
} from "../redux/productSlide";

const CartProduct = ({ id, name, image, category, qty, total, price }) => {
  const dispatch = useDispatch();

  const handleIncreaseQty = () => {
    dispatch(increaseQty(id));
  };

  const handleDecreaseQty = () => {
    if (qty > 1) {
      dispatch(decreaseQty(id));
    }
  };

  return (
    <div className="bg-slate-200 p-2 flex gap-4 rounded border border-slate-300">
      <div className="p-3 bg-white rounded overflow-hidden">
        <img src={image} alt={name} className="h-28 w-40 object-cover" />
      </div>

      <div className="flex flex-col gap-1 w-full">
        <div className="flex justify-between items-center">
          <h3 className="font-semibold text-slate-600 capitalize text-lg md:text-xl">
            {name}
          </h3>
          <button
            className="cursor-pointer text-slate-700 hover:text-red-500"
            onClick={() => dispatch(deleteCartItem(id))}
          >
            <AiFillDelete />
          </button>
        </div>

        <p className="text-slate-500 font-medium">{category}</p>
        <p className="font-bold text-base">
          <span className="text-red-500">₫</span> {price}
        </p>

        <div className="flex justify-between items-center">
          <div className="flex gap-3 items-center">
            <button
              onClick={handleDecreaseQty}
              disabled={qty <= 1} // Vô hiệu hóa nút giảm khi qty = 1
              className="bg-slate-300 py-1 mt-2 rounded hover:bg-slate-400 p-1 disabled:opacity-50" 
            >
              <TbMinus />
            </button>
            <p className="font-semibold p-1">{qty}</p>
            <button
              onClick={handleIncreaseQty}
              className="bg-slate-300 py-1 mt-2 rounded hover:bg-slate-400 p-1"
            >
              <TbPlus />
            </button>
          </div>
          <div className="flex items-center gap-2 font-bold text-slate-700">
            <p>Total:</p>
            <p>
              <span className="text-red-500">₫</span> {total}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartProduct;
