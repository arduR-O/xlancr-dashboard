import Image from "next/image";
import Card from "../Projects/Card";

// Define interface for project data
interface ProjectData {
  companyImageURL: string;
  dueDate: string;
  duration: number;
  progress: number;
  projectName: string;
  projectType: string;
  projectID: number;
}

const Projects = () => {
  // Generate dummy data for 10 projects
  const generateDummyData = (): ProjectData[] => {
    const dummyData: ProjectData[] = [];
    for (let i = 0; i < 5; i++) {
      const projectNumber = i + 1;
      const projectName = `Project ${projectNumber}`;
      dummyData.push({
        companyImageURL: "/companyLogo.svg",
        dueDate: "13 Mar",
        duration: Math.floor(Math.random() * 100), // Generate random duration
        progress: Math.floor(Math.random() * 100), // Generate random progress
        projectName,
        projectType: "Project type",
        projectID: projectNumber
      });
    }
    return dummyData;
  };

  // Get dummy project data
  const dummyProjectData: ProjectData[] = generateDummyData();

  return (
    <div className="flex flex-col gap-6">
      <div className="flex justify-items-center gap-2">
        <Image alt="doc" src="/doc.svg" width={15} height={15} />
        <h1 className="text-xl">All Projects</h1>
      </div>
      <div className="flex flex-wrap gap-7">
        {/* NOTE: Project number is a frontend thing, but project id is unique identifier that can be used to fetch project details from backend */}
        {dummyProjectData.map((data, index) => (
          <Card
            key={index}
            data={data}
            projectNumber = {index + 1}
          />
        ))}
      </div>
    </div>
  );
};

export default Projects;
