import { TwisterType } from "../types/TwisterData";

const ListView = ({ text, handleCardView }: TwisterType) => {
  return (
    <div className="flex flex-row justify-evenly h-screen bg-white">
      <div>
        <ul className="rounded-md p-5 ml-75 mr-30 list-disc marker:text-[#A6FFAA]">
          {text.map((text, index) => (
            <li key={index} className="m-8 text-lg text-black font-bold pl-2">
              {text.text}
            </li>
          ))}
        </ul>
      </div>
      <div className="md:mt-70 md:mr-40">
        <i
          className="fa-solid fa-table-list text-[3rem] md:text-[5rem] hover:cursor-pointer hover:opacity-85 hover:transition-all hover:duration-300 active:scale-95"
          style={{ color: "#A6FFAA" }}
          onClick={handleCardView}></i>
      </div>
    </div>
  );
};
export default ListView;
