import { useState } from "react";
import CardView from "../components/CardView";
import ListView from "../components/ListView";
import data from "../assets/dummy.json";

const Home = () => {
  const text = data.twisters;
  const [view, setView] = useState("card");

  const handleListView = () => {
    setView("list");
  };

  const handleCardView = () => {
    setView("card");
  };

  return view == "card" ? <CardView text={text} handleListView={handleListView} handleCardView={handleCardView}/> : <ListView text={text} handleListView={handleListView} handleCardView={handleCardView}/>;
};
export default Home;
