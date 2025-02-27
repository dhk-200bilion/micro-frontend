import React, { PropsWithChildren } from "react";

export const Layout = ({ children }: PropsWithChildren) => {
  return (
    <div>
      <header>
        <h1>Micro Frontend App</h1>
      </header>
      <main>{children}</main>
    </div>
  );
};
