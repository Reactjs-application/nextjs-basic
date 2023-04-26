import React from "react";

import styles from "./layout.module.css";
import Header from "./header";
import Footer from "./footer";

export default function Layout({ children }) {
  return (
    <>
      <Header />
      <main className={styles.ecosystem}>{children}</main>
      <Footer />
    </>
  );
}
