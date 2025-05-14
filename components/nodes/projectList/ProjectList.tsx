import { FC } from "react";
import styles from "./ProjectList.module.scss";
import { ProjectData } from "@/data/projects_data";
import Link from "next/link";
import ImageDisplay from "../imageDisplay/ImageDisplay";
import VideoDisplay from "../videoDisplay/VideoDisplay";

interface ProjectDataProps {
  data: ProjectData[] | undefined;
  firstexpand?: boolean;
}

const ProjectList: FC<ProjectDataProps> = ({ data, firstexpand }) => {
  return (
    <div className={styles.section}>
      {data?.map((details, index) => {
        return (
          <div
            key={index}
            className={`${styles.container} ${
              firstexpand && styles.expandFirst
            }`}
          >
            <Link
              href={{
                pathname: `/projects/[id]`,
                query: { id: details.id },
              }}
            >
              {!details.videos && <ImageDisplay src={details.mainPicture} className="z-[-1]" />}
              {details.videos && <VideoDisplay src={details.videos[0]} poster={details.mainPicture} className="z-[-1]" />}

              <div className={styles.details}>
                <div className="flex">
                  <div className={styles.cover}>{details.location}</div>
                  <div className={styles.cover + " ml-2"}>{details.year}</div>
                </div>
              </div>

              <div className={styles.summary}>
                <h1>{details.client} &middot; {details.scope}</h1>
                <p>{details.summary}</p>
              </div>
            </Link>
          </div>
        );
      })}
    </div>
  );
};

export default ProjectList;
