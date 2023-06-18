import MainLayout from "@/components/layouts/main/MainLayout";
import { NextPageWithLayout } from "../_app";
import styles from "./ProjectHome.module.scss";
import ProjectList from "@/components/nodes/projectList/ProjectList";
import { ProjectData, projectData } from "@/data/projects_data";
import { useCursor } from "@/contexts/CursorProvider";
import { useState, useEffect } from "react";
import Footer from "@/components/nodes/footer/Footer";

const Projects: NextPageWithLayout = () => {
  const { setType } = useCursor();
  const [dataArray, setDataArray] = useState<ProjectData[]>();
  const [category, setCategory] = useState<string>("all");

  useEffect(() => {
    if (category === "all") {
      setDataArray(projectData);
    } else if (category === "web") {
      let filteredArr = projectData.filter((project) =>
        project.categories.includes("web")
      );
      setDataArray([...filteredArr]);
    } else if (category === "mobile") {
      let filteredArr = projectData.filter((project) =>
        project.categories.includes("mobile")
      );
      setDataArray([...filteredArr]);
    }
  }, [category]);

  return (
    <>
      <div className={styles.container}>
        <div className={styles.content}>
          <div className={styles.header}>
            <h1>Take a peek into my latest projects</h1>
          </div>
          <div className={styles.main}>
            <div className={styles.categories}>
              <button
                onMouseOver={() => setType("hover")}
                onMouseLeave={() => setType("none")}
                onClick={() => setCategory("all")}
                className={`${category === "all" && styles.active}`}
              >
                All
              </button>
              <button
                onMouseOver={() => setType("hover")}
                onMouseLeave={() => setType("none")}
                onClick={() => setCategory("web")}
                className={`${category === "web" && styles.active}`}
              >
                Web Development
              </button>
              <button
                onMouseOver={() => setType("hover")}
                onMouseLeave={() => setType("none")}
                onClick={() => setCategory("mobile")}
                className={`${category === "mobile" && styles.active}`}
              >
                Mobile Development
              </button>
            </div>
            <div>
              <ProjectList data={dataArray} />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

Projects.getLayout = function (page) {
  return <MainLayout>{page}</MainLayout>;
};

export default Projects;
