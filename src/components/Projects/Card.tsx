import Image from "next/image";

const Card = ({
  companyImageURL,
  projectType,
  projectName,
  duration,
  progress,
  dueDate,
  projectNumber,
}: {
  companyImageURL: string;
  projectType: string;
  projectName: string;
  duration: number;
  progress: number;
  dueDate: string;
  projectNumber: number;
}) => {
  return (
    //   background: linear-gradient(153.85deg, rgba(81, 81, 81, 0.24) 2.62%, rgba(255, 255, 255, 0) 124.35%);

    <div>
      <div className="bg-project-bg rounded-2xl min-w-64 min-h-52 shadow-3xl flex flex-col justify-between px-6 py-4 gap-7">
        <div className="flex justify-between max-h-[33.3%] justify-items-center">
          <Image
            src={companyImageURL}
            width={50}
            height={50}
            alt="company logo"
          />
          <div className="flex flex-col justify-center text-6xl font-bold opacity-40">
            {projectNumber}
          </div>
        </div>

        <div className="flex flex-col max-h-[33.3%]">
          <p className="text-xs font-medium">{projectType}</p>
          <h1 className="text-2xl font-semibold">{projectName}</h1>
          <div className="flex justify-items-center gap-1">
            <Image src={"/Clock.svg"} width={20} height={20} alt="clock" />
            <p className="text-xs flex items-center">{duration} days</p>
          </div>
        </div>

        <div className="max-h-[33.3%]">
          <div className="flex justify-between gap-9 ">
            <div className="flex flex-col">
              <p className="text-xs ml-1 font-light ">{progress}% completed</p>
              <div className="flex gap-7 items-center">
                <div className="bg-[#010101] w-48 h-2 rounded-2xl">
                  <div
                    className={`bg-[#5D5D5D] h-2 rounded-2xl`}
                    style={{ width: `${progress}%` }}
                  ></div>
                </div>
                <div className="flex items-center bg-black px-2 gap-1 rounded-2xl">
                  <Image src={"/Flag.svg"} width={10} height={10} alt="flag" />
                  <p className="text-xs">{dueDate}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
