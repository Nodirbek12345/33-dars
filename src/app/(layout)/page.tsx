import { BASE_URL } from "@/shared/api";
import Hero from "@/shared/components/hero/Hero";
import ProductView from "@/shared/components/product-view/ProductView";
import { memo } from "react";

const HomePage = async () => {
  const response = await fetch(BASE_URL + "?limit=8", {
    next: { revalidate: 300 },
  });
  const data = await response.json();

  return (
    <>
      <Hero />
      <ProductView data={data?.data.allProducts} />
    </>
  );
};

export default memo(HomePage);
