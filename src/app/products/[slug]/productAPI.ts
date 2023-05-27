import { headers } from "../../../../config.js";

export async function getProductData(slug: number) {
  const options = {
    method: "GET",
    headers: headers,
  };

  const res = await fetch(`https://njmiqeyayygbjangsapv.supabase.co/rest/v1/Products/${slug}`, options);
  const product = await res.json();

  return product;
}
