"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { memo } from "react";
import Logo from "../images/logo";
import {
  ChevronDown,
  CircleUserIcon,
  SearchIcon,
  ShoppingCartIcon,
} from "lucide-react";

const Header = () => {
  const pathname = usePathname();

  const handleSignIn = () => {
    open("http://localhost:5173/login");
  };

  return (
    <div className="w-[1240px] m-auto header py-6 flex justify-between">
      <div className="flex gap-[24px] items-center">
        <Link href="/" className="mr-[16px]">
          <Logo />
        </Link>
        <Link
          href="/shop"
          className={`${pathname === "/shop" ? "active" : ""} flex`}
        >
          Shop <ChevronDown />
        </Link>
        <Link
          href="/on-sale"
          className={pathname === "/on-sale" ? "active" : ""}
        >
          On Sale
        </Link>
        <Link
          href="/new-arrivals"
          className={pathname === "/new-arrivals" ? "active" : ""}
        >
          New Arrivals
        </Link>
        <Link href="/brands" className={pathname === "/brands" ? "active" : ""}>
          Brands
        </Link>
      </div>
      <div className="flex gap-3 w-[577px] bg-[#F0F0F0] px-[18px]  rounded-[62px] h-[48px] items-center">
        <SearchIcon />
        <input
          type="text"
          className="w-full  outline-none"
          placeholder="Search for products..."
        />
      </div>
      <div className="flex items-center gap-[18px]">
        <Link href="/cart">
          <ShoppingCartIcon />
        </Link>
        <button onClick={handleSignIn}>
          <CircleUserIcon />
        </button>
      </div>
    </div>
  );
};

export default memo(Header);
