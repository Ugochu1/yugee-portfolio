import MainLayout from "@/components/layouts/main/MainLayout";
import { NextPageWithLayout } from "./_app";
import styles from "./Homepage.module.scss";
import ProjectList from "@/components/nodes/projectList/ProjectList";
import { projectData } from "@/data/projects_data";
import AnimRollup from "@/components/nodes/animRollup/AnimRollup";
import { useCursor } from "@/contexts/CursorProvider";
import Footer from "@/components/nodes/footer/Footer";
import { useInView } from "react-intersection-observer";
import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { useScrollPosition } from "@/hooks/useScrollPosition";
import { useRouter } from "next/router";

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
  const scrollPos = useScrollPosition();
  const workspaceRef = useRef<HTMLDivElement>(null);
  const [divTop, setDivTop] = useState<number>(0);
  const { ref, inView } = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });
  const { ref: ref2, inView: inView2 } = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });
  const [pageLoaded, setPageLoaded] = useState<boolean>(false);
  const router = useRouter();

  useEffect(() => {
    function getDivTop() {
      workspaceRef.current &&
        setDivTop(
          workspaceRef.current.offsetTop - window.innerHeight
        );
    }
    getDivTop(); // call the function initially
    window.addEventListener("resize", getDivTop);
  }, []);

  const getScale = (): number => {
    return 1 + (scrollPos - divTop) / divTop / 2.5;
  };

  useEffect(() => {
    setPageLoaded(true);
  }, []);

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
      <div className="md:px-8 px-5 bg-[#f5f5f5]">
        <Link href="/projects">
          <AnimRollup
            style={{
              ...buttonStyle,
              background: "black",
              color: "rgb(255, 255, 255)",
            }}
          >
            All Works
          </AnimRollup>
        </Link>
      </div>
      <div className="bg-[#f5f5f5] flex xs:flex-row flex-col-reverse items-start md:justify-end justify-center flex-wrap">
        <div className="w-full xs:w-[39.5%] xl:py-[120px] lg:py-[90px] md:py-[80px] pb-[50px] xs:py-[50px] md:px-10 px-5">
          <div className={styles.section}>
            <p>Hard Skills:</p>
            <div className="h-[10px] xs:h-[12px] lg:h-[16px]"></div>
            <p>Javascript</p>
            <p>CSS</p>
            <p>HTML</p>
            <p>Python</p>
            <p>MongoDB</p>
            <p>SQL</p>
          </div>
          <div className={styles.section}>
            <p>Some of my clients are:</p>
            <div className="h-[10px] xs:h-[12px] lg:h-[16px]"></div>
            <p>Mendfy</p>
            <p>Sana Pay</p>
            <p>Trustbuddie</p>
            <p>Youverify</p>
          </div>
        </div>
        <div
          className={`${styles.about} ${
            inView && styles.inView
          } py-[50px] xs:py-0`}
          ref={ref}
        >
          <h2>
            Studied Electronics and Computer Engineering at{" "}
            <span>University of Nigeria</span> Nsukka, and I have been working
            as a web and mobile developer for almost a decade.
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
              <Link href="/about">
                <AnimRollup
                  style={{
                    ...buttonStyle,
                    color: "black",
                    border: "1px solid black",
                  }}
                >
                  Read More
                </AnimRollup>
              </Link>
            </div>
          </div>
        </div>
      </div>
      {/* <div className="hidden lg:block"> */}
      <div className={styles.workspace} ref={workspaceRef}>
        <div
          className={styles.bg}
          style={{ transform: `scale3d(${getScale()}, ${getScale()}, 1)` }}
        ></div>
      </div>
      <div className={`${styles.section}`}>
        <div
          className={`${styles.laurelSection} ${inView2 && styles.inView}`}
          ref={ref2}
        >
          <div className={styles.header}>
            <h6>Approach:</h6>
          </div>
          <div className={styles.details}>
            <div className={styles.method}>
              <h2>Wireframes</h2>
              <p>
                Wireframes are a crucial tool in the design process, providing a
                blueprint for the layout and functionality of a digital product.
                To create effective wireframes, it&apos;s important to
                understand the user&apos;s needs and goals, as well as the
                requirements and constraints of the project.
              </p>
            </div>
            <div className={styles.method}>
              <h2>Digital Design</h2>
              <p>
                To create effective designs, it&apos;s important to understand
                the needs, goals, and behaviors of the target audience. This can
                be achieved through user research and testing, which can uncover
                insights about user preferences and pain points. Once this
                information is gathered, designers can create wireframes and
                prototypes to iterate and refine the design.
              </p>
            </div>
            <div className={styles.method}>
              <h2>Art Direction</h2>
              <p>
                To develop an effective art direction, it&apos;s important to
                understand the brand&apos;s essence, its target audience, and
                the intended message. This can be achieved through research and
                analysis, which can uncover insights about the brand&apos;s
                history, values, and cultural context. Once this information is
                gathered, designers can create a visual strategy that defines
                the art direction, including elements such as color palettes,
                typography, imagery, and tone of voice.
              </p>
            </div>
          </div>
        </div>
      </div>

      {pageLoaded && <Footer />}
    </>
  );
};

Home.getLayout = function (page) {
  return <MainLayout>{page}</MainLayout>;
};

export default Home;
