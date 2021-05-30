import Link from "next/link";
import * as React from "react";

const links = [
  { name: "Products", target: "/products" },
  { name: "Sell", target: "/sell" },
  { name: "Orders", target: "/orders" },
  { name: "Account", target: "/account" },
  { name: "Sign Out", target: "/sign-out" },
  { name: "Cart", target: "/cart" },
];

export function Header() {
  return (
    <header>
      <div className="flex flex-col items-center pl-6 border-b-8 border-black xl:flex-row xl:items-stretch">
        <div className="py-6">
          <Link href="/">
            <a className="inline-block p-2 text-4xl text-white uppercase transform bg-red -skew-x-7 hover:underline">
              Sick Fits
            </a>
          </Link>
        </div>
        <nav className="flex flex-wrap justify-center flex-1 my-4 xl:my-0 xl:justify-end">
          {links.map((link) => (
            <Link key={link.target} href={link.target}>
              <a className="relative flex items-center justify-center flex-shrink-0 px-4 text-sm uppercase lg:text-lg lg:px-6 xl:text-xl xl:px-8 group">
                <span
                  aria-hidden
                  className="absolute top-0 left-0 w-0.5 h-full transform bg-gray-200 -skew-x-20"
                />
                <span className="relative">
                  {link.name === "Cart" ? (
                    <span className="flex items-center space-x-2">
                      <span>{link.name}</span>
                      <span className="flex items-center justify-center w-6 h-6 text-sm text-center text-white rounded-full bg-red">
                        1
                      </span>
                    </span>
                  ) : (
                    link.name
                  )}
                  <span
                    aria-hidden
                    className="absolute left-0 w-full h-1 transition duration-300 ease-in-out scale-x-0 rounded-sm transform-gpu -bottom-1 bg-red group-hover:scale-x-100"
                  />
                </span>
              </a>
            </Link>
          ))}
        </nav>
      </div>
      <input type="text" placeholder="Search" className="w-full px-6" />
    </header>
  );
}
