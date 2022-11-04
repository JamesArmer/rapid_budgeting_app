import type { NextPage } from "next";
import Layout from "../components/Layout";
import Compensation from "../components/Compensation";
import Tax from "../components/Tax";
import Title from "../components/Title";
import Income from "../components/Income";
import Expenses from "../components/Expenses";
import Savings from "../components/Savings";
import BottomLine from "../components/BottomLine";

const Home: NextPage = () => {
  return (
    <Layout>
      <div className="py-4">
        <Title />
      </div>
      <div className="flex w-full pt-2">
        <div className="flex-1 px-4">
          <Compensation />
        </div>
        <div className="flex-1 px-4">
          <Tax />
        </div>
      </div>
      <div className="flex w-full">
        <div className="flex-1 px-4">
          <Income />
        </div>
      </div>
      <div className="flex w-full py-4">
        <div className="flex-1 px-4">
          <Expenses />
        </div>
        <div className="flex-1 px-4">
          <Savings />
        </div>
      </div>
      <div className="flex w-full">
        <div className="flex-1 px-4">
          <BottomLine />
        </div>
      </div>
    </Layout>
  );
};

export default Home;
