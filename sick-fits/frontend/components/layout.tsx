import * as React from 'react';
import { Header } from './header';

export function Layout({ children }): JSX.Element {
  return (
    <div>
      <Header />
      {children}
    </div>
  );
}
