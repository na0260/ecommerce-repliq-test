"use client"
import React from 'react';

const Product = (props) => {
    return (
        <div>
            <div className="card w-100 glass shadow-2xl hover:shadow-amber-50">
                <figure><img src={props.product.image} alt="car!"/></figure>
                <div className="card-body">
                    <h2 className="card-title text-grey">{props.product.title}</h2>
                    <p>{props.product.short_des}</p>

                    <div className="card-actions items-center">
                        <div className="">
                            <p className="font-extrabold text-dark">Price: {props.product.price} BDT</p>
                        </div>
                        <div className="justify-end">
                            <button  className="btn btn-primary hover:btn-ghost">Add to Cart
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Product;