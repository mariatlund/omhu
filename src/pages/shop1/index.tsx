import Head from "next/head";
import React from "react";
import { headers, url } from "../../../config.js";
import { Layout } from "@/app/pageLayout";
import ProductCard from "@/components/Cards/ProductCard";
import FilterMenu from "@/components/Menu/FilterMenu";
import SortMenu from "@/components/Menu/SortMenu";
import { singleProductType } from "@/types/singleProductType";
import { Products } from "@/types/products.js";

interface shopProps {
  handleFilter: (e: React.ChangeEvent<HTMLInputElement>) => void;
  handlePriceChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  handleSort: (e: React.ChangeEvent<HTMLInputElement>) => void;
  products: Products;
}

function shop({ handleFilter, handlePriceChange, handleSort, products }: shopProps) {
  //sorting products by newly added first

  const sortedProducts = products?.sort((a: any, b: any) => {
    if (a.product_newly_added && !b.product_newly_added) {
      return -1; // a comes first
    } else if (!a.product_newly_added && b.product_newly_added) {
      return 1; // b comes first
    } else {
      return 0; // no change in order
    }
  });
  console.log(products);
  return (
    <>
      <Layout products={products}>
        <div className="container mt-5 mb-14 md:mt-14 md:mb-20">
          <h1 className="style-h1 mb-10">Shop</h1>
          {/* {module here} */}
          <div className="flex flex-row justify-between mb-10">
            <FilterMenu handleFilter={handleFilter} handlePriceChange={handlePriceChange} />
            <SortMenu handleSort={handleSort} />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3  justify-items-center align-middle gap-11 gap-y-16 lg:gap-16 ">
            {sortedProducts?.map((product: any) => {
              const colorKeys = Object.keys(product.product_colors);
              const randomColorKey = colorKeys[Math.floor(Math.random() * colorKeys.length)];
              const randomColor = product.product_colors[randomColorKey];
              let imageIndex = 0;
              if (product.product_name === "Pillows") {
                imageIndex = 0;
              } else if (product.product_name === "Ottoman") {
                imageIndex = 1;
              } else if (product.product_name === "Corner Sofa") {
                imageIndex = 2;
              } else {
                imageIndex = 3;
              }
              return <ProductCard key={product.product_id} productName={product.product_name} price={product.product_price} productImage={randomColor.images[imageIndex]} newlyAdded={product.product_newly_added} colors={product.product_colors} />;
            })}
          </div>
        </div>
      </Layout>
    </>
  );
}

export async function getServerSideProps() {
  const options = {
    method: "GET",
    headers: headers,
  };
  const res = await fetch(url, options);
  const products = await res.json();
  return {
    props: { products: products },
  };
}

export default shop;

// This should be the shop page with the product list
