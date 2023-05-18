import Head from "next/head";
import React from "react";
import { getProducts } from "../../../config.js";
import { Layout } from "@/app/pageLayout";
import ProductCard from "../../components/Cards/ProductCard";
import FilterMenu from "../../components/Menu/FilterMenu";
import SortMenu from "../../components/Menu/SortMenu";

const products = getProducts();
console.log("products", products);

interface shopProps {
  handleFilter: (value: string, isChecked: boolean) => void;
  handlePriceChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  handleSort: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

function shop({ handleFilter, handlePriceChange, handleSort }: shopProps) {
  return (
    <>
      <Layout>
        <div className="container mt-5 mb-14 md:mt-14 md:mb-20">
          <h1 className="style-h1 mb-10">Shop</h1>
          {/* {module here} */}
          <div className="flex flex-row justify-between mb-10">
            <FilterMenu handleFilter={handleFilter} handlePriceChange={handlePriceChange} />
            <SortMenu handleSort={handleSort} />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3  justify-items-center align-middle gap-11 gap-y-16 lg:gap-16 ">
            <ProductCard
              productName={"Teddy"}
              price={2335}
              productImage={"https://omhucph.com/wp-content/uploads/2023/04/DSC_9254_MBS-5769-Cream-white_chrome_square-1.jpg"}
              newlyAdded={true}
              colors={["#000000", "#dddddd", "#ff0000", "#00ff00", "#0000ff", "#0000ff", "#00ff00"]}
            />
            <ProductCard
              productName={"Teddy"}
              price={2335}
              productImage={"https://omhucph.com/wp-content/uploads/2023/04/DSC_9254_MBS-5769-Cream-white_chrome_square-1.jpg"}
              newlyAdded={true}
              colors={["#000000", "#dddddd", "#ff0000", "#00ff00", "#0000ff", "#0000ff", "#00ff00"]}
            />
            <ProductCard
              productName={"Teddy"}
              price={2335}
              productImage={"https://omhucph.com/wp-content/uploads/2023/04/DSC_9254_MBS-5769-Cream-white_chrome_square-1.jpg"}
              newlyAdded={true}
              colors={["#000000", "#dddddd", "#ff0000", "#00ff00", "#0000ff", "#0000ff", "#00ff00"]}
            />
            <ProductCard
              productName={"Teddy"}
              price={2335}
              productImage={"https://omhucph.com/wp-content/uploads/2023/04/DSC_9254_MBS-5769-Cream-white_chrome_square-1.jpg"}
              newlyAdded={true}
              colors={["#000000", "#dddddd", "#ff0000", "#00ff00", "#0000ff", "#0000ff", "#00ff00"]}
            />
          </div>
        </div>
      </Layout>
    </>
  );
}

export default shop;

// export async function getServerSideProps() {
//   const options = {
//     method: "GET",
//     headers: headers,
//   };
//   const res = await fetch(url, options);
//   const products = await res.json();
//   return {
//     props: { products },
//   };
// }

// This should be the shop page with the product list
