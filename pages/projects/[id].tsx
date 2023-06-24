import MainLayout, {
  usePageLoader,
} from "@/components/layouts/main/MainLayout";
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
import Image from "next/image";
import Link from "next/link";
import AnimRollup from "@/components/nodes/animRollup/AnimRollup";
import { useCursor } from "@/contexts/CursorProvider";
import { useState, useEffect } from "react";
import { useRouter } from "next/router";

const ProjectId: NextPageWithLayout<{ projectData: ProjectData[] }> = ({
  projectData,
}) => {
  const { setType } = useCursor();
  const [scale, setScale] = useState<1 | 1.1>(1);
  const router = useRouter();
  const { setPageLoad } = usePageLoader();

  useEffect(() => {
    setPageLoad(true);
    setTimeout(() => {}, 200);
  }, [projectData]);

  return (
    <>
      <div className={styles.pageWrapper}>
        <div className={styles.details}>
          <div className={styles.imageWrapper}>
            <Image
              src={projectData[0].mainPicture}
              alt="main picture"
              style={{ width: "100%", height: "100%", objectFit: "cover" }}
            />
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
              <div>
                <Link href={projectData[0].liveLink}>
                  <AnimRollup>
                    <span className="">View Live Version</span> &rarr;
                  </AnimRollup>
                </Link>
              </div>
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
            <div className={styles.left}></div>
            <div
              className={
                styles.right +
                " xl:mt-[47.81px] lg:mt-[39.025px] xs:mt-[30px] mt-[22px] text-[20px] leading-7"
              }
            >
              {projectData[0].client} is a fintech platform that allows users to
              manage their finances in an intuitive and hassle-free manner. The
              platform offers a range of services including budget tracking,
              bill payments, investment management, and financial advice.
              Overall, the goal of the SavvyFin platform is to provide a
              user-friendly and customizable solution for managing personal
              finances, investments, and business finances. The platform aims to
              simplify financial management and empower users to make informed
              financial decisions.
            </div>
          </div>
        </div>
        <div className={styles.images}>
          {projectData[0].pictures.map((_, index) => {
            return <div key={index} className={styles.image}></div>;
          })}
          <div
            className="bg-white w-full rounded-[12px] ml:rounded-[20px] lg:rounded-[1.5em] cursor-pointer"
            onMouseOver={() => {
              setType("open");
              setScale(1.1);
            }}
            onMouseLeave={() => {
              setType("none");
              setScale(1);
            }}
          >
            <Link
              href={{
                pathname: `/projects/[id]`,
                query: { ...router.query, id: projectData[1].id },
              }}
            >
              <div className={styles.next}>
                <div className={styles.header}>
                  <p>Next Project</p>
                  <p>{projectData[1].client}</p>
                </div>
                <div className={styles.image}>
                  <Image
                    src={projectData[1].mainPicture}
                    alt="next"
                    style={{
                      width: "100%",
                      height: "100%",
                      objectFit: "cover",
                      scale: `${scale}`,
                      transition: "1s",
                    }}
                  />
                </div>
              </div>
            </Link>
          </div>
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
