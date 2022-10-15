import React, { useState } from "react";
import { FaTrash } from "react-icons/fa";
import { useDispatch } from "react-redux";
import { cartSlice } from "../../store/Slice/cartSlice";

const MiniCard = ({ item }) => {
  const [quantity, setQuantity] = useState(item.quantity);

  const dispatch = useDispatch();

  const increaQuantity = () => {
    let data = { id: item.id, quantity: quantity + 1 };
    dispatch(cartSlice.actions.changeQuantity(data));
    setQuantity(quantity + 1);
  };

  const prevQuantity = () => {
    if (quantity === 1) dispatch(cartSlice.actions.deleteItem(item.id));
    else {
      let data = { id: item.id, quantity: quantity - 1 };
      dispatch(cartSlice.actions.changeQuantity(data));
      setQuantity(quantity - 1);
    }
  };
  return (
    <div className="w-full gap-2 flex justify-between" key={item.id}>
      <div>
        <img
          className="w-[60px] h-[60px] md:w-[80px] md:h-[80px] object-cover"
          src={item.image}
          alt=""
        />
      </div>
      <h3 className="text-xs md:text-base font-semibold">{item.name}</h3>
      <div className="flex">
        <div className="flex items-center border border-black m-auto">
          <button
            onClick={prevQuantity}
            className="py-1  px-1 text-xs md:px-2 cursor-pointer"
          >
            -
          </button>
          <p className="py-1  px-1 text-xs md:px-2">{quantity}</p>
          <button onClick={increaQuantity} className="py-1  px-1 text-xs md:px-2 cursor-pointer">
            +
          </button>
        </div>
      </div>
      <div className="flex">
        <div className="m-auto text-xs md:text-base text-[#ccc] font-bold">{`${item.price}₫`}</div>
      </div>
      <div className="flex">
        <div className="m-auto text-xs md:text-base text-red-700 font-bold">{`${
          item.price * quantity
        }₫`}</div>
      </div>
      <div className="flex">
        <div className="flex m-auto text-xs md:text-base items-center text-red-700   font-semibold cursor-pointer">
          <p>Xóa</p>{" "}
          <div>
            <FaTrash />
          </div>
        </div>
      </div>
    </div>
  );
};

export default MiniCard;
