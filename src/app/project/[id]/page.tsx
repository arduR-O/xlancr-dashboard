import RadialProgressBar from "@/components/Projects/RadialProgressBar";
import { useEffect } from "react";
const projectDetails = ({ params }: { params: any }) => {
  const data: {
    projectNumber: number;
    projectName: string;
    companyLogo: string;
    deadline: string;
    start: string;
    hours: number;
    duration: number;
    visits: number;
    description: string;
    progress: number;
  } = {
    projectNumber: 1,
    projectName: "Project A",
    companyLogo: "/companyLogo.svg",
    deadline: "2024-03-15",
    start: "2024-01-15",
    hours: 80,
    duration: 60,
    visits: 10,
    description: "Here is a 300 word Lorem Ipsum placeholder text:Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Cras mattis consectetur purus sit amet fermentum. Donec id elit non mi porta gravida at eget metus.Morbi leo risus, porta ac consectetur ac, vestibulum at eros. Nullam quis risus eget urna mollis ornare vel eu leo. Donec ullamcorper nulla non metus auctor fringilla. Cras mattis consectetur purus sit amet fermentum. Morbi leo risus, porta ac consectetur ac, vestibulum at eros. Donec id elit non mi porta gravida at eget metus.Maecenas faucibus mollis interdum. Maecenas faucibus mollis interdum. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec sed odio dui. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus. Integer posuere erat a ante venenatis dapibus posuere velit aliquet. Maecenas sed diam eget risus varius blandit sit amet non magna.",
    progress: 88,
  };
  const { id } = params;

  return (
    <main className="h-[100svh] bg-black p-2 text-[#CDCDCD]">
      <div className="flex h-1/2 justify-between ">
        <div className="w-[31vw] flex flex-col justify-evenly">
          {/* projectTitle */}
          <div className="flex h-[20.4vh] bg-project-detail-card-bg rounded-3xl">
            <div className="flex flex-col justify-center w-[30%] p-3 ">
              <img
                src={data.companyLogo}
                alt="companyLogo"
                className="w-full"
              />
            </div>
            <div className="w-[70%] flex flex-col justify-center p-2 gap-1">
              <p className="font-light">Project #{data.projectNumber}</p>
              <h1 className="text-4xl font-semibold text-white">
                {data.projectName}
              </h1>
            </div>
          </div>
          <div className="flex justify-between">
            {/* deadline etc. */}
            <div className="flex flex-col w-[12.3vw] h-[20.4vh] min-w-48 justify-evenly bg-project-detail-card-bg rounded-3xl">
              <div className="flex px-4 justify-between">
                <p className="text-sm font-light">Deadline</p>
                <p className="text-sm font-semibold">{data.deadline}</p>
              </div>
              <div className="flex px-4 justify-between">
                <p className="text-sm font-light">Start</p>
                <p className="text-sm font-semibold">{data.start}</p>
              </div>
              <div className="flex px-4 justify-between">
                <p className="text-sm font-light">Hours</p>
                <p className="text-sm font-semibold">{data.hours} Hours</p>
              </div>
            </div>
            {/* duration etc. */}
            <div className="w-[17.3vw] bg-project-detail-card-bg rounded-3xl flex justify-between p-2">
              <div className="w-[48%] p-2 flex flex-col justify-center gap-1">
                <p className="font-normal text-sm mx-auto">Total Duration</p>
                <p className="text-3xl font-bold mx-auto">{data.duration} H</p>
              </div>
              <div className="w-[0.7px] flex flex-col justify-center align-middle">
                <div className="h-[45%] w-full bg-[#CDCDCD]"></div>
              </div>
              <div className="w-[48%] p-2 flex flex-col justify-center gap-1 align-middle">
                <p className="font-normal text-sm mx-auto">Total Visits</p>
                <p className="text-3xl font-bold mx-auto">{data.visits}</p>
              </div>
            </div>
          </div>
        </div>
        {/* graph */}
        <div className="flex flex-col justify-center w-[68vw]">
        <div className="w-[62vw] h-[43.8vh] bg-project-detail-card-bg rounded-3xl mx-auto"></div>
        </div>
      </div>

      <div className="flex h-1/2 justify-between">
        {/* description */}
          <div className="w-[62vw] h-[40.5vh] bg-project-detail-card-bg rounded-3xl my-auto flex flex-col justify-center gap-2 px-4">
            <h1 className="text-3xl font-medium">Description</h1>
            <p className="text-ellipsis overflow-scroll text-md font-light max-h-[60%]">{data.description}</p>
          </div>
        {/* progress */}
          <div className="w-[31vw] h-[40.5vh] bg-project-detail-card-bg rounded-3xl my-auto mx-auto flex items-center p-2 justify-evenly">
            <RadialProgressBar progress={data.progress} height={200} width={200}/>
            <div>
              <p className="font-light ">Project Completion</p>
              <p className="text-7xl font-bold">{data.progress}%</p>
            </div>
          </div>
      </div>
    </main>
  );
};

export default projectDetails;
