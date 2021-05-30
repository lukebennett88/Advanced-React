import * as React from "react";
import { Header } from "./header";

export function Layout({ children }): JSX.Element {
  return (
    <div className="flex flex-col">
      <Header />
      <main className="flex-1 w-full max-w-5xl px-6 mx-auto mt-5">
        {children}
      </main>
    </div>
  );
}
