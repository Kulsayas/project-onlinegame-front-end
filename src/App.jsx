import React from "react";
import "./App.css";
import Thumbnail from "./components/CarouselThumbnail";
import SearchThumbnail from "./components/SearchThumbnail";
import CarouselBanner from "./components/CarouselBanner";
import DetailGame from "./pages/DetailGame";

const App = () => {
  return (
    <div>
      <DetailGame />
      <br />
      <br />
      <br />
      <br />
      <CarouselBanner />
    </div>
  );
};

export default App;
