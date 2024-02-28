const Card = ({ earning, profit }: { earning: number; profit: number }) => {
  return (
    //   background: linear-gradient(153.85deg, rgba(81, 81, 81, 0.24) 2.62%, rgba(255, 255, 255, 0) 124.35%);

    <div>
      <div className="bg-gradient-to-br rounded-2xl min-w-72 min-h-48 from-[#222222] via-[#232323] via-30% to-[#222222] to-100% shadow-3xl flex flex-col justify-between px-6 py-4 ">
        <div className="flex justify-between items-center ">
          <h1 className="text-base text-[#797874] ">Total Earnings</h1>
        </div>
        <div className="flex justify-between items-center ">
          <h1 className="text-5xl font-bold">₹{earning}</h1>
        </div>
        <div className="flex justify-between">
          <div className="">
            <p className="text-xl text-center">+{profit}%</p>
            <p className="text-sm text-[#797874] mt-[-5px]">This month</p>
          </div>
          <div className="flex flex-col justify-center">
            <img
              src="money.svg"
              alt="money"
              className="w-10 h-10"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
