import React from "react";
import VideocamIcon from "@mui/icons-material/Videocam";
import ControlPointIcon from "@mui/icons-material/ControlPoint";
import VideoLibraryIcon from "@mui/icons-material/VideoLibrary";
import NotificationsIcon from "@mui/icons-material/Notifications";
import SettingsIcon from "@mui/icons-material/Settings";
import { Box, IconButton } from "@mui/material";
const Navbar = ({ handleIconClick, activePage }) => {
  let navIcons = [
    {
      icon: VideocamIcon,
      label: "homepage",
      onClick: () => handleIconClick("homepage"),
    },
    {
      icon: ControlPointIcon,
      label: "addRecording",
      onClick: () => handleIconClick("addRecording"),
    },

    {
      icon: VideoLibraryIcon,
      label: "playRecording",
      onClick: () => handleIconClick("playRecording"),
    },
    {
      icon: NotificationsIcon,
      label: "notifications",
      onClick: () => handleIconClick("notifications"),
    },
    {
      icon: SettingsIcon,
      label: "settings",
      onClick: () => handleIconClick("settings"),
    },
  ];
  //   const handleIconClick = (iconName) => {
  //     console.log("this icone is clicked! ", iconName);
  //   };
  return (
    <Box
      sx={{
        paddingY: "15px",
        paddingX: "15px",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
      }}
    >
      <Box>
        <img
          src="https://dashboard.konvey.app/img/logo.35c8c136.png"
          style={{ maxHeight: "50px" }}
          alt="Konvey-logo"
        />
      </Box>
      <Box
        sx={{
          display: "flex",
          justifyContent: "flex-end",
        }}
      >
        {navIcons.map((button, index) => (
          <IconButton
            key={index}
            onClick={button.onClick}
            sx={{ color: button.label === activePage && "#6059fd" }}
          >
            <button.icon />
          </IconButton>
        ))}
      </Box>
    </Box>
  );
};

export default Navbar;

// https://dashboard.konvey.app/img/logo.35c8c136.png
