import MainLayout from "@/components/layouts/main/MainLayout";
import { NextPageWithLayout } from "./_app";
import styles from "./Homepage.module.scss";
import ProjectList from "@/components/nodes/projectList/ProjectList";
import { projectData } from "@/data/projects_data";
import AnimRollup from "@/components/nodes/animRollup/AnimRollup";
import { useCursor } from "@/contexts/CursorProvider";
import Footer from "@/components/nodes/footer/Footer";
import { useInView } from "react-intersection-observer";
import { useState } from "react";

export const buttonStyle = {
  borderRadius: "700px",
  cursor: "pointer",
  fontSize: "14px",
  padding: "8px 20px",
  fontWeight: "400",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
};

const Home: NextPageWithLayout = () => {
  const { setType } = useCursor();
  const { ref, inView } = useInView({
    threshold: .4,
    triggerOnce: true
  });

  return (
    <>
      <div className={styles.intro}>
        <div className={styles.awards_and_titles}>
          <div className={styles.info}>
            <div>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Cupiditate odit autem id quas, assumenda a animi at hic modi
              doloremque et vitae numquam incidunt, asperiores explicabo beatae
              iste quae est?
            </div>
            <div className="flex md:justify-between mt-5 items-center">
              <div className="mr-1">Last updated:</div>
              <div>06 - 03 - 2023</div>
            </div>
          </div>
        </div>
        <div className={styles.description}>
          Fullstack Web and Mobile Developer based in Birmingham.
        </div>
      </div>
      <div className={styles.projectSection}>
        <ProjectList data={projectData} firstexpand={true} />
      </div>
      <div className="md:h-[40px] h-[24px] w-full bg-[#f5f5f5]"></div>
      <div className="sm:pb-[56px] pb-[44px] md:px-8 px-5 bg-[#f5f5f5]">
        <AnimRollup
          style={{
            ...buttonStyle,
            background: "black",
            color: "rgb(255, 255, 255)",
          }}
        >
          All Works
        </AnimRollup>
      </div>
      <div className={styles.workspace + " xs:-z-10"}>
        {/* <h2>Workspace</h2> */}
        <div className={styles.bg}></div>
      </div>
      <div className="bg-[#f5f5f5] flex items-center md:justify-end justify-center flex-wrap">
        <div className="w-full xs:w-[37%]"></div>
        <div className={`${styles.about} ${inView && styles.inView}`} ref={ref}>
          <h2>
            Studied Electronics and Computer Engineering at{" "}
            <span>University of Nigeria</span> Nsukka, and I have been working
            as a web and mobile developer for over 7 years.
          </h2>
          <div className="h-[24px] md:h-[40px]"></div>
          <div className={styles.description}>
            <p>
              My passion for design started when I was young, and I have pursued
              this passion by working with a variety of clients and projects
              over the years. I have worked with startups, small businesses, and
              large corporations, creating user interfaces for websites,
              software applications, and mobile apps.
            </p>
            <div>
            <AnimRollup style={{...buttonStyle, color: "black", border: "1px solid black"}}>Read More</AnimRollup>
            </div>
            
          </div>
        </div>
      </div>
    </>
  );
};

Home.getLayout = function (page) {
  return <MainLayout>{page}</MainLayout>;
};

export default Home;
