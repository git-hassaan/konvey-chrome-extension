import { Box, Typography, Modal } from "@mui/material";
import { styled } from "@mui/material/styles";
import React, { useState } from "react";
import Button from "@mui/material/Button";
import MicIcon from "@mui/icons-material/Mic";
import FormControlLabel from "@mui/material/FormControlLabel";
import Switch from "@mui/material/Switch";
import RecordRTC from "recordrtc";

const Homepage = () => {
  const [isScreen, setIsScreen] = useState(false);
  const [isCam, setIsCam] = useState(false);
  const [isCamAndScreen, setIsCamAndScreen] = useState(false);
  const [microPhone, setMicroPhone] = useState(false);

  const [recording, setRecording] = useState(false);
  const [recordInstance, setRecordInstance] = useState(null);
  const [showVideo, setShowVideo] = useState(false);

  const IOSSwitch = styled((props) => (
    <Switch
      focusVisibleClassName=".Mui-focusVisible"
      disableRipple
      {...props}
    />
  ))(({ theme }) => ({
    width: 42,
    height: 26,
    padding: 0,
    "& .MuiSwitch-switchBase": {
      padding: 0,
      margin: 2,
      transitionDuration: "300ms",
      "&.Mui-checked": {
        transform: "translateX(16px)",
        color: "rgba(0, 100, 240, 0.7)",
        "& + .MuiSwitch-track": {
          backgroundColor:
            theme.palette.mode === "dark" ? "#2ECA45" : "#c8d8e3",
          opacity: 1,
          border: 0,
        },
        "&.Mui-disabled + .MuiSwitch-track": {
          opacity: 0.5,
        },
      },
      "&.Mui-focusVisible .MuiSwitch-thumb": {
        color: "#33cf4d",
        border: "6px solid #fff",
      },
      "&.Mui-disabled .MuiSwitch-thumb": {
        color:
          theme.palette.mode === "light"
            ? theme.palette.grey[100]
            : theme.palette.grey[600],
      },
      "&.Mui-disabled + .MuiSwitch-track": {
        opacity: theme.palette.mode === "light" ? 0.7 : 0.3,
      },
    },
    "& .MuiSwitch-thumb": {
      boxSizing: "border-box",
      width: 22,
      height: 22,
    },
    "& .MuiSwitch-track": {
      borderRadius: 26 / 2,
      backgroundColor: theme.palette.mode === "light" ? "#E9E9EA" : "#39393D",
      opacity: 1,
      transition: theme.transitions.create(["background-color"], {
        duration: 500,
      }),
    },
  }));

  const getStopBtn = () => {
    const stopButton = document.createElement("button");
    stopButton.textContent = "Stop Recording";
    stopButton.style.position = "fixed";
    stopButton.style.top = "20px";
    stopButton.style.left = "20px";
    stopButton.style.padding = "10px";
    stopButton.style.borderRadius = "15px";
    stopButton.style.backgroundColor = "red";
    stopButton.style.color = "white";
    stopButton.style.border = "none";
    stopButton.style.cursor = "pointer";
    document.body.appendChild(stopButton);
  }
  const recorder = (screenStream) => {
    return new RecordRTC(screenStream, {
      type: "video",
      mimeType: "video/webm",
    })
  }

  const handleScreenPermission = () => {

    try {
      navigator.mediaDevices.getDisplayMedia({ video: true }).then((screenStream) => {
        chrome.runtime.sendMessage({ action: 'screenPermissionGranted' });
      }).catch((error) => {
        chrome.runtime.sendMessage({ action: 'screenPermissionDenied', error: error.message });
      });
    } catch (error) {
      chrome.runtime.sendMessage({ action: 'screenPermissionError', error: error.message });
    }
  }

  const handleStartRecording = async () => {
    if (!recording) {
      const isRecordingScreen = isScreen || isCamAndScreen;
      const isRecordingCam = isCam || isCamAndScreen;

      if (isRecordingScreen && !isRecordingCam) {

        chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
          const activeTab = tabs[0];
          chrome.scripting.executeScript(
            {
              target: { tabId: activeTab.id },
              function: handleScreenPermission
            },
            (results) => {
              if (!chrome.runtime.lastError) {
                console.log("Here is the result: ", results)
              } else {
                console.error("Error requesting screen permission:", chrome.runtime.lastError);
              }
            }
          );
        });

      } else if (!isRecordingScreen && isRecordingCam) {
      } else if (isRecordingScreen && isRecordingCam) {
      }
    } else {
      // Stop recording
      setShowVideo(true);
      recordInstance.stopRecording(() => {
        const recordedBlob = recordInstance.getBlob();

        const videoUrl = URL.createObjectURL(recordedBlob);
        const videoElement = document.createElement("video");
        videoElement.src = videoUrl;
        videoElement.controls = true;
        videoElement.style.width = "100%";

        const videoContainer = document.getElementById("video-container");
        videoContainer.innerHTML = "";
        videoContainer.appendChild(videoElement);

        setRecording(false);
        setRecordInstance(null);
      });
    }
  };

  return (
    <div>
      <Typography
        sx={{ fontSize: 28, textAlign: "center", paddingTop: "20px" }}
      >
        Start Your Recording
      </Typography>

      {/* Radio button */}
      <Box
        style={{
          display: "flex",
          alignItems: "center",
          flexDirection: "column",
        }}
      >
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "flex-start",
          }}
        >
          <FormControlLabel
            control={
              <IOSSwitch
                sx={{ m: 1 }}
                checked={isScreen}
                onChange={() => setIsScreen(!isScreen)}
              />
            }
            label="Screen"
          />
          <FormControlLabel
            control={
              <IOSSwitch
                sx={{ m: 1 }}
                checked={isCam}
                onClick={() => setIsCam(!isCam)}
              />
            }
            label="Camera"
          />
          <FormControlLabel
            control={
              <IOSSwitch
                sx={{ m: 1 }}
                checked={isCamAndScreen}
                onChange={() => setIsCamAndScreen(!isCamAndScreen)}
              />
            }
            label="Screen + Cam"
          />
        </Box>
      </Box>

      <Box sx={{ display: "flex", justifyContent: "center", marginTop: "3%" }}>
        <Button
          variant="outlined"
          startIcon={<MicIcon />}
          sx={{
            borderRadius: "50px",
            border: "none",
            color: "black",
            backgroundColor: "#c8d8e3",
            textTransform: "none",
            height: "50px",
            width: "270px",
          }}
          onClick={() => setMicroPhone(!microPhone)}
        >
          <Typography> Default - Microphone </Typography>

          <Box
            sx={{
              background: "rgba(0,100,240,0.7)",
              color: "white",
              borderRadius: "8px",
              paddingX: "10px",
              paddingY: "3px",
              marginY: "4px",
              marginX: "6px",
            }}
          >
            <b>{microPhone ? "On" : "Off"}</b>
          </Box>
        </Button>
      </Box>
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          marginTop: "25px",
          marginBottom: "40px",
        }}
      >
        <Button
          id="startRecording"
          variant="outlined"
          sx={{
            borderRadius: "50px",
            border: "none",
            color: "white",
            backgroundColor: "rgba(0,100,240,0.7)",
            textTransform: "none",
            height: "60px",
            width: "280px",
            "&:hover": {
              color: "#6059fd",
            },
          }}
          disabled={!isCam && !isCamAndScreen && !isScreen}
          onClick={() => handleStartRecording()}
        >
          <Typography
            sx={{
              fontSize: "22px",
            }}
          >
            {recording ? "Stop Recording" : "Start Recording"}
          </Typography>
        </Button>
      </Box>
      <Modal
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
        open={showVideo}
        onClose={() => setShowVideo(false)}
      >
        <div
          id="video-container"
          style={{
            width: "50%",
            height: "50%",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        ></div>
      </Modal>
    </div>
  );
};

export default Homepage;
