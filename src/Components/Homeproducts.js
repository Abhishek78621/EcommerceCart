import React from "react";
import Products from "./Products";
import "./home.css"

const Homeproducts = () => {
  return (
    <div className="home">
      <div >
        <Products
          id="1"
          image="https://media-ik.croma.com/prod/https://media.croma.com/image/upload/v1694674381/Croma%20Assets/Communication/Mobiles/Images/300821_0_onayra.png?tr=w-360"
          title="Apple iphone "
          price= " 124000"
        />
      </div>
      <div >
        <Products
          id="2"
          image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSS3H8hnP_6n-t1MQ8M1OpzG7lgqJCn7AAgcA&usqp=CAU"
          title="Iphone XR"
          price="12520"
        />
      </div>
      <div >
        <Products
          id="3"
          image="https://www.housekeepingenterprises.com/wp-content/uploads/2023/08/Realme-Narzo-N53-scaled.jpg"
          title="Realme Narzo N53 "
          price="93330"
        />
      </div>
      <div >
        <Products
          id="4"
          image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTNDl50mCafIWaR73VBh6OEoD-wtl-g3F_M9w&usqp=CAU"
          title="Vivo v29e "
          price="72360"
        />
      </div>
      <div >
        <Products
          id="5"
          image="https://media.croma.com/image/upload/v1662703105/Croma%20Assets/Communication/Mobiles/Images/261963_oqrd6j.png"
          title="Apple iPhone 14 Pro "
          price="134260"
        />
      </div>
      <div >
        <Products
          id="6"
          image="https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/MPTG3?wid=1144&hei=1144&fmt=jpeg&qlt=90&.v=1661793480599"
          title="Apple iPhone 14 Pro "
          price="232060"
        />
      </div>
      <div > 
        <Products
          id="7"
          image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRueB_j6KugYnwp0eVDhZ2V7Q-VgKyabj2ISLfkvdQ37Xyn2ItTLkYIMz3MK0WBhS_Ncwk&usqp=CAU"
          title="Apple iPhone 12 Pro "
          price="113500"
        />
      </div>
      <div >
        <Products
          id="8"
          image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSuj69LcxHRdenQqbsp_4XFlLrO2P2Y4XXWJg&usqp=CAU"
          title="Redmi 12 5G"
          price="34060"
        />
      </div>
    </div>
  );
};

export default Homeproducts;
