import Image from "next/image";
import Card from "./Card";

// Define interface for card data
interface CardData {
  earning: number;
  profit: number;
}

const Dashboard = () => {
  // Generate dummy data for 10 cards
  const generateDummyData = (): CardData[] => {
    const dummyData: CardData[] = [];
    for (let i = 0; i < 5; i++) {
      const earning = Math.floor(Math.random() * 10000); // Generate random earning
      const profit = Math.floor(Math.random() * 50); // Generate random profit
      dummyData.push({ earning, profit });
    }
    return dummyData;
  };

  // Get dummy card data
  const dummyCardData: CardData[] = generateDummyData();

  return (
    <div className="flex flex-col gap-6">
      <div className="flex justify-items-center gap-2">
        <Image alt="doc" src="/doc.svg" width={15} height={15} />
        <h1 className="text-xl">Dashboard</h1>
      </div>
      <div className="flex flex-wrap gap-7">
        {dummyCardData.map((data, index) => (
          <Card data={data} key={index} />
        ))}
      </div>
    </div>
  );
};

export default Dashboard;
