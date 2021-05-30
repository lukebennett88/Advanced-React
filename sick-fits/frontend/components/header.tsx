import * as React from 'react';
import Link from 'next/link';
import { Nav } from './nav';

export function Header() {
  return (
    <header>
      <div>
        <Link href="/">
          <a className="relative inline-block px-4 py-2 text-6xl text-white uppercase transform -skew-x-6 bg-red-600">
            Sick Fits
          </a>
        </Link>
      </div>
      <div>Search</div>
      <Nav />
    </header>
  );
}
