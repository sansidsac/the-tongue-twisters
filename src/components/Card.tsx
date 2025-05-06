type CardProps = {
  text: string;
};

const Card = ({text}:CardProps) => {
    text =text.length > 400 ? text.slice(0, 400) + "..." : text;

  return (
    <div className="flex flex-row items-center justify-center bg-white rounded-lg shadow-lg  p-2 mt-5 w-100 h-60 md:p-4 md:mt-20 md:w-180 md:h-120">
        <h2 className="text-sm md:text-xl text-justify font-bold p-2 md:p-4">{text}</h2>
    </div>
  );
};

export default Card;
