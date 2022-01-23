import type { VFC } from "react";
import { Footer } from "./Footer";
import { Header } from "./Header";

export const MainLayout: VFC = (page) => {
  return (
    <div>
      <Header />
      <main>{page}</main>
      <Footer />
    </div>
  );
};
