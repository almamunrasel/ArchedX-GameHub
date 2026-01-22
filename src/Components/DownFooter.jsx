import React from "react";
import { Link } from "react-router";
import { FaFacebookF, FaXTwitter } from "react-icons/fa6";
import { BsSteam } from "react-icons/bs";

const DownFooter = () => {
  return (
    <footer className="bg-gradient-to-b from-[#111827] to-[#0b1220] text-accent  ">
      <div className="max-w-7xl mx-auto px-6 py-10 border-t border-base-300">

        {/* Top Row */}
        <div className="flex flex-col md:flex-row md:items-center md:justify-center gap-6 text-xs">
          
          {/* Left: Valve text */}
          <div className="flex items-center gap-4">
            <span className="bg-gray-300 text-black font-bold px-2 py-1 text-[10px] tracking-widest">
              ArcadeX
            </span>

            <p className="leading-relaxed max-w-xl">
              © 2026 Valve Corporation. All rights reserved. All trademarks are
              property of their respective owners in the US and other countries.
              
              VAT included in all prices where applicable.
            </p>
          </div>

          {/* Right: Steam logo */}
          <div className="flex items-center gap-2 text-sm text-base-content opacity-70">
            <BsSteam size={20} />
            <span className="uppercase tracking-wide">ArcadeX</span>
          </div>
        </div>

        {/* Policy Links */}
        <div className="flex flex-wrap justify-center gap-4 mt-4 text-xs">
          <Link className="hover:text-base-content">Privacy Policy</Link>
          <span>|</span>
          <Link className="hover:text-base-content">Legal</Link>
          <span>|</span>
          <Link className="hover:text-base-content">Accessibility</Link>
          <span>|</span>
          <Link className="hover:text-base-content">
            Steam Subscriber Agreement
          </Link>
          <span>|</span>
          <Link className="hover:text-base-content">Refunds</Link>
          <span>|</span>
          <Link className="hover:text-base-content">Cookies</Link>
        </div>

        {/* Bottom Row */}
        <div className="flex flex-col md:flex-row md:items-center md:justify-center gap-6 mt-8 text-sm border-t border-base-300 pt-6">

          {/* Links */}
          <div className="flex flex-wrap gap-4 items-center">
            <Link className="hover:text-base-content">About Valve</Link>
            <span>|</span>
            <Link className="hover:text-base-content">Jobs</Link>
            <span>|</span>
            <Link className="hover:text-base-content">Steamworks</Link>
            <span>|</span>
            <Link className="hover:text-base-content">
              Steam Distribution
            </Link>
            <span>|</span>
            <Link className="hover:text-base-content">Support</Link>
            <span>|</span>
            <Link className="hover:text-base-content">Gift Cards</Link>
            <span>|</span>
            <FaFacebookF className="cursor-pointer opacity-70 hover:opacity-100 transition" />
            <span>|</span>
            <FaXTwitter className="cursor-pointer opacity-70 hover:opacity-100 transition" />

          </div>

          {/* Social Icons
          <div className="flex gap-4 text-base-content">
            <FaFacebookF className="cursor-pointer opacity-70 hover:opacity-100 transition" />
            <FaXTwitter className="cursor-pointer opacity-70 hover:opacity-100 transition" />
          </div> */}
        </div>
      </div>
    </footer>
  );
};

export default DownFooter;
