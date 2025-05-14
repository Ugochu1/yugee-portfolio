export interface ProjectData {
  id: string;
  client: string;
  year: string;
  scope: string;
  location: string;
  liveLink?: string;
  mainPicture: string;
  videos?: string[];
  pictures?: string[];
  description: string[];
  categories: string[];
  summary: string;
}

export const projectData: ProjectData[] = [
  {
    id: "sana",
    client: "Sanatransfer",
    year: "2023-2025",
    scope: "Web",
    location: "Remote",
    liveLink: "https://sanatransfer.com",
    mainPicture: "sana-dashboard.png",
    pictures: ["sana-wallet.png", "sana-popup.png", "sana-admin.png"],
    categories: ["web"],
    description: [
      "Tech Stack: NextJS and TailwindCSS",
      "Sanatransfer is a fintech company that enables secure and seamless fund transfers between different currencies.",
      "I was actively involved in both the Admin and Client portals, working closely with cross-functional teams to deliver reliable, performant, and accessible user interfaces. The development culture emphasized rigorous code reviews, which sharpened my skills in code organization, readability, and long-term maintainability.",
      "I initially focused on the Admin portal, where I built several key pages and components from the ground up. These included interfaces for viewing transaction history, monitoring account balances, and initiating new transactions. My work helped administrators interact with complex financial data in a more intuitive and efficient way, significantly improving their workflow.",
      "Later, I transitioned to maintaining and improving the Client portal. My contributions there were aimed at refining the user experience, particularly around input components such as forms, dropdowns, and select fields. I prioritized accessibility, ensuring that all components were compliant with modern standards to support users with disabilities—a step that contributed to a more inclusive platform.",
      "Throughout both projects, I worked closely with the backend team to integrate several REST APIs, ensuring seamless data flow and reliable application behavior. Every feature I delivered was carefully tested and optimized to ensure performance and accuracy across devices.",
    ],
    summary:
      "Built, maintained and improved components and pages for both the admin and client portals.",
  },
  {
    id: "autoprotect",
    client: "Autoprotect.io",
    year: "2024-2025",
    scope: "Web",
    location: "Remote",
    mainPicture: "More Pages.png",
    pictures: ["More Pages-2.png", "More Pages-3.png", "More Pages-4.png"],
    description: [
      "Tech Stack: Python, Jinja2 and TailwindCSS",
      "Autoprotect.io is a Telegram-based bot platform that allows users to create, assign, and complete freelance jobs with milestone-based payments.",
      "I was responsible for leading the UI revamp of the platform's frontend interface, with the goal of making the user experience more visually appealing while maintaining existing functionality. The original UI was functional but lacked visual consistency and polish, which affected user trust and ease of use.",
      "To ensure a cohesive look and feel, I began by creating a library of reusable components using Jinja macros, which allowed for cleaner templates and a more consistent interface across all screens. This modular approach significantly improved maintainability and scalability for future development.",
      "I also introduced dark mode support, enabling the UI to adapt seamlessly for users on devices or browsers configured for low-light environments—improving both accessibility and modern user experience standards.",
      "The before-and-after images featured in this portfolio highlight just a small sample of the changes implemented across the platform. Due to the breadth of the project, only select screens are shown, but they demonstrate the design improvements and attention to visual detail that guided the entire revamp.",
      "This project allowed me to blend aesthetic design decisions with practical component engineering, delivering a more refined and professional interface without disrupting core functionality."
    ],
    categories: ["web"],
    summary:
      "Redesigned the UI for AutoProtect.io to improve usability and clarity.",
  },
  {
    id: "youverify",
    client: "Youverify Inc.",
    year: "2024-2025",
    scope: "Mobile",
    location: "Remote",
    mainPicture: "liveness-main.png",
    videos: ["/C_To_C_demo.mp4"],
    pictures: ["liveness-others.png"],
    description: [
      "Tech Stack: Android -- Kotlin, Jetpack Compose and iOS -- Swift, SwiftUI and UIKit",
      "Youverify Inc. is a security and identity verification company that provides KYC (Know Your Customer) and fraud prevention solutions for businesses.",
      "I was responsible for developing mobile SDKs for liveness detection on both Android and iOS, using Kotlin and Swift respectively. These SDKs were designed to be embedded into client applications for real-time user verification during onboarding or authentication flows.",
      "My primary task involved building the entire UI for the liveness detection flow, and integrating the MediaPipe FaceMesh model to enable precise face tracking. This model identifies key facial landmarks—such as the eyes, nose, and mouth—across live camera frames.",
      "Working closely with an AI Engineer, I processed the model’s output to detect specific user gestures (e.g., \"turn left\", \"turn right\", \"look up\", etc.), which were part of the dynamic liveness tests. I ensured the camera input was correctly captured and passed into the model, and implemented real-time feedback to the UI to guide the user through the verification process.",
      "The solution required handling low-level frame processing, synchronizing camera streams with model inference, and updating the user interface responsively. The SDK was designed to be robust, fast, and easy to integrate into third-party mobile applications.",
      "A video demo below showcases the “Complete the Circle” test in action—one of the advanced liveness checks developed as part of this project."
    ],
    categories: ["mobile"],
    summary: "Developed mobile SDKs for Android and iOS.",
  },
  {
    id: "express-ts-boilerplate",
    client: "Express-TS-Boilerplate",
    year: "2025",
    scope: "Terminal",
    location: "Nigeria",
    mainPicture: "express-ts-boilerplate.png",
    liveLink: "https://www.npmjs.com/package/@yugee_ol/express-ts-boilerplate",
    description: [
      "Tech Stack: Node.js",
      "It is a lightweight command-line tool I built to streamline the setup of new Express.js projects using TypeScript. The goal was to eliminate repetitive configuration tasks and provide a clean, scalable foundation for backend development. With a single command, developers can spin up a fully configured Express project featuring TypeScript support.",
      "The boilerplate promotes best practices and significantly reduces setup time, allowing developers to focus on building features rather than wrestling with configuration. Future improvements include interactive CLI prompts and optional add-ons like ESLint, Prettier, and more."
    ],
    categories: ["Terminal"],
    summary: "Sets up your express-ts project in a matter of minutes."
  },
  {
    id: "gpcalc",
    client: "GPcalc",
    year: "2023",
    scope: "Web",
    location: "Nigeria",
    liveLink: "https://mygpcalc.netlify.app",
    mainPicture: "gpcalc-home.png",
    pictures: [
      "gpcalc-dashboard.png",
      "gpcalc-editor.png",
      "gpcalc-result.png",
    ],
    description: [
      "Tech Stack: NextJS, MongoDB, jwt, TailwindCSS",
      "GPcalc is a personal project I designed and developed end-to-end to help students (including myself) track their current GPA throughout the academic session.",
      "I built both the frontend and backend, as well as handled all infrastructure and data flow logic. The project was designed with user experience in mind, ensuring the interface remains clean, intuitive, and easy to navigate — even for first-time users.",
      "One of the core features is a dynamic table-based interface for inputting academic records. Users can easily add, update, or remove course entries, including fields like course name, credit load, and grade. To ensure flexibility, the system also allows users to save their progress, making it possible to update records incrementally over time rather than all at once.",
      "Once all desired records are inputted, the user can simply click the “Calculate GPA” button to instantly compute their current GPA based on their course data.",
      "To ensure user data is persistent and secure:",
      "- I implemented user authentication using JWT (JSON Web Tokens).",
      "- MongoDB is used as the primary database to store user profiles and GPA records.",
      "- The app requires sign-up/sign-in, ensuring each user has access to their own GPA history.",
      "This project helped me improve my skills across the stack — from building dynamic UIs, to implementing secure APIs, to managing data storage and session handling."
    ],
    categories: ["mobile"],
    summary:
      "A personal project I built to easily track and calculate my GPA throughout school.",
  },
];

export function getAllProjectIds() {
  return projectData.map((project) => {
    return {
      params: {
        id: project.id,
      },
    };
  });
}

export function getProject(id: string) {
  const index = projectData.findIndex((object) => object.id === id);
  // return projectData.filter((project) => project.id === id)[0];
  if (index < projectData.length - 1) {
    return [projectData[index], projectData[index + 1]];
  }
  return [projectData[index], projectData[0]];
}
