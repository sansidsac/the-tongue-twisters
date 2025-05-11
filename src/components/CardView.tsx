import { useState } from "react";
import Card from "../components/Card";
import { TwisterType } from "../types/TwisterData";


const CardView = ({text, handleListView} : TwisterType) => {
  const [number, setNumber] = useState(0);
  const twister = text[number].text;

  const handleNextTwister = () => {
    if (number < text.length - 1) {
      setNumber(number + 1);
    } else {
      setNumber(0);
    }
  };

  const handlePreviousTwister = () => {
    if (number > 0) {
      setNumber(number - 1);
    } else {
      setNumber(text.length - 1);
    }
  };

  return (
    <div className="flex flex-row justify-evenly h-screen bg-[#A6FFAA]">
      <div>
        <div className="md:mt-60">
          <i
            className="fa-solid fa-circle-arrow-up text-[3rem] md:text-[5rem] hover:cursor-pointer hover:opacity-85 hover:transition-all hover:duration-300 active:scale-95"
            style={{ color: "#ffffff" }}
            onClick={handlePreviousTwister}></i>
        </div>
        <div className="md:mt-10">
          <i
            className="fa-solid fa-circle-arrow-down text-[3rem] md:text-[5rem] hover:cursor-pointer hover:opacity-85 hover:transition-all hover:duration-300 active:scale-95"
            style={{ color: "#ffffff" }}
            onClick={handleNextTwister}></i>
        </div>
      </div>
      <div className="flex flex-col items-center">
        <Card text={twister} />
        <button className="md:w-35 bg-white text-[#A6FFAA] font-bold py-2 px-4 rounded-4xl mt-2 md:mt-10 hover:cursor-pointer hover:opacity-85 hover:transition-all hover:duration-300 active:scale-95">
          <h2 className="text-sm md:text-lg">Compete</h2>
        </button>
      </div>
      <div className="md:mt-70">
        <i
          className="fa-solid fa-table-list text-[3rem] md:text-[5rem] hover:cursor-pointer hover:opacity-85 hover:transition-all hover:duration-300 active:scale-95"
          style={{ color: "#ffffff" }}
          onClick={handleListView}></i>
      </div>
    </div>
  );
};
export default CardView;
