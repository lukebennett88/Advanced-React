import { gql, useQuery } from "@apollo/client";
import Link from "next/link";
import * as React from "react";
import { formatMoney } from "../lib/format-money";

const ALL_PRODUCTS_QUERY = gql`
  query AllProductsQuery {
    allProducts {
      id
      name
      slug
      price
      description
      image {
        id
        imageUrl: image {
          publicUrlTransformed
        }
        altText
      }
    }
  }
`;

interface Product {
  __typename: "Product";
  id: string;
  name: string;
  slug: string;
  price: number;
  description: string;
  image?: {
    id: string;
    imageUrl: {
      publicUrlTransformed: string;
    };
    altText?: string;
  };
}

interface Data {
  allProducts: Product[];
}

export function Products() {
  const { data, error, loading } = useQuery<Data>(ALL_PRODUCTS_QUERY);
  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error :(</p>;
  return (
    <div>
      <Pagination />
      {/* Product grid */}
      <ul className="grid gap-16 my-5 lg:grid-cols-2">
        {data.allProducts.map((product) => (
          <Product key={product.id} product={product} />
        ))}
      </ul>
      <Pagination />
    </div>
  );
}

function Pagination() {
  return (
    <div className="text-center lg:text-left">
      <div className="inline-flex mt-4 text-sm border divide-x rounded-lg">
        <Link href="/">
          <a
            aria-disabled
            className="py-4 pointer-events-none px-7 text-gray-light"
          >
            &larr; Prev
          </a>
        </Link>
        <p className="hidden py-4 px-7 sm:block">Page 1 of 3</p>
        <p className="hidden py-4 px-7 sm:block">11 items total</p>
        <Link href="/">
          <a className="py-4 px-7">Next &rarr;</a>
        </Link>
      </div>
    </div>
  );
}

interface ProductProps {
  product: Product;
}

function Product({ product }: ProductProps): JSX.Element {
  return (
    <li
      key={product.id}
      className="relative flex flex-col max-w-xl mx-auto border border-gray-200 shadow-xl"
    >
      <img
        src={product.image.imageUrl?.publicUrlTransformed}
        alt={product.image.altText}
        className="object-cover w-full h-100"
      />
      <h3 className="-mt-8 text-center transform -skew-x-5 -rotate-1">
        <Link href={`/products/${product.slug}`}>
          <a className="px-3 text-4xl leading-snug text-white bg-red text-shadow decoration-clone hover:underline">
            {product.name}
          </a>
        </Link>
      </h3>
      <p className="absolute -top-1 -right-1 bg-red text-white text-3xl font-semibold leading-none p-1.5 transform rotate-3">
        {formatMoney(product.price)}
      </p>
      <p className="flex-1 px-8 py-4 leading-8">{product.description}</p>
      <div className="grid grid-cols-3 border-t border-gray-300 divide-x divide-gray-300">
        <button type="button" className="p-3">
          Edit ✏️
        </button>
        <button type="button" className="p-3">
          Add to cart 🛒
        </button>
        <button type="button" className="p-3">
          Delete ❌
        </button>
      </div>
    </li>
  );
}
