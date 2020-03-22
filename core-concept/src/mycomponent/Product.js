import React from 'react';

const Product = (props) => {

   

    const productStyle={
         border: "1px solid red",
         backgroundColor: "darkslategrey",
         borderRadius : "5px",
         width : "200px",
         height: "200px",
         margin : "50px",
         padding : "20px",
         color: "white",
         float: "left"
    }


    return (
        <div style={productStyle}>
            <h4>Name : {props.product} </h4>
            <h2>Price : {props.price}</h2>
            <button>Buy Now</button>
        </div>
    );
};

export default Product;