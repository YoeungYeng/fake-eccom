import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
// import "./cartTab.css";
import CartCheckout from "./CartCheckout";
import { Link } from "react-router-dom";
import { addToCart, dincrease, increase, removeFromCart } from "../store/cart";

const CartTap = ({ closeCart, id }) => {
  const dispatch = useDispatch();
  const { items, totalQuality, totalAmount } = useSelector((state) => state.cart);

  // const totalAmount = cartItems.reduce(
  //   (total, item) => total + item.price * item.quantity,
  //   0
  // );

  // console.log(cartItems);



  return (
    <div
      className={``}
      style={{ background: "#f2f2f2" , zIndex: "999", position: "relative"}}
    >
      <div className="d-flex justify-content-between" style={{ backgroundColor: "red", width: "100%", height: "50px", alignItems: "center", padding :"20px"}} >
        <h2 style={{fontSize: "26px", textAlign: "center",  padding :"10px", color: "#fff"}}>Shopping Cart</h2>
        <button style={{borderRadius: "50%", width: "40px", height: "40px"}}
          onClick={closeCart}
          className="btn btn-danger"
          
        >
          <span>
            <i class="fa-duotone fa-solid fa-xmark"></i>
          </span>
          {/* {show  ? <CartTap /> : "" } */}
        </button>
      </div>
      <hr className="border border-primary border-3 opacity-75" />
      <div style={{height: "400px"}} className="overflow-auto bg-primary">
      {items.length === 0 ? (
        <p className="text-5xl text-blue-500">Your cart is empty.</p>
      ) : (
        <>
          {items.map((item) =>(
            <div  className="d-flex   p-2 ml-2 overflow-auto" style={{color: "#fafafa"}}>
            <div
              className="d-flex justify-content-between  p-4 border w-100" style={{alignItems: "center"}}
              
            >
              <img
                src={item.image}
                style={{ width: "40px", objectFit: "contain" }}
              />
              <h4 style={{ fontSize: "12px" }}>{item.category}</h4>
              {/* <p style={{ fontSize: "12px" }}>Quantity: {item.quantity}</p> */}
    
              <p style={{ marginLeft: "5px" }}>${item.price * item.quantity}</p>
              <div style={{ marginLeft: "20px", display: "flex" }}>
                <button
                  onClick={() => dispatch(dincrease({ id: item.id }))}
                  className="btn btn-primary ml-3"
                  style={{width: "40px", height: "40px", borderRadius: "50%", padding: "10px", gap: "10px"}}
                  
                >
                  <span>
                    <i class="fa-solid fa-minus"></i>
                  </span>
                </button>
                <span className="ml-2" style={{padding: "10px"}}> {item.quantity} </span>
                <button
                   onClick={() => dispatch(increase({ id: item.id }))}
                  className="btn btn-primary ml-2"
                  style={{width: "40px", height: "40px", borderRadius: "50%", padding: "10px", gap: "10px"}}
                 
                >
                  <span>
                    <i class="fa-solid fa-plus"></i>
                  </span>
                </button>
              </div>
            </div>
            
          </div>
          ))}
        </>
      )}
      </div>
      
      <div
        class=" text-center w-100  " 
        
      >
        <div className="col-xxl-12 " style={{position: "absolte", bottom: "20px", left: "0px"}}>
          <div className="card w-100">
            <div className="card-body">
              <h5 className="card-title">Order Summary</h5>
              <hr />
              <p className="card-text">
                Total Items:{" "}
                ${totalQuality}
              </p>
              <p className="card-text fw-bold">Total Amount: ${totalAmount} </p>
              <Link to={"/cart"}>
                <button className="btn btn-primary w-100 mt-3">
                  Proceed to Checkout
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartTap;
