import { StaticImageData } from "next/image";
import ImageOne from "../src/images/first.jpg";
import ImageTwo from "../src/images/second.jpg";
import ImageThree from "../src/images/third.jpg";
import ImageFour from "../src/images/fourth.jpg";
import ImageFive from "../src/images/fifth.jpg";

export interface ProjectData {
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
    client: "Sana",
    year: "2022",
    scope: "Web and Mobile Development",
    location: "Birmingham",
    liveLink: "app.sanatransfer.dev",
    mainPicture: ImageOne,
    pictures: [],
    description: "",
    categories: ["web", "mobile"]
  },

  {
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
