import { FC } from "react";
import styles from "./ProjectList.module.scss";
import { ProjectData } from "@/data/projects_data";
import Image from "next/image";
import { useCursor } from "@/contexts/CursorProvider";
import Link from "next/link";

interface ProjectDataProps {
  data: ProjectData[] | undefined;
  firstexpand?: boolean;
}

const ProjectList: FC<ProjectDataProps> = ({ data, firstexpand }) => {
  const { setType } = useCursor();
  return (
    <div className={styles.section}>
      {data?.map((details, index) => {
        return (
          <div
            key={index}
            className={`${styles.container} ${
              firstexpand && styles.expandFirst
            }`}
            onMouseOver={() => setType("open")}
            onMouseLeave={() => setType("none")}
          >
            <Link href="">
              <div className={styles.details}>
                <div className={styles.cover}>{details.client}</div>
                <div className="flex">
                  <div className={styles.cover}>{details.location}</div>
                  <div className={styles.cover + " ml-2"}>{details.year}</div>
                </div>
              </div>
            </Link>
            <Image
              src={details.mainPicture}
              alt={details.client}
              style={{ objectFit: "cover", height: "101%", width: "100%", zIndex: "-1" }}
            />
          </div>
        );
      })}
    </div>
  );
};

export default ProjectList;
