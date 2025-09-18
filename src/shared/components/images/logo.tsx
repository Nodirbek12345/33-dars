import { memo } from "react";
import logo from "../assests/SHOP.CO.svg";
import Link from "next/link";
import Image from "next/image";

const MainLogo = () => {
  return (
    <Image src={logo} alt="Site Logo" width={160} height={22} loading="eager" />
  );
};

export default memo(MainLogo);
