import MainLayout from "@/components/layouts/main/MainLayout";
import { NextPageWithLayout } from "../_app";
import styles from "./ProjectHome.module.scss";
import ProjectList from "@/components/nodes/projectList/ProjectList";
import { ProjectData, projectData } from "@/data/projects_data";
import { useState, useEffect } from "react";
import Footer from "@/components/nodes/footer/Footer";

const Projects: NextPageWithLayout = () => {
  const [dataArray, setDataArray] = useState<ProjectData[]>(projectData);

  return (
    <>
      <div className={styles.container}>
        <div className={styles.content}>
          <div className={styles.header}>
            <h1>Take a peek into my latest projects</h1>
          </div>
          <div className={styles.main}>
            <div>
              <ProjectList data={dataArray} />
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

Projects.getLayout = function (page) {
  return <MainLayout>{page}</MainLayout>;
};

export default Projects;
