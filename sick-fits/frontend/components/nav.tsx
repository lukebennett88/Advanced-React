import Link from "next/link";
import * as React from "react";

export function Nav() {
  return (
    <nav className="border-t border-black">
      <Link href="sell">
        <a>Sell</a>
      </Link>
      <Link href="products">
        <a>Products</a>
      </Link>
      <Link href="orders">
        <a>Orders</a>
      </Link>
      <Link href="account">
        <a>Account</a>
      </Link>
    </nav>
  );
}
