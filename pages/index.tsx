import MainLayout from "@/components/layouts/main/MainLayout";
import { NextPageWithLayout } from "./_app";

const Home: NextPageWithLayout = () => {
  return <div></div>;
};

Home.getLayout = function (page) {
  return <MainLayout>{page}</MainLayout>
}

export default Home;
