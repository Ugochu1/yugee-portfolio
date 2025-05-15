import MainLayout from "@/components/layouts/main/MainLayout";
import { NextPageWithLayout } from "./_app";
import styles from "./Homepage.module.scss";
import ProjectList from "@/components/nodes/projectList/ProjectList";
import { projectData } from "@/data/projects_data";
import AnimRollup from "@/components/nodes/animRollup/AnimRollup";
import Footer from "@/components/nodes/footer/Footer";
import { useInView } from "react-intersection-observer";
import { useEffect, useRef } from "react";
import Link from "next/link";
import { annotate, annotationGroup } from "rough-notation";
import ImageDisplay from "@/components/nodes/imageDisplay/ImageDisplay";

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
  const { ref, inView } = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });
  const { ref: ref2, inView: inView2 } = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });
  const userFriendlyAnnotate = useRef<HTMLElement>(null);
  const seamLessAnnotate = useRef<HTMLElement>(null);
  const unnRef = useRef<HTMLElement>(null);
  const aboutMeClean = useRef<HTMLElement>(null);
  const aboutMeScalable = useRef<HTMLElement>(null);
  const aboutMeReusable = useRef<HTMLElement>(null);

  useEffect(() => {
    const a1 = annotate(userFriendlyAnnotate.current as HTMLElement, {
      type: "highlight",
      color: "yellow",
    });
    const a2 = annotate(seamLessAnnotate.current as HTMLElement, {
      type: "box",
      color: "blue",
    });
    const ag = annotationGroup([a1]);
    ag.show();
  }, []);

  useEffect(() => {
    if (inView) {
      const a3 = annotate(unnRef.current as HTMLElement, {
        type: "underline",
      });
      const a4 = annotate(aboutMeClean.current as HTMLElement, {
        type: "highlight",
        color: "pink",
      });
      const a6 = annotate(aboutMeScalable.current as HTMLElement, {
        type: "highlight",
        color: "yellow",
      });
      const a5 = annotate(aboutMeReusable.current as HTMLElement, {
        type: "highlight",
        color: "lightblue",
      });
      const ag = annotationGroup([a3, a4, a5, a6]);
      ag.show();
    }
  }, [inView]);

  return (
    <div className="space-y-16">
      <div className={styles.landing}>
        <div className={styles.writeup}>
          <div className="font-bold text-sm lg:text-base">A little more...</div>
          <div className="md:min-w-[280px] md:w-[80%] w-full text-justify text-sm lg:text-base">
            I build <span ref={userFriendlyAnnotate}>user-friendly</span>{" "}
            applications across web, mobile, and everything in between. From
            polished frontends to robust backend systems, I create{" "}
            <span ref={seamLessAnnotate}>seamless experiences</span> where every
            piece fits perfectly.
          </div>
        </div>
        <div className={styles.intro}>
          <div className={styles.imageDisplay}>
            <div className={styles.imageBackground}>
              <ImageDisplay src="/display_pic.jpg" />
            </div>
          </div>
          <div>
            <div className="text-lg lg:text-xl">
              Hi there. I&apos;m{" "}
              <span className="text-blue-600 font-bold">Ugochukwu</span>, a
            </div>
            <div className="text-4xl sm:text-5xl lg:text-6xl font-bold">
              Full-Stack Web and Mobile Developer.
            </div>
          </div>
        </div>
      </div>
      <div className={styles.projectSection + " space-y-5"}>
        <ProjectList data={projectData.slice(0, 3)} firstexpand />
        <Link href="projects" className="flex justify-left">
          <AnimRollup
            style={{
              ...buttonStyle,
              background: "black",
              color: "rgb(255, 255, 255)",
            }}
          >
            All Projects
          </AnimRollup>
        </Link>
      </div>
      <div className="bg-[#f5f5f5] flex xs:flex-row flex-col-reverse items-start md:justify-end justify-center flex-wrap md:space-y-5 lg:space-y-0">
        <div className="w-full xs:w-[40%] md:w-[39.5%] md:px-8 px-5">
          <div className={styles.section}>
            <p>Skills:</p>
            <div className="h-[10px] xs:h-[12px] lg:h-[16px]"></div>
            <p>Typescript</p>
            <p>React</p>
            <p>NextJS</p>
            <p>Python</p>
            <p>MongoDB</p>
            <p>SQL</p>
            <p>Kotlin</p>
            <p>Swift</p>
            <p>Node.js</p>
            <p>Express.js</p>
          </div>
          <div className={styles.section}>
            <p>Some of my clients:</p>
            <div className="h-[10px] xs:h-[12px] lg:h-[16px]"></div>
            <p>Sanatransfer</p>
            <p>Autoprotect.io</p>
            <p>Youverify</p>
          </div>
        </div>
        <div className={`${styles.about} ${inView && styles.inView}`} ref={ref}>
          <h2>
            Studied Electronics and Computer Engineering at University of
            Nigeria Nsukka, and I have been working as a web and mobile
            developer for{" "}
            <span className="font-bold" ref={unnRef}>
              over 3 years.
            </span>
          </h2>
          <div className="h-[24px] md:h-[40px]"></div>
          <div className={styles.description}>
            <p>
              Over these years, working with a variety of clients and
              collaborating with some incredible developers has shaped how I
              think and work. Each project has sharpened my ability to break
              down problems, spot patterns, and deliver practical solutions —
              fast. <br />
              <br />
              These experiences have also deepened my appreciation for solid
              engineering principles: <span ref={aboutMeClean}>clean</span>{" "}
              <span>architecture</span>,{" "}
              <span ref={aboutMeReusable}>thoughtful</span>{" "}
              <span>abstractions</span>, and{" "}
              <span ref={aboutMeScalable}>scalable</span> <span>code.</span>{" "}
              I&apos;ve grown to love not just solving problems, but solving
              them with clarity and purpose.
            </p>
          </div>
        </div>
        <div className={`${styles.section}`}>
          <div
            className={`${styles.laurelSection} ${inView2 && styles.inView}`}
            ref={ref2}
          >
            <div className={styles.header}>
              <h6>My Approach</h6>
            </div>
            <div className={styles.details}>
              <div className={styles.method}>
                <h2>Research</h2>
                <p>
                  Every solution starts with understanding. I dig deep to learn
                  the context, the constraints, and the real problem behind the
                  problem. Good research sets the foundation for smart
                  decisions.
                </p>
              </div>
              <div className={styles.method}>
                <h2>Planning and Design</h2>
                <p>
                  Before writing a single line of code, I map out the path.
                  Whether it&apos;s defining architecture or sketching UI flows,
                  I believe in designing with intention — keeping things
                  scalable, maintainable, and efficient.
                </p>
              </div>
              <div className={styles.method}>
                <h2>Execution</h2>
                <p>
                  This is where ideas turn into reality. I move fast but with
                  care, writing clean, testable code and iterating quickly to
                  bring solutions to life — always with an eye on quality and
                  user experience.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

Home.getLayout = function (page) {
  return <MainLayout>{page}</MainLayout>;
};

export default Home;
