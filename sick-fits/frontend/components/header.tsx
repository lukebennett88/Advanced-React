import Link from "next/link";
import * as React from "react";

import { Nav } from "./nav";

export function Header() {
  return (
    <header>
      <div className="grid items-center justify-between px-4 py-8 sm:px-6 lg:px-8">
        <Link href="/">
          <a className="relative inline-block px-4 py-2 text-6xl text-white uppercase transform -skew-x-6 bg-red-600">
            Sick Fits
          </a>
        </Link>
      </div>
      <div className="px-4 border-t-8 border-black sm:px-6 lg:px-8">Search</div>
      <Nav />
    </header>
  );
}
