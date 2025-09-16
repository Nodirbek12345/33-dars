"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { memo } from "react";

const Header = () => {
  const pathname = usePathname();

  const handleSignIn = () => {
    open("http://localhost:5173/login");
  };

  return (
    <div className="px-9 header py-7 shadow-2xl flex justify-between">
      <div className="flex gap-3">
        <Link href="/" className={pathname === "/" ? "active" : ""}>Home</Link>
        <Link href="/about" className={pathname === "/about" ? "active" : ""}>About</Link>
        <Link href="/contact" className={pathname === "/contact" ? "active" : ""}>Contact</Link>
        <Link href="/login" className={pathname === "/login" ? "active" : ""}>Login</Link>
      </div>
      <button onClick={handleSignIn}>Sign in</button>
    </div>
  );
};

export default memo(Header);
