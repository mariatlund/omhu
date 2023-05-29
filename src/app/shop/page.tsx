"use client";
import React from "react";
import { headers, url } from "../../../config.js";
import ProductCard from "@/components/Cards/ProductCard";
import FilterMenu from "@/components/Menu/FilterMenu";
import SortMenu from "@/components/Menu/SortMenu";
import { Products } from "@/types/products.js";
import { useState, useEffect, useMemo } from "react";
import { FilterOptions } from "@/types/filterOptions";

// interface shopProps {
//   handleFilter: (e: React.ChangeEvent<HTMLInputElement>) => void;
//   handlePriceChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
//   handleSort: (e: React.ChangeEvent<HTMLInputElement>) => void;
//   products?: Products;
// }

const Shop: React.FC = () => {
  const [products, setProducts] = useState<Products>([]);
  const [selectedSort, setSelectedSort] = useState<string>("Most Popular");
  const [selectedFilter, setSelectedFilter] = useState<FilterOptions>({
    filterCategory: [],
    price: {
      min: 0,
      max: 0,
    },
  });

  useEffect(() => {
    const fetchData = async () => {
      try {
        const options = {
          method: "GET",
          headers: headers,
        };
        const res = await fetch(url, options);
        const data = await res.json();
        setProducts(data);
        console.log("products", data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  //setting the selected sort
  const handleSort = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSelectedSort(e.target.value);
  };

  //setting the selected filter for category
  const handleFilter = (e: React.ChangeEvent<HTMLInputElement>) => {
    const filterValue = e.target.value;
    setSelectedFilter((prevValues) => {
      let updatedFilters = [...prevValues.filterCategory];

      if (e.target.checked) {
        if (!updatedFilters.includes(filterValue)) {
          updatedFilters.push(filterValue);
        }
      } else {
        updatedFilters = updatedFilters.filter((value) => value !== filterValue);
      }
      return { ...prevValues, filterCategory: updatedFilters };
    });
  };

  const filteredAndSortedProducts = useMemo(() => {
    let filteredProducts = [...products];
    //apply filters
    if (selectedFilter.filterCategory.length > 0) {
      filteredProducts = filteredProducts.filter((product: any) => {
        return selectedFilter.filterCategory.includes(product.product_category);
      });
    }

    // apply price filter
    filteredProducts = filteredProducts.filter((product: any) => {
      const { min, max } = selectedFilter.price;
      const productPrice = product.product_price;
      return (min === 0 || productPrice >= min) && (max === 0 || productPrice <= max);
    });

    //apply sort

    const sortOption = selectedSort;
    filteredProducts.sort((a: any, b: any) => {
      switch (sortOption) {
        case "Most Popular":
          const aNewlyAdded = a.product_newly_added ?? false;
          const bNewlyAdded = b.product_newly_added ?? false;
          if (aNewlyAdded && !bNewlyAdded) {
            return -1; // a comes first
          } else if (!aNewlyAdded && bNewlyAdded) {
            return 1; // b comes first
          } else {
            return 0; // no change in order
          }
        case "Price low-high":
          return a.product_price - b.product_price;
        case "Price high-low":
          return b.product_price - a.product_price;
        default:
          return 0; // no change in order
      }
    });

    return filteredProducts;
  }, [products, selectedFilter, selectedSort]);

  const handlePriceChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    console.log("run2");
    setSelectedFilter((prevValues) => {
      let newPrice = { ...prevValues.price };
      if (e.target.name === "min_price") {
        newPrice = {
          ...newPrice,
          min: parseInt(e.target.value),
        };
        console.log("min", e.target.value);
      } else {
        newPrice = {
          ...newPrice,
          max: parseInt(e.target.value),
        };
        console.log("max", e.target.value);
      }
      return {
        ...prevValues,
        price: newPrice,
      };
    });
  };

  return (
    <>
      <div className="container mt-5 mb-14 md:mt-14 md:mb-20">
        <h1 className="style-h1 mb-10">Shop</h1>

        <div className="flex flex-row justify-between mb-10">
          <FilterMenu handleFilter={handleFilter} handlePriceChange={handlePriceChange} selectedFilter={selectedFilter} setSelectedFilter={setSelectedFilter} />
          <SortMenu handleSort={handleSort} selectedSort={selectedSort} />
        </div>
        <div className="flex flex-row  gap-5 mb-10 items-center">
          {selectedFilter.filterCategory.length > 0 &&
            selectedFilter.filterCategory.map((category) => (
              <div className="border-blue border rounded-3xl h-10 w-fit px-3 py-1 pt-2 text-center  bg-blue-25 text-blue " key={Math.random()}>
                {category}
              </div>
            ))}
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3  justify-items-center align-middle gap-11 gap-y-16 lg:gap-16 ">
          {filteredAndSortedProducts?.map((product: any) => {
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
            return (
              <ProductCard
                key={product.product_id}
                productName={product.product_name}
                price={product.product_price}
                productImage={randomColor.images[imageIndex].imageSrc}
                newlyAdded={product.product_newly_added}
                colors={product.product_colors}
                id={product.product_id}
                alt={randomColor.images[imageIndex].alt}
              />
            );
          })}
        </div>
      </div>
    </>
  );
};

export default Shop;

// This should be the shop page with the product list
