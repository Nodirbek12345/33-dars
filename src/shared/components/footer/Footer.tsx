import { memo } from "react";
import Logo from "../images/logo";
import Link from "next/link";
import {
  FacebookIcon,
  GithubIcon,
  InstagramIcon,
  Mail,
  TwitterIcon,
} from "lucide-react";

const Footer = () => {
  return (
    <footer className="mt-28 bg-primary pt-[170px] pb-16 md:pb-20 relative">
      <div className="container">
        <>
          <div
            className="max-w-[1240px] w-5/6 sm:w-full absolute bg-black -top-[10%] lg:-top-2/12
           left-1/2 -translate-x-1/2 rounded-2xl px-6 py-5 md:py-6 lg:py-8 md:px-16"
          >
            <div className="flex flex-col md:flex-row items-center justify-between">
              <div className="md:max-w-[551px] w-full">
                <h2 className="text-white text-3xl md:text-4xl font-semibold">
                  STAY UPTO DATE ABOUT OUR LATEST OFFERS
                </h2>
              </div>
              <form className="md:max-w-[350px] w-full space-y-3.5">
                <div className="bg-white flex items-center gap-[14px] rounded-[62px] px-[18px] h-12">
                  <Mail className="text-gray-400"/>
                  <input
                    type="email"
                    required
                    min={5}
                    className=" text-lg w-full outline-none"
                    placeholder="Enter Your Email Address"
                  />
                </div>
                <button type="submit" className="btn w-full bg-white h-12 rounded-[62px]">
                  Subscribe to Newsletter
                </button>
              </form>
            </div>
          </div>
        </>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-x-5 gap-y-7 pl-[30px]">
          <div>
            <Logo />
            <p className="text-sm sm:text-base my-10">
              We have clothes that suits your style and which you're proud to
              wear. From women to men.
            </p>
            <div className="flex space-x-4 text-gray-600">
              <Link href="#" className="hover:text-black">
                {<TwitterIcon />}
              </Link>
              <Link href="#" className="hover:text-black">
                {<FacebookIcon />}
              </Link>
              <Link href="#" className="hover:text-black">
                {<InstagramIcon />}
              </Link>
              <Link href="#" className="hover:text-black">
                {<GithubIcon />}
              </Link>
            </div>
          </div>

          <div>
            <h3 className="text-sm sm:text-base font-semibold mb-5 tracking-wide">
              COMPANY
            </h3>
            <ul className="space-y-4.5 text-base">
              <li>
                <a href="#" className="hover:underline">
                  About
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  Features
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  Works
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  Career
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-sm sm:text-base font-semibold mb-4 tracking-wide">
              HELP
            </h3>
            <ul className="space-y-4.5 text-base">
              <li>
                <a href="#" className="hover:underline">
                  Customer Support
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  Delivery Details
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  Terms & Conditions
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  Privacy Policy
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-sm sm:text-base font-semibold mb-4 tracking-wide">
              FAQ
            </h3>
            <ul className="space-y-4.5 text-base">
              <li>
                <a href="#" className="hover:underline">
                  Account
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  Manage Deliveries
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  Orders
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  Payments
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-sm sm:text-base font-semibold mb-4 tracking-wide">
              RESOURCES
            </h3>
            <ul className="space-y-4.5 text-base">
              <li>
                <a href="#" className="hover:underline">
                  Free eBooks
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  Development Tutorial
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  How to - Blog
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  Youtube Playlist
                </a>
              </li>
            </ul>
          </div>
        </div>
        <>
          <div className="border-t border-main-border mt-10 md:mt-12 py-4 text-center text-sm sm:text-base">
            Shop.co © 2000-2023, All Rights Reserved
          </div>
        </>
      </div>
    </footer>
  );
};

export default memo(Footer);
