import React from "react";
import Navbar from "./components/Navbar";
import ContentCard from "./layouts/ContentCard";
import MainCard from "./layouts/MainCard";
import Gutter from "./layouts/Gutter";

function App() {
  return (
    <>
      <Gutter>
        <MainCard>
          <Navbar />
          <ContentCard/>


        </MainCard>
      </Gutter>
    </>
  );
}

export default App;
