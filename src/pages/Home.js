import React from "react";
import ProductDetails from "../components/ProductDetails";
import ShowProducts from "../components/ShowProducts";
import Slider from "../components/Slider";
import FeatureProduct from "../Data/FeatureProduct";
import SingleProductContext from "../Data/SingleProductContext";

function Home() {
  return (
    <div>
      <Slider />
      <FeatureProduct>
        <SingleProductContext>
          <ShowProducts />
        </SingleProductContext>
      </FeatureProduct>
    </div>
  );
}

export default Home;
