import React, { useEffect, useState } from "react";
import { MdDelete } from "react-icons/md";
import { useNavigate, useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import { Delete, DECREMENT, CART } from "../../Redux/Action/Action";
import { useDispatch } from "react-redux";

//import { useNavigate } from "react-router-dom";
function CardsDetail() {
  const { id } = useParams();
  const items = useSelector((state) => state.cart.items);

  const [data, setData] = useState([]);

  const compare = () => {
    let comparedata = items.filter((e) => e.id == id);
    setData(comparedata);
  };

  useEffect(() => {
    compare();
  }, [id]);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const handledelete = (id) => {
    dispatch(Delete(id));
    navigate("/");
  };
  const minus = (item) => {
    dispatch(DECREMENT(item));
  };
  const send = (item) => {
    //console.log("Adding to cart", item);
    dispatch(CART(item));
    //toast.success(`Successfully Item Added `);
  };
  return (
    <>
      <div className="w-11/12 flex items-center justify-center py-5 mx-auto">
        <h1 className="text-4xl font-bold">Items Details Page</h1>
      </div>

      <div className="w-11/12 mx-auto flex justify-center">
        <div className="w-[990px] h-full md:h-[400px] border-4 rounded-lg flex">
          <div className="w-full flex flex-col md:flex-row gap-5 sm:gap-10 px-5">
            {data.map((element) => (
              <div
                key={element.id}
                className="flex flex-col md:flex-row gap-5 sm:gap-10"
              >
                <div className="flex justify-center md:items-center">
                  <div className="w-[300px] h-[250px]">
                    <img
                      src={element.imgdata}
                      alt=""
                      className="w-full h-full"
                    />
                  </div>
                </div>

                <div>
                  <div className="w-full py-5">
                    <h2 className="text-xl">
                      <strong>Restaurant</strong>: {element.rname}
                    </h2>
                  </div>
                  <div className="flex justify-between gap-14 py-5 md:py-12">
                    <div>
                      <div className="flex flex-col gap-y-8">
                        <p>
                          <strong>Price</strong>: ${element.price}
                        </p>
                        <p>
                          <strong>Dishes</strong>: {element.address}
                        </p>
                        <p>
                          <strong>Total</strong>: ${element.price * element.qnty}
                        </p>
                        <div className="bg-gray-300 w-[100px] h-[50px] flex justify-between items-center gap-1 px-5 font-semibold text-2xl">
                          <span
                            className="cursor-pointer"
                            onClick={element.qnty <=1 ? ()=>handledelete(element.id)  : () => minus(element)}
                          >
                            -
                          </span>
                          <span>{element.qnty}</span>
                          <span className="cursor-pointer" onClick={() => send(element)}>+</span>
                        </div>
                      </div>
                    </div>
                    <div>
                      <div className="flex flex-col gap-y-8">
                        <p>
                          <strong>Rating</strong>:{" "}
                          <span className="bg-green-800 text-white px-2 rounded-lg">
                            {element.rating}
                          </span>
                        </p>
                        <p className="w-full">
                          <strong>Order Review</strong>: {element.somedata}
                        </p>
                        <p className="flex items-center">
                          <strong>Remove</strong>:{" "}
                          <MdDelete
                            color="red"
                            size={24}
                            onClick={() => handledelete(element.id)}
                          />
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

export default CardsDetail;
