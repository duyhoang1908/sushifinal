import React, { useEffect, useState } from "react";
import banner from "../../assets/image/headerBaner.jpg";
import logo from "../../assets/image/logo.jpg";
import order from "../../assets/image/order.png";
import maps from "../../assets/image/maps.png";
import user from "../../assets/image/user.png";
import cart from "../../assets/image/cart.png";
import bento from "../../assets/image/bentoIcon.png";
import car from "../../assets/image/carIcon.png";
import collection from "../../assets/image/collectionIcon.png";
import combo from "../../assets/image/comboIcon.png";
import drink from "../../assets/image/drinkIcon.png";
import fish from "../../assets/image/fishIcon.png";
import gift from "../../assets/image/giftIcon.png";
import phone from "../../assets/image/phoneIcon.png";
import product from "../../assets/image/productIcon.png";
import rice from "../../assets/image/riceIcon.png";
import salad from "../../assets/image/saladIcon.png";
import sale from "../../assets/image/saleIcon.png";
import sashimi from "../../assets/image/sashimiIcon.png";
import seven from "../../assets/image/sevenIcon.png";
import sushi from "../../assets/image/sushiIcon.png";

import { FaAlignLeft, FaAngleDown, FaBars, FaSearch } from "react-icons/fa";
import { Link } from "react-router-dom";
import MiniCart from "../Cart/MiniCart";

const Navigation = ({isDropDown, setIsModal}) => {
  
  return (
    <div>
      <img src={banner} alt="" className="w-full object-cover"/>
      <div className="bg-[#2d2d2d] flex flex-col">
        <div className="flex justify-between items-center m-auto px-4 md:px-0 w-full lg:w-[1360px] text-white">
          <div className="w-1/4 md:hidden cursor-pointer" onClick={() => setIsModal(true)}><FaBars /></div>
          <Link to="/" className="md:pl-[90px] pb-[10px]">
            <img
              src={logo}
              alt=""
              className="w-[90px] h-[90px] object-cover rounded-sm md:mr-20"
            />
          </Link>
          <div className="hidden md:block flex-1 md:pt-[10px] md:pr-[90px] md:ml-[10px]">
            <form className="mb-[5px] rounded-3xl overflow-hidden flex items-center justify-between">
              <input
                type="text"
                className="h-10 outline-none border-none px-2 flex-1 text-black"
              />
              <button className="fs-base h-[40px] px-5 flex items-center bg-[#b61c0b] text-white">
                <div className="m-auto">
                  <FaSearch />
                </div>
              </button>
            </form>
            <ul className="hidden md:flex gap-3 text-white text-sm">
              <li>Sushi</li>
              <li>Sashimi</li>
              <li>C?? h???i</li>
              <li>Rong bi???n</li>
            </ul>
          </div>
          <ul className="flex items-center justify-end w-1/4 md:w-auto">
            <li className="hidden md:block">
              <a
                href=""
                className="flex flex-col items-center px-[10px] mx-[10px]"
              >
                <img src={order} alt="" />
                <p className="text-white text-sm font-bold">????n h??ng</p>
              </a>
            </li>
            <li className="hidden md:block">
              <Link
                to="/map"
                className="flex flex-col items-center px-[10px] mx-[10px]"
              >
                <img src={maps} alt="" />
                <p className="text-white text-sm font-bold">C???a h??ng</p>
              </Link>
            </li>
            <li>
              <Link to="/login"
                className="flex flex-col items-center md:px-[10px] md:mx-[10px]"
              >
                <img src={user} alt="" />
                <p className="text-white text-sm font-bold hidden md:block">T??i kho???n</p>
              </Link>
            </li>
            <li className="relative group">
              <Link to="/cart"
                className="flex flex-col items-center md:px-[10px] mx-[10px]"
              >
                <img src={cart} alt=""/>
                <p className="text-white text-sm font-bold hidden md:block">Gi??? h??ng</p>
              </Link>
              <div className="hidden group-hover:block gap-3 absolute top-[55px] right-[15px] z-[99]"><MiniCart /></div>
            </li>
          </ul>
        </div>

        <div className="bg-[#2d2d2d] hidden md:block z-50 w-full duration-300">
        {/* style={{position:isDropDown&&"fixed",top:"0"}} */}
        <div className="flex m-auto w-[1360px] px-5">
          <div className="relative w-1/4 pr-7 group">
            <div className="bg-[#B61C0B] text-base font-semibold text-white flex items-center justify-between w-full px-4 py-3 rounded-md hover:cursor-pointer group">
              <div>
                <FaAlignLeft />
              </div>
              <p>DANH M???C S???N PH???M</p>
              <div>
                <FaAngleDown />
              </div>
            </div>
            <div className="absolute w-full pr-7 hidden group-hover:block z-50 bg-white"> 
            {/* style={{display:!isDropDown&&"block"}} */}
              <ul className="w-full shadow-2xl">
                <li className="px-[15px] py-[10px] w-full hover:bg-[#F4DDDB] text-sm border-b-[1px] border-[#ddd]">
                  <a href="" className="flex w-full">
                    <img src={gift} alt="" className="mr-[10px]" />
                    <p>T???ng h???p khuy???n m??i</p>
                  </a>
                </li>
                <li className="px-[15px] py-[10px] w-full hover:bg-[#F4DDDB] text-sm border-b-[1px] border-[#ddd]">
                  <a href="" className="flex w-full">
                    <img src={collection} alt="" className="mr-[10px]" />
                    <p>B??? s??u t???p sushi</p>
                  </a>
                </li>
                <li className="px-[15px] py-[10px] w-full hover:bg-[#F4DDDB] text-sm border-b-[1px] border-[#ddd]">
                  <a href="" className="flex w-full">
                    <img src={fish} alt="" className="mr-[10px]" />
                    <p>Sashimi</p>
                  </a>
                </li>
                <li className="px-[15px] py-[10px] w-full hover:bg-[#F4DDDB] text-sm border-b-[1px] border-[#ddd]">
                  <a href="" className="flex w-full">
                    <img src={sushi} alt="" className="mr-[10px]" />
                    <p>Sushi</p>
                  </a>
                </li>
                <li className="px-[15px] py-[10px] w-full hover:bg-[#F4DDDB] text-sm border-b-[1px] border-[#ddd]">
                  <a href="" className="flex w-full">
                    <img src={salad} alt="" className="mr-[10px]" />
                    <p>Salad</p>
                  </a>
                </li>
                <li className="px-[15px] py-[10px] w-full hover:bg-[#F4DDDB] text-sm border-b-[1px] border-[#ddd]">
                  <a href="" className="flex w-full">
                    <img src={bento} alt="" className="mr-[10px]" />
                    <p>Bento</p>
                  </a>
                </li>
                <li className="px-[15px] py-[10px] w-full hover:bg-[#F4DDDB] text-sm border-b-[1px] border-[#ddd]">
                  <a href="" className="flex w-full">
                    <img src={rice} alt="" className="mr-[10px]" />
                    <p>C??m nh???t</p>
                  </a>
                </li>
                <li className="px-[15px] py-[10px] w-full hover:bg-[#F4DDDB] text-sm border-b-[1px] border-[#ddd]">
                  <a href="" className="flex w-full">
                    <img src={drink} alt="" className="mr-[10px]" />
                    <p>????? u???ng</p>
                  </a>
                </li>
                <li className="px-[15px] py-[10px] w-full hover:bg-[#F4DDDB] text-sm border-b-[1px] border-[#ddd]">
                  <a href="" className="flex w-full">
                    <img src={combo} alt="" className="mr-[10px]" />
                    <p>Combo Sushi</p>
                  </a>
                </li>
                <li className="px-[15px] py-[10px] w-full hover:bg-[#F4DDDB] text-sm border-b-[1px] border-[#ddd]">
                  <a href="" className="flex w-full">
                    <img src={sashimi} alt="" className="mr-[10px]" />
                    <p>Combo Sashimi</p>
                  </a>
                </li>
                <li className="px-[15px] py-[10px] w-full hover:bg-[#F4DDDB] text-sm border-b-[1px] border-[#ddd]">
                  <a href="" className="flex w-full">
                    <img src={product} alt="" className="mr-[10px]" />
                    <p>S???n ph???m ????ng g??i</p>
                  </a>
                </li>
                <li className="px-[15px] py-[10px] w-full hover:bg-[#F4DDDB] text-sm border-b-[1px] border-[#ddd]">
                  <a href="" className="flex w-full">
                    <img src={car} alt="" className="mr-[10px]" />
                    <p>Giao h??ng ????ng gi???</p>
                  </a>
                </li>
                <li className="px-[15px] py-[10px] w-full hover:bg-[#F4DDDB] text-sm border-b-[1px] border-[#ddd]">
                  <a href="" className="flex w-full">
                    <img src={seven} alt="" className="mr-[10px]" />
                    <p>Mi???n ph?? ?????i tr??? trong 7 ng??y</p>
                  </a>
                </li>
                <li className="px-[15px] py-[10px] w-full hover:bg-[#F4DDDB] text-sm border-b-[1px] border-[#ddd]">
                  <a href="" className="flex w-full">
                    <img src={sale} alt="" className="mr-[10px]" />
                    <p>??u ????i h???p d???n m???i ng??y</p>
                  </a>
                </li>
                <li className="p-[10px] w-full hover:bg-[#F4DDDB] text-sm border-b-[1px] border-[#ddd]">
                  <a
                    href=""
                    className="flex items-center w-full px-[15px] py-[10px] border border-[#B61C0B] rounded-md"
                  >
                    <img src={phone} alt="" className="mr-[10px]" />
                    <div className="flex-col">
                      <p>G???i mua h??ng: 0899 091 779</p>
                      <p>(8:00 - 21:30 T2 - CN)</p>
                    </div>
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <ul className="flex flex-1 justify-center  items-center gap-5 text-white text-base font-semibold md:ml-20">
            <li>
              <Link to="/">Trang ch???</Link>
            </li>
            <li>
              <Link to="/introduce">Gi???i thi???u</Link>
            </li>
            <li>
              <Link to="/menu">Th???c ????n</Link>
            </li>
            <li>
              <Link to="sushiway" href="">Chuy??n m???c Sushiway</Link>
            </li>
            <li>
              <Link to="/contact">Li??n h???</Link>
            </li>
          </ul>
        </div>
        </div>
        <div className="bg-[#2d2d2d] block md:hidden z-50 w-full" style={{position:isDropDown&&"fixed",top:"0"}}></div>
        <div className="flex-1 md:hidden md:pt-[10px] md:pr-[90px] md:ml-[10px]">
            <form className="mb-[5px] rounded-3xl overflow-hidden flex items-center justify-between w-[90%] m-auto">
              <input
                type="text"
                className="h-10 outline-none border-none px-2 flex-1 text-black"
              />
              <button className="fs-base h-[40px] px-5 flex items-center bg-[#b61c0b] text-white">
                <div className="m-auto">
                  <FaSearch />
                </div>
              </button>
            </form>
            <ul className="flex gap-3 justify-center text-white text-sm">
              <li>Sushi</li>
              <li>Sashimi</li>
              <li>C?? h???i</li>
              <li>Rong bi???n</li>
            </ul>
          </div>
      </div>
    </div>
  );
};

export default Navigation;
