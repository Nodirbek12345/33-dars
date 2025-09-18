"use client";
import { log } from "console";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { FC, memo } from "react";

const ProductImage: FC<{ title: string; image: string; id: number }> = (
  props
) => {
  const { title, image, id } = props;

  const router = useRouter();
  return (
    <div className="relative  h-[300px]">
      <Image
        src={"https://api.errorchi.uz/product/image/" + image}
        alt={title}
        fill
        className="rounded-t-xl object-cover cursor-pointer"
        onClick={() => router.push(`/product/${id}`)}
      />
    </div>
  );
};

export default memo(ProductImage);
