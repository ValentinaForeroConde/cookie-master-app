import React, { PropsWithChildren } from "react";
import Head from "next/head";
import { Navbar } from "../ui";

type Props = {};


export const Layout: React.FC<PropsWithChildren<Props>> = ({ children }) => {
  return (
    <>
      <Head>
              
      </Head>
      <nav>
        <Navbar />
      </nav>
      <main style={{ padding: "20px 50px" }}>{children}</main>
    </>
  );
};
