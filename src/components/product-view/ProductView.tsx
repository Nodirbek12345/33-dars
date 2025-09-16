import { FC, memo } from "react";
import ProductImage from "./ProductImage";

const ProductView: FC<{ data: any[] }> = ({ data }) => {
  return (
    <div className="grid grid-cols-4 gap-7 p-10 bg-gray-300">
      {data?.map((item: any) => (
        <div
          key={item.id}
          className="shadow-2xl bg-white rounded-xl  h-[420px]"
        >
          <ProductImage
            title={item.title}
            image={item.images[0]}
            id={item.id}
          />
          <div className="px-3 pt-1">
            <h3 className="text-2xl ">{item.title}</h3>
            <div className="flex justify-between">
              <div className="flex flex-col">
                <span className="text-sm">{item.description}</span>
                <button className="border border-green-600 rounded-xl w-[50px] m-3 hover:bg-green-600 hover:text-white">
                  buy
                </button>
              </div>
              <span className="text-green-600 text-2xl">{item.price}$</span>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default memo(ProductView);
