import React from "react";
import Cardsdata from "../CardsData/CardsData";
//import { useNavigate } from "react-router-dom";
import { useDispatch } from 'react-redux';
import { CART } from "../../Redux/Action/Action";
import {ToastContainer , toast} from 'react-toastify';
//import { useSelector } from "react-redux";
function Cards() {
  const dispatch = useDispatch(); 
  //const items = useSelector((state) => state.cart.items);
  // const navigate = useNavigate();
  // const detailpage = (id) =>
  // {
  //   navigate(`/products/${id}`);
  // }
  const send = (item) =>
  {
    console.log("Adding to cart" ,item);
    dispatch(CART(item));
    toast.success(`Successfully Item Added `);
  }
  return (
    <>
     <ToastContainer />
      <div className="w-11/12 flex items-center justify-start sm:justify-center py-5 mx-auto">
        <h1 className="text-lg font-bold md:text-4xl md:font-bold">Add to Cart</h1>
      </div>
      <div className="w-11/12 mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4 gap-6">
          {Cardsdata.map((card) => (
            <div className="border rounded-lg shadow-md p-4" key={card.id}>
              <div className="h-[300px] md:w-full md:h-[300px]">
                <img src={card.imgdata} alt="" className="w-full h-full" />
              </div>
              <h3 className="text-xl font-semibold mb-2">{card.rname}</h3>

              <p className="text-gray-600">{card.somedata}</p>

              <p className="text-green-800">Price: ₹{card.price}</p>
              <div>
                {/* onClick={detailpage} */}
                <button className="mt-4 bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600" onClick={()=> { send(card)}}>
                  {/* detailpage(card.id) */}
                  Add To Cart
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default Cards;
