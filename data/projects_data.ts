import { StaticImageData } from "next/image";
import ImageOne from "../src/images/first.jpg";
import ImageTwo from "../src/images/second.jpg";
import ImageThree from "../src/images/third.jpg";
import ImageFour from "../src/images/fourth.jpg";
import ImageFive from "../src/images/fifth.jpg";

export interface ProjectData {
  id: string;
  client: string;
  year: string;
  scope: string;
  location: string;
  liveLink: string;
  mainPicture: StaticImageData;
  pictures: StaticImageData[];
  description: string;
  categories: string[]
}

export const projectData: ProjectData[] = [
  {
    id: "sana",
    client: "Sana",
    year: "2022",
    scope: "Web and Mobile Development",
    location: "Birmingham",
    liveLink: "https://app.sanatransfer.dev",
    mainPicture: ImageOne,
    pictures: [],
    description: "",
    categories: ["web", "mobile"]
  },

  {
    id: "linum_labs",
    client: "Linum Labs",
    year: "2022",
    scope: "Fullstack Web Development",
    location: "Lagos",
    liveLink: "www.mendfy.com",
    mainPicture: ImageFour,
    pictures: [],
    description: "",
    categories: ["web"]
  },
  {
    id: "youverify",
    client: "Youverify",
    year: "2020",
    scope: "Fullstack Web and Mobile Development",
    location: "Lagos",
    liveLink: "www.youverify.com",
    mainPicture: ImageThree,
    pictures: [],
    categories: ["web", "mobile"],
    description: "",
  },
  {
    id: "mendfy",
    client: "Mendfy",
    year: "2018",
    scope: "Fullstack Web Development",
    location: "Enugu",
    liveLink: "www.mendfy.com",
    mainPicture: ImageTwo,
    pictures: [],
    description: "",
    categories: ["mobile"]
  },
  {
    id: "heralding",
    client: "Heralding",
    year: "2016",
    scope: "Fullstack Web Development",
    location: "Enugu",
    liveLink: "www.heralding.com",
    mainPicture: ImageFive,
    pictures: [],
    description: "",
    categories: ["web"]
  },
];

export function getAllProjectIds() {
  return projectData.map((project) => {
    return {
      params: {
        id: project.id
      }
    }
  })
}

export function getProject(id: string) {
  const index = projectData.findIndex(object => object.id === id)
  // return projectData.filter((project) => project.id === id)[0];
  if (index < projectData.length - 1) {
    return [projectData[index], projectData[index+1]]
  }
  return [projectData[index], projectData[0]]
}