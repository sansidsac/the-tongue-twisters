import Card from "../components/Card";

const Home = () => {
  return (
    <div className="flex flex-row justify-evenly h-screen bg-[#A6FFAA]">
      <div>
        <div className="md:mt-60">
          <i
            className="fa-solid fa-circle-arrow-up text-[3rem] md:text-[5rem]"
            style={{ color: "#ffffff"}}></i>
        </div>
        <div className="md:mt-10">
          <i
            className="fa-solid fa-circle-arrow-down text-[3rem] md:text-[5rem]"
            style={{ color: "#ffffff"}}></i>
        </div>
      </div>
      <div className="flex flex-col items-center">
        <Card text="Peter Piper picked a peck of pickled peppers. A peck of pickled peppers Peter Piper picked. If Peter Piper picked a peck of pickled peppers,Where’s the peck of pickled peppers Peter Piper picked ?" />
        <button className="md:w-35 bg-white text-[#A6FFAA] font-bold py-2 px-4 rounded-4xl mt-2 md:mt-10 hover:bg-[#A6FFAA] hover:text-white hover:font-bold hover:py-2 hover:px-4 hover:rounded">
          <h2 className="text-sm md:text-lg">Compete</h2>
        </button>
      </div>
      <div className="md:mt-70">
        <i className="fa-solid fa-table-list text-[3rem] md:text-[5rem]" style={{color: "#ffffff"}}></i>
      </div>
    </div>
  );
};
export default Home;
