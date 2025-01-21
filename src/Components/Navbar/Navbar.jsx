import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";
import { useSelector } from "react-redux";
import { RxCross2 } from "react-icons/rx";
//import { useNavigate } from "react-router-dom";
import { MdDelete } from "react-icons/md";
import { NavLink } from "react-router-dom";
import { Delete } from "../../Redux/Action/Action";
import { useDispatch } from "react-redux";
function Navbar() {
  const items = useSelector((state) => state.cart.items);
  //console.log("Items" ,items);

  const [showCart, setShowCart] = useState(false);
  const OpenCart = () => {
    setShowCart(!showCart);
  };
  const total = items.reduce((a, items) => a + items.total, 0);
  // const navigate = useNavigate();
  // const openselected = (id) =>
  // {
  //   navigate(`/products/${id}`);
  // }
  const dispatch = useDispatch();
  const deleteitem = (id) => {
    dispatch(Delete(id));
  };
  return (
    <div className="w-full h-[100px] bg-black flex items-center">
      <div className="w-11/12 mx-auto">
        <div className="flex justify-between items-center">
          <div className="flex gap-10 text-white items-center">
            <div>
              <h2 className="text-xl font-medium md:text-3xl md:font-bold">
                Arsh Shopping Center
              </h2>
            </div>
            <div className="hidden">
              <h2 className="text-3xl font-bold">Home</h2>
            </div>
          </div>
          <div className="relative cursor-pointer" onClick={OpenCart}>
            <FontAwesomeIcon icon={faCartShopping} size="2x" color="white" />
            {/* Badge */}
            <div className="absolute -top-2 -right-2  bg-blue-500 text-white text-sm font-bold w-6 h-6 rounded-full flex justify-center items-center">
              {items.length}
            </div>
            {showCart && items.length === 0 ? (
              <div className="absolute w-[280px] md:w-[300px] h-[70px] px-5 py-5 border-2 border-black text-black bg-white right-0">
                <div className="flex justify-between">
                  <span>Your Cart is Empty</span>
                  <RxCross2 className="cursor-pointer text-xl" />
                </div>
              </div>
            ) : (
              showCart &&
              items.length > 0 && (
                <div className="">
                  <div className="absolute w-[300px] sm:w-[450px] max-h-[180px] overflow-auto px-2 sm:px-5 py-5 border-2 border-black text-black bg-white right-0 rounded-md">
                    <table className="w-full table-auto">
                      <thead>
                        <tr className="border-b-4 border-black">
                          <th className="text-start">Photo</th>
                          <th className="text-start">Resturant Name</th>
                          <th></th>
                        </tr>
                      </thead>

                      <tbody>
                        {items.map((item, index) => (
                          <tr className="cursor-pointer" key={index}>
                            {/* onClick={() => openselected(item.id)} */}
                            <td className="py-3">
                              <NavLink to={`/products/${item.id}`}>
                                <div className="w-[110px] h-[90px]">
                                  <img
                                    src={item.imgdata}
                                    alt=""
                                    className="w-full h-full"
                                  />
                                </div>
                              </NavLink>
                            </td>
                            <td className="py-3">
                              <div className="flex flex-col gap-y-0 md:gap-y-3 text-md font-semibold">
                                <div>{item.rname}</div>
                                <div>Price: {item.price}</div>
                                <div>Quantity : {item.qnty}</div>
                                <div className=" flex md:hidden">
                                  {" "}
                                  <MdDelete color="red" size={25} />
                                </div>
                              </div>
                            </td>
                            <td className="items-start py-3 hidden md:flex">
                              <MdDelete
                                color="red"
                                size={25}
                                onClick={() => deleteitem(item.id)}
                              />
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                    <div className="border-t-4 border-black w-full px-5 py-2 font-bold text-xl">
                      Total: ${total}
                    </div>
                  </div>
                </div>
              )
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
