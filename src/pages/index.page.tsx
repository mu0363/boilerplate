import type { CustomNextPage } from "next";
import { MainLayout } from "./_Layout";

const Home: CustomNextPage = () => {
  return (
    <div>
      <h1 className="text-red-500">Enter</h1>
    </div>
  );
};

Home.getLayout = MainLayout;

export default Home;
