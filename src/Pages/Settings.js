import { Typography, Checkbox, Box, Grid, Button } from "@mui/material";
import { Container } from "@mui/system";
import React, { useState } from "react";
import LaunchIcon from "@mui/icons-material/Launch";

const Settings = () => {
  const [settings, setSettings] = useState([
    {
      id: 1,
      label: "Display Notification",
      checkbox: false,
    },
    {
      id: 2,
      label: "Copy Link to Clipboard",
      checkbox: false,
    },
    {
      id: 3,
      label: "Show Recording Control",
      checkbox: false,
    },
    {
      id: 4,
      label: "Disable HD Recording",
      checkbox: false,
    },
    {
      id: 5,
      label: "Enable Notes Auto Scroll",
      checkbox: false,
    },
    {
      id: 6,
      label: "Mirror Camera",
      checkbox: false,
    },
    {
      id: 7,
      label: "Enable Light Recording",
      checkbox: false,
    },
    {
      id: 8,
      label: "Recording Preview",
      checkbox: false,
    },
  ]);

  const labelStyle = {
    fontSize: "10px",
    display: "flex",
    alignItems: "center",
    color: "grey",
    fontWeight: "bold",
  };

  const handleCheckBox = (id) => {
    setSettings((prevSettings) => {
      return prevSettings.map((setting) =>
        setting.id === id
          ? { ...setting, checkbox: !setting.checkbox }
          : setting
      );
    });
  };
  return (
    <>
      <Container
        sx={{
          background: "white",
          height: "315px",
          borderRadius: "0 0 10px 10px",
        }}
      >
        <Box sx={{ paddingX: "35px" }}>
          <Typography
            sx={{
              fontWeight: "800",
              color: "grey",
              paddingY: "5px",
              fontSize: "12px",
            }}
          >
            Recoding Prefrences
          </Typography>
          <Grid container spacing={0}>
            {settings &&
              settings.map((setting, index) => (
                <Grid item xs={6} key={index}>
                  <Box
                    sx={{
                      display: "flex",
                      alignItems: "center",
                      marginLeft: index % 2 === 1 ? "3px" : -1.2,
                      height: "23px",
                      whiteSpace: "nowrap",
                      cursor: "pointer",
                    }}
                    onClick={() => handleCheckBox(setting.id)}
                  >
                    <Box>
                      <Checkbox
                        sx={{
                          "& .MuiSvgIcon-root": {
                            fontSize: 17,
                          },
                          "&.Mui-checked": {
                            color: "#6059fd",
                          },
                        }}
                        checked={setting.checkbox}
                      />
                    </Box>
                    <Box>
                      <Typography
                        sx={{
                          fontSize: "10px",
                          fontWeight: "bold",
                          color: "grey",
                        }}
                      >
                        {setting.label}
                      </Typography>
                    </Box>
                  </Box>
                </Grid>
              ))}
          </Grid>
        </Box>
        <Box sx={{ paddingX: "35px", marginTop: "4%" }}>
          <Typography
            sx={{
              fontWeight: "800",
              color: "grey",
              fontSize: "12px",
            }}
          >
            Keyboard Shortcuts
          </Typography>
          <Box
            sx={{
              display: "flex",
              justifyContent: "flex-start",
              marginTop: "7px",
            }}
          >
            <Box sx={{ display: "flex", gap: 6 }}>
              <Box>
                <Box sx={{ display: "flex" }}>
                  <Typography sx={labelStyle}>Pause = Ctrl+Shift+1</Typography>
                </Box>
                <Box sx={{ display: "flex", marginTop: "5px" }}>
                  <Typography sx={labelStyle}>Stop = Ctrl+Shift+2</Typography>
                </Box>
              </Box>
              <Box>
                <Box sx={{ display: "flex" }}>
                  <Typography sx={labelStyle}>
                    Restart = Ctrl+Shift+2
                  </Typography>
                </Box>
                <Box sx={{ display: "flex", marginTop: "5px" }}>
                  <Typography
                    sx={{
                      fontSize: "10px",
                      display: "flex",
                      alignItems: "center",
                      color: "#6059fd",
                      fontWeight: "bold",
                      cursor: "pointer",
                      whiteSpace: "nowrap",
                    }}
                  >
                    Learn More
                    <LaunchIcon sx={{ padding: "2%", fontSize: "14px" }} />
                  </Typography>
                </Box>
              </Box>
            </Box>
          </Box>
        </Box>
        <Box sx={{ paddingX: "35px", marginTop: "4%" }}>
          <Typography
            sx={{
              fontWeight: "800",
              color: "grey",
              fontSize: "12px",
            }}
          >
            Help & Support
          </Typography>
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "flex-start",
              marginTop: "7px",
            }}
          >
            <Typography
              sx={{
                fontSize: "10px",
                alignItems: "center",
                color: "grey",
                fontWeight: "bold",
              }}
            >
              Having problems? Try reloading Konvey or updating the browser to
              the latest version.{" "}
              <span
                style={{
                  color: "#6059fd",
                  cursor: "pointer",
                  textAlign: "center",
                  alignItems: "cetner",
                }}
              >
                Email support here{" "}
                <LaunchIcon
                  sx={{
                    position: "absolute",
                    fontSize: "14px",
                  }}
                />
              </span>
            </Typography>
          </Box>
        </Box>
        <Box sx={{ paddingX: "35px", marginTop: "2.5%" }}>
          <Box
            sx={{
              gap: "8px",
              display: "flex",
              justifyContent: "flex-start",
              height: "30px",
            }}
          >
            <Button
              variant="contained"
              size="small"
              sx={{ backgroundColor: "#6059fd", textTransform: "none" }}
            >
              Reload
            </Button>
            <Button
              variant="outlined"
              size="small"
              sx={{
                borderColor: "#6059fd",
                color: "#6059fd",
                fontSize: "14px",
                whiteSpace: "nowrap",
                textTransform: "none",
              }}
            >
              Help Center
            </Button>
            <Typography
              sx={{
                fontSize: "10px",
                display: "flex",
                alignItems: "flex-end",
                color: "grey",
                fontWeight: "bold",
                whiteSpace: "nowrap",
                textTransform: "none",
              }}
            >
              {" "}
              Version 3.13.20
            </Typography>
          </Box>
        </Box>
      </Container>
      <Box
        sx={{
          backgroundColor: "#f1fcfb",
          borderRadius: "0 0 10px 10px",
          height: "65px",
        }}
      >
        <Box
          sx={{
            height: "inherit",
            paddingX: "50px",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <Box>
            <Typography
              sx={{
                marginTop: "2%",
                fontWeight: "800",
                color: "grey",
                fontSize: "12px",
              }}
            >
              Account
            </Typography>
            <Typography
              sx={{
                fontWeight: "bold",
                color: "grey",
                fontSize: "10px",
              }}
            >
              konveyteam@gmail.com
            </Typography>
          </Box>
          <Box sx={{ marginTop: "3px" }}>
            <Button
              size="small"
              variant="contained"
              sx={{ textTransform: "none" }}
            >
              Signout
            </Button>
          </Box>
        </Box>
      </Box>
    </>
  );
};

export default Settings;

// #f1fcfb
