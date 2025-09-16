import Image from "next/image";
import { memo } from "react";

const Detail = async ({ params }: { params: Promise<{ id: string }> }) => {
  const { id } = await params;
  const response = await fetch(`https://api.errorchi.uz/product/${id}`);
  const data = await response.json();
  const product = data?.data;
  console.log(product);

  return (
    <div className="flex py-10 px-[100px]  justify-between">
      <div className="relative w-[800px] h-[500px]">
        <Image
          src={"https://api.errorchi.uz/product/image/" + product?.images[0]}
          fill
          className="rounded-xl object-cover cursor-pointer"
          alt={product?.title}
        />
      </div>
      <div className="flex w-full flex-col gap-3 pt-[10px]">
        <h2 className="text-4xl text-center">{product.title}</h2>
        <p className="text-2xl text-center">Info : {product.description}</p>
        <p className="text-2xl text-center">Brand : {product.brand}</p>
        <p className="text-2xl text-center">
          Category : {product.category.name}
        </p>
        <p className="text-2xl text-center">Stock : {product.stock}</p>
        <p className="text-2xl text-center">by {product.user.fname}</p>
        <br />
        <br />
        <p className="text-2xl text-center text-green-600 line-through">
          Price : {product.price}
        </p>
        <p className="text-3xl text-center text-red-600 line-through">
          Price : {product.price}
        </p>
        <button className="border text-2xl m-auto border-green-600 rounded-xl w-[100px]  hover:bg-green-600 hover:text-white">
          buy
        </button>
      </div>
    </div>
  );
};

export default memo(Detail);
