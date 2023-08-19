import React, { useState, useEffect } from "react";
import Navbar from "../Components/Navbar";
import AddRequest from "./AddRequest";
import Homepage from "./Homepage";
import Notifications from "./Notifications";
import Recordings from "./Recordings";
import Settings from "./Settings";
import { Divider } from "@mui/material";

const Index = () => {
  const [activePage, setActivePage] = useState("homepage");
  const [isTransitioning, setIsTransitioning] = useState(false);

  const handleNavbarButtonClick = (page) => {
    if (page !== activePage) {
      setIsTransitioning(true);
      setTimeout(() => {
        setActivePage(page);
      }, 100);
    }
  };

  useEffect(() => {
    setIsTransitioning(false);
  }, [activePage]);

  const pageStyles = {
    transition: "opacity 100ms ease-in-out",
    opacity: isTransitioning ? 0 : 1,
  };

  return (
    <div>
      <Navbar
        activePage={activePage}
        handleIconClick={handleNavbarButtonClick}
      />
      {activePage !== "settings" && (
        <Divider sx={{ backgroundColor: "rgba(0,0,0,0.1)" }} />
      )}

      <div style={pageStyles}>
        {activePage === "homepage" && <Homepage />}
        {activePage === "addRecording" && <AddRequest />}
        {activePage === "playRecording" && <Recordings />}
        {activePage === "notifications" && <Notifications />}
        {activePage === "settings" && <Settings />}
      </div>
    </div>
  );
};

export default Index;
