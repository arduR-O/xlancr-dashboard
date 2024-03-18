"use client";
import RadialProgressBar from "@/components/Projects/RadialProgressBar";
import { useEffect, useState } from "react";
import useMediaQuery from "@/components/Projects/useMediaQuery";
// import "@/styles/globals.css";

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
    description:
      "Here is a 300 word Lorem Ipsum placeholder text:Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Cras mattis consectetur purus sit amet fermentum. Donec id elit non mi porta gravida at eget metus.Morbi leo risus, porta ac consectetur ac, vestibulum at eros. Nullam quis risus eget urna mollis ornare vel eu leo. Donec ullamcorper nulla non metus auctor fringilla. Cras mattis consectetur purus sit amet fermentum. Morbi leo risus, porta ac consectetur ac, vestibulum at eros. Donec id elit non mi porta gravida at eget metus.Maecenas faucibus mollis interdum. Maecenas faucibus mollis interdum. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec sed odio dui. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus. Integer posuere erat a ante venenatis dapibus posuere velit aliquet. Maecenas sed diam eget risus varius blandit sit amet non magna.",
    progress: 88,
  };
  const { id } = params;
  const [progressBarSize, setProgressBarSize] = useState(200);
  const isSmallScreen = useMediaQuery("(max-width: 640px)");
  const isVerySmallScreen = useMediaQuery("(max-width: 400px)");
  const isMediumScreen = useMediaQuery(
    "(min-width: 640px) and (max-width: 1600px)"
  );

  useEffect(() => {
    setProgressBarSize(isSmallScreen ? isVerySmallScreen? 120 : 160 : isMediumScreen ? 125 : 200);
  }, [isSmallScreen, isMediumScreen]);

  return (
    <main className="h-[100svh] bg-black p-2 text-[#CDCDCD]">
      <div className="flex h-1/2 md:h-fit justify-between gap-2 px-1 md:flex-col md:gap-5 md:m-4">
        <div className="w-[31vw] flex flex-col justify-evenly lg:min-w-[317px] md:w-full md:justify-start md:h-fit md:gap-7 ">
          {/* projectTitle */}
          <div className="flex h-[20.4vh] bg-project-detail-card-bg rounded-3xl md:w-full">
            <div className="flex flex-col justify-center w-[30%] p-3 ">
              <img
                src={data.companyLogo}
                alt="companyLogo"
                className="w-full md:h-full"
              />
            </div>
            <div className="w-[70%] flex flex-col justify-center p-2 gap-1">
              <p className="font-light">Project #{data.projectNumber}</p>
              <h1 className="text-4xl font-semibold text-white">
                {data.projectName}
              </h1>
            </div>
          </div>
          <div className="flex justify-between gap-2 md:gap-0 sm:h-fit sm-min:flex-col sm-min:gap-5 ">
            {/* deadline etc. */}
            <div className="flex flex-col w-[12.3vw] h-[20.4vh] min-w-48 xl:min-w-44 lg:min-w-40 justify-evenly bg-project-detail-card-bg rounded-3xl md:w-[40vw] sm-min:min-w-full">
              <div className="flex px-4 justify-between ">
                <p className="text-sm font-light lg:text-xs md:text-base sm-min:text-lg">
                  Deadline
                </p>
                <p className="text-sm font-semibold lg:text-xs md:text-base sm-min:text-lg">
                  {data.deadline}
                </p>
              </div>
              <div className="flex px-4 justify-between">
                <p className="text-sm font-light lg:text-xs md:text-base sm-min:text-lg">
                  Start
                </p>
                <p className="text-sm font-semibold lg:text-xs md:text-base sm-min:text-lg">
                  {data.start}
                </p>
              </div>
              <div className="flex px-4 justify-between">
                <p className="text-sm font-light lg:text-xs md:text-base sm-min:text-lg">
                  Hours
                </p>
                <p className="text-sm font-semibold lg:text-xs md:text-base sm-min:text-lg">
                  {data.hours} Hours
                </p>
              </div>
            </div>
            {/* duration etc. */}
            <div className="w-[17.3vw] bg-project-detail-card-bg rounded-3xl flex justify-evenly md:w-[40vw] sm-min:min-w-full">
              <div className="w-[48%] p-2 flex flex-col justify-center gap-1">
                <p className="font-normal text-sm lg:text-xs text-center md:text-sm">
                  Total Duration
                </p>
                <p className="text-3xl xl:text-2xl lg:text-xl font-bold text-center md:text-3xl">
                  {data.duration} H
                </p>
              </div>
              <div className="w-[0.7px] flex flex-col justify-center align-middle">
                <div className="h-[45%] w-full bg-[#CDCDCD]"></div>
              </div>
              <div className="w-[48%] p-2 flex flex-col justify-center gap-1 align-middle">
                <p className="font-normal text-sm lg:text-xs text-center md:text-sm">
                  Total Visits
                </p>
                <p className="text-3xl xl:text-2xl lg:text-xl font-bold text-center md:text-3xl">
                  {data.visits}
                </p>
              </div>
            </div>
          </div>
        </div>
        {/* graph */}
        <div className="flex flex-col justify-center items-center w-[68vw] lg:max-w-full p-1 md:w-full">
          <div className="w-[62vw] h-[43.8vh] bg-project-detail-card-bg rounded-3xl lg:max-w-full lg-min:max-w-[410px] md:min-w-full"></div>
        </div>
      </div>

      <div className="flex h-1/2 justify-between sm:flex-col sm:h-fit sm:p-4 sm:justify-center sm:align-middle sm:gap-3">
        {/* description */}
        <div className="w-[62vw] h-[40.5vh] bg-project-detail-card-bg rounded-3xl my-auto flex flex-col justify-center gap-2 px-4 lg-min:w-[50vw] sm:w-full">
          <h1 className="text-3xl font-medium">Description</h1>
          <p className="text-ellipsis overflow-scroll text-md font-light max-h-[60%]  no-scrollbar">
            {data.description}
          </p>
        </div>
        {/* progress */}
        <div className="h-[40.5vh] w-[35vw] bg-project-detail-card-bg rounded-3xl my-auto mx-auto flex items-center p-2 justify-evenly lg:min-w-[280px] sm:w-full">
          <RadialProgressBar
            progress={data.progress}
            height={progressBarSize}
            width={progressBarSize}
          />
          <div>
            <p className="font-light">Project Completion</p>
            <p className="text-8xl lg:text-5xl font-bold sm:text-7xl xs:text-5xl">{data.progress}%</p>
          </div>
        </div>
      </div>
    </main>
  );
};

export default projectDetails;
