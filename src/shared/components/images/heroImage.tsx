import { memo } from "react";
import heroImage from "../assests/Rectangle 2.svg";
import Image from "next/image";

const HeroImage = () => {
  return (
    <div className="w-full  ">
      <Image
        src={heroImage}
        alt="Hero Image"
        width={300}
        height={400}
        className="w-full h-full object-cover"
      />
    </div>
  );
};

export default memo(HeroImage);