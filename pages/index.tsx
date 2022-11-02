import type { NextPage } from "next";
import Layout from "../components/Layout";
import Compensation from "../components/Compensation";
import Tax from "../components/Tax";

const Home: NextPage = () => {
  return (
    <Layout>
      <div className="flex w-full">
        <div className="flex-1">
          <Compensation />
        </div>
        <div className="flex-1 pt-10">
          <Tax />
        </div>
      </div>
    </Layout>
  );
};

export default Home;
