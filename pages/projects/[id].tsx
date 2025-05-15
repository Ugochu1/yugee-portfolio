import MainLayout from "@/components/layouts/main/MainLayout";
import { NextPageWithLayout } from "../_app";
import {
  ProjectData,
  getAllProjectIds,
  getProject,
} from "@/data/projects_data";
import { GetStaticPaths, GetStaticProps } from "next";
import { ParsedUrlQuery } from "querystring";
import styles from "./ProjectId.module.scss";
import Footer from "@/components/nodes/footer/Footer";
import Link from "next/link";
import AnimRollup from "@/components/nodes/animRollup/AnimRollup";
import ImageDisplay from "@/components/nodes/imageDisplay/ImageDisplay";
import VideoDisplay from "@/components/nodes/videoDisplay/VideoDisplay";

const ProjectId: NextPageWithLayout<{ projectData: ProjectData[] }> = ({
  projectData,
}) => {

  return (
    <>
      <div className={styles.pageWrapper}>
        <div className={styles.details}>
          <div className={styles.imageWrapper}>
            <ImageDisplay src={"/" + projectData[0].mainPicture} />
          </div>
          <div className={styles.mainContainer}>
            <div className={styles.left + " text-[12px]"}>
              <p className="font-[600] mr-1">Client: </p>
              <p>{projectData[0].client}</p>
            </div>
            <div className={styles.right + " text-[12px] font-[600]"}>
              <div>
                <p>
                  Categor{projectData[0].categories.length > 1 ? "ies" : "y"}
                </p>
                <p>
                  {projectData[0].categories
                    .map(
                      (category) =>
                        category[0].toUpperCase() + category.substring(1)
                    )
                    .join(", ") || "None"}
                </p>
              </div>
              {projectData[0].liveLink && (
                <div>
                  <Link
                    href={projectData[0].liveLink}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <AnimRollup>
                      <span className="">View Live Version</span> &rarr;
                    </AnimRollup>
                  </Link>
                </div>
              )}
            </div>
            <div className="w-full xs:h-[56px] h-[16px]"></div>
            <div className={styles.left}>
              <p className="xl:text-[34.15px] lg:text-[27.875px] xs:text-[28px] text-[22px]">
                {projectData[0].client}
              </p>
            </div>
            <div className={styles.right}>
              <div className="w-full">
                <div className={styles.section}>
                  <p>Client</p>
                  <p>{projectData[0].client}</p>
                </div>
                <div className={styles.section}>
                  <p>Year</p>
                  <p>{projectData[0].year}</p>
                </div>
                <div className={styles.section}>
                  <p>Scope of Work</p>
                  <p>{projectData[0].scope}</p>
                </div>
                <div className={styles.section}>
                  <p>Location</p>
                  <p>{projectData[0].location}</p>
                </div>
              </div>
            </div>
            {/* <div className={styles.left}></div> */}
            <div className="relative xl:mt-[47.81px] lg:mt-[39.025px] xs:mt-[30px] mt-[22px] text-justify max-w-[600px] w-full mx-auto">
              {/* <span className="text-8xl absolute italic -top-10 -left-7 text-gray-700">
                &quot;
              </span> */}
              {projectData[0].description.map((des, i) => {
                return (
                  <div key={i}>
                    <p className="font-semibold">{des}</p>
                    {i < projectData[0].description.length - 1 && <br />}
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        <div className={styles.images}>
          {projectData[0].videos?.map((video, index) => {
            return (
              <div key={index} className={styles.image}>
                {/* <video className="w-full h-full object-cover" src={video} poster="/liveness-main-thumbnail.jpg" autoPlay muted loop playsInline /> */}
                <VideoDisplay src={video} poster="liveness-main.png" />
              </div>
            );
          })}
          {projectData[0].pictures?.map((pic_name, index) => {
            return (
              <div key={index} className={styles.image}>
                <ImageDisplay src={"/" + pic_name} />
              </div>
            );
          })}
        </div>
      </div>
      <Footer />
    </>
  );
};

export const getStaticPaths: GetStaticPaths = () => {
  const paths = getAllProjectIds();
  return {
    paths,
    fallback: false,
  };
};

interface IParams extends ParsedUrlQuery {
  id: string;
}

export const getStaticProps: GetStaticProps = (context) => {
  const { id } = context.params as IParams;
  const projectData = getProject(id);
  return {
    props: {
      projectData,
    },
  };
};

ProjectId.getLayout = function (page) {
  return <MainLayout>{page}</MainLayout>;
};

export default ProjectId;
