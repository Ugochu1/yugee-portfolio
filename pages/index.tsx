import MainLayout from "@/components/layouts/main/MainLayout";
import { NextPageWithLayout } from "./_app";
import styles from "./Homepage.module.scss";

const Home: NextPageWithLayout = () => {
  return (
    <div className={styles.container}>
      <div className={styles.intro}>
        <div className={styles.awards_and_titles}>
          <div className={styles.info}>
            <div>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate
            odit autem id quas, assumenda a animi at hic modi doloremque et
            vitae numquam incidunt, asperiores explicabo beatae iste quae est?</div>
            <div className="flex md:justify-between mt-2 items-center">
              <div className="mr-1">Last updated:</div>
              <div>06-03-2023</div>
            </div>
          </div>
        </div>
        <div className={styles.description}>
          Fullstack Web and Mobile Developer based in Birmingham.
        </div>
      </div>
    </div>
  );
};

Home.getLayout = function (page) {
  return <MainLayout>{page}</MainLayout>;
};

export default Home;
