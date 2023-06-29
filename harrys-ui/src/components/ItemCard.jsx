import React from "react";
import { BsSuitHeart, BsCart4 } from "react-icons/bs";
import { MdOutlineCompareArrows } from "react-icons/md";
import earring from "../assets/ear-ring.jpg";
import { useNavigate } from "react-router-dom";

const ItemCard = () => {
  const navigate = useNavigate();
  return (
    <div className="card-container bg-[#eeeeee] p-[10px] w-full rounded-[10px]">
      <div className="image-container flex items-center justify-center rounded-[5px] p-[5px] object-contain overflow-hidden bg-white mb-[10px]">
        <img
          src={earring}
          alt="ear-ring"
          className="card-image w-full object-contain"
        />
      </div>
      <div className="card-details flex justify-start flex-col items-start overflow-hidden">
        <h2 className="card-title text-baseeb text-ellipsis overflow-hidden tracking-[2px] h-[20px] mb-[10px] text-[#2c3640]">
          Round earings
        </h2>
        <p className="text-lgl mb-[10px] ">Ksh 700.00</p>
        <div className="card-icons flex justify-between mb-[20px] items-center w-full">
          <BsCart4
            size={30}
            color={"#2c3640"}
            onClick={(e) => {
              e.preventDefault();
              navigate("/cart");
            }}
          />
          <BsSuitHeart
            size={30}
            color={"#2c3640"}
            onClick={(e) => {
              e.preventDefault();
              console.log("added to Favorite");
            }}
          />
          <MdOutlineCompareArrows
            size={30}
            onClick={(e) => {
              e.preventDefault();
              navigate("/compare");
            }}
            color={"#2c3640"}
            className="border-[1px] border-[#2c3640] rounded-full p-[2px]"
          />
        </div>
      </div>
    </div>
  );
};

export default ItemCard;
