import React from "react";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import ContentCard from "./layouts/ContentCard";
import MainCard from "./layouts/MainCard";
import Gutter from "./layouts/Gutter";

import TodayTasks from "./pages/TodayTasks";
import UpcomingPage from "./pages/UpcomingPage";
import Calendar from "./pages/Calendar";
import StickyWall from "./pages/StickyWall";

function App() {
  return (
    <>
      <Gutter>
        <MainCard>
          <Navbar /> {/* Navbar always visible */}
          <ContentCard>
            <Routes>
              <Route path="/" element={<TodayTasks />} /> {/* Default Route */}
              <Route path="/todayTasks" element={<TodayTasks />} />
              <Route path="/upcoming" element={<UpcomingPage />} />
              <Route path="/calendar" element={<Calendar />} />
              <Route path="/stickyWall" element={<StickyWall />} />
            </Routes>
          </ContentCard>
        </MainCard>
      </Gutter>
    </>
  );
}

export default App;
