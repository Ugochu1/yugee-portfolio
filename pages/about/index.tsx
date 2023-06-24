import MainLayout from "@/components/layouts/main/MainLayout";
import { NextPageWithLayout } from "../_app";
import styles from "./About.module.scss";
import Footer from "@/components/nodes/footer/Footer";
import Image from "next/image";
import Workspace from "../../public/second_workplace.webp";
import { useInView } from "react-intersection-observer";

const About: NextPageWithLayout = () => {
  const { ref: firstRef, inView: firstInView } = useInView({
    triggerOnce: true
  });
  const { ref: secondRef, inView: secondInView } = useInView({
    threshold: 0.1,
    triggerOnce: true
  });
  return (
    <>
      <div className={styles.page_wrapper}>
        <div className={styles.section}>
          <div className={styles.mainSection}>
            <div className={styles.intro}>
              <h1>
                Hi, I&apos;m James. A Nigerian Fullstack Developer living in
                Birmingham. I create websites and native applications using the
                latest technology standards and I have worked in the IT
                industry for almost a decade.
              </h1>
              <div className="w-full h-[40px] xs:h-[64px] lg:h-[112px]"></div>
            </div>
            <div
              className={`${styles.details} ${firstInView && styles.inView}`}
              ref={firstRef}
            >
              <div className={styles.history}>
                <div className={styles.container}>
                  <div className={styles.section}>
                    <p>Some of my clients are:</p>
                    <div className="h-[10px] xs:h-[12px] lg:h-[16px]"></div>
                    <p>Mendfy</p>
                    <p>Sana Pay</p>
                    <p>Trustbuddie</p>
                    <p>Youverify</p>
                  </div>
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
                    <p>Soft Skills:</p>
                    <div className="h-[10px] xs:h-[12px] lg:h-[16px]"></div>
                    <p>Communication</p>
                    <p>Time Management</p>
                    <p>Risk Management</p>
                    <p>Teamwork</p>
                    <p>Problem Solving</p>
                    <p>Estimations</p>
                  </div>
                  <div className={styles.section}>
                    <p>Languages:</p>
                    <div className="h-[10px] xs:h-[12px] lg:h-[16px]"></div>
                    <p>English - Advaned</p>
                    <p>Igbo - Native</p>
                  </div>
                </div>
              </div>
              <div className={styles.writeup}>
                <div className={styles.header}>
                  <h1>
                    Passion for{" "}
                    <span className="px-3 rounded-full border-black border">
                      Programming
                    </span>
                    : My Journey So Far
                  </h1>
                </div>
                <div className="h-[24px] md:h-[40px]"></div>
                <div className={styles.paragraph}>
                  <p>
                    I hold a Bachelor&apos;s degree in Graphic Design and have
                    been working in the design industry for over a decade.
                    During this time, I have honed my skills in design
                    principles, user experience, and front-end development.
                    I&apos;m proficient in design tools such as Adobe Creative
                    Suite, Sketch, and Figma, and have a deep understanding of
                    front-end development languages like HTML, CSS, and
                    JavaScript.
                    <br />
                    <br />
                    My passion for design started when I was young, and I have
                    pursued this passion by working with a variety of clients
                    and projects over the years. I have worked with startups,
                    small businesses, and large corporations, creating user
                    interfaces for websites, software applications, and mobile
                    apps.
                    <br />
                    <br />
                    As a Senior UI Designer, my focus is on creating engaging
                    and intuitive user interfaces that provide an exceptional
                    user experience. I believe that design should be
                    user-centric, and my approach to design reflects this
                    belief. I work closely with my clients to understand their
                    users&apos; needs, conduct user research, and create
                    wireframes and prototypes to ensure that the final design
                    meets both user and business goals.
                    <br />
                    <br />
                    In my spare time, I enjoy exploring new design trends and
                    technologies, attending design conferences and workshops,
                    and sharing my knowledge with the design community. I&apos;m
                    always excited to collaborate on new projects and would love
                    to hear from you. Please feel free to get in touch if you
                    have any questions or if you&apos;d like to work together.
                  </p>
                  <div className="mt-[13.02px] xs:mt-[14.76px] sm:mt-[21.9px] md:mt-[25.8px] lg:mt-[33.45px] xl:mt-[40.98px]">
                    <Image
                      src={Workspace}
                      alt="my workspace"
                      style={{ maxWidth: "100%", borderRadius: "17px" }}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className={`${styles.section}`}>
          <div
            className={`${styles.laurelSection} ${
              secondInView && styles.inView
            }`}
            ref={secondRef}
          >
            <div className={styles.header}>
              <h6>Approach:</h6>
            </div>
            <div className={styles.details}>
              <div className={styles.method}>
                <h2>Wireframes</h2>
                <p>
                  Wireframes are a crucial tool in the design process, providing
                  a blueprint for the layout and functionality of a digital
                  product. To create effective wireframes, it&apos;s important
                  to understand the user&apos;s needs and goals, as well as the
                  requirements and constraints of the project.
                </p>
              </div>
              <div className={styles.method}>
                <h2>Digital Design</h2>
                <p>
                  To create effective designs, it&apos;s important to understand
                  the needs, goals, and behaviors of the target audience. This
                  can be achieved through user research and testing, which can
                  uncover insights about user preferences and pain points. Once
                  this information is gathered, designers can create wireframes
                  and prototypes to iterate and refine the design.
                </p>
              </div>
              <div className={styles.method}>
                <h2>Art Direction</h2>
                <p>
                  To develop an effective art direction, it&apos;s important to
                  understand the brand&apos;s essence, its target audience, and
                  the intended message. This can be achieved through research
                  and analysis, which can uncover insights about the
                  brand&apos;s history, values, and cultural context. Once this
                  information is gathered, designers can create a visual
                  strategy that defines the art direction, including elements
                  such as color palettes, typography, imagery, and tone of
                  voice.
                </p>
              </div>
            </div>
          </div>
        </div>
        {/* <div className={styles.section}></div> */}
      </div>
      <Footer />
    </>
  );
};

About.getLayout = function (page) {
  return <MainLayout>{page}</MainLayout>;
};

export default About;
