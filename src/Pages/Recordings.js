import React from "react";
import { Box, Typography, Divider, CardMedia } from "@mui/material";

import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import AttachmentIcon from "@mui/icons-material/Attachment";
import LaunchIcon from "@mui/icons-material/Launch";

const Recordings = () => {
  const data = [
    {
      imageLink:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQK7nN9NapfpDgNKWdzyyb9xYClOoPDQOA0EA&usqp=CAU",
      imgDescription: "This is the first image",
      date: "June 7, 2020",
    },
    {
      imageLink:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQK7nN9NapfpDgNKWdzyyb9xYClOoPDQOA0EA&usqp=CAU",
      imgDescription: "This is the second image",
      date: "July 21, 2021",
    },
    {
      imageLink:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQK7nN9NapfpDgNKWdzyyb9xYClOoPDQOA0EA&usqp=CAU",
      imgDescription: "This is the third image",
      date: "Sep 14, 2023",
    },
  ];
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        height: "345px",
        backgroundColor: "#edf2f7",
        borderRadius: "0 0 10px 10px",
        padding: "10px 20px",
      }}
    >
      {data.map((item) => (
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            borderRadius: "20px",
            padding: "10px",
            marginY: "5px",
          }}
        >
          <Box>
            <CardMedia
              component="img"
              height="65"
              image={item.imageLink}
              alt="Paella dish"
              sx={{ borderRadius: "12px" }}
            />
          </Box>
          <Box
            flex={0.8}
            display="flex"
            flexDirection="row"
            alignItems="center"
          >
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                alignItems: "left",
              }}
            >
              <Box>
                <Typography fontSize="13px" color="rgba(0,0,0,0.7)">
                  {item.imgDescription}
                </Typography>
              </Box>
              <Box>
                <Typography fontSize="12px" color="rgba(0,0,0,0.6)">
                  {item.date}
                </Typography>
              </Box>
            </Box>
          </Box>
          <Box display="flex" flexDirection="row" alignItems="center">
            <AttachmentIcon
              size="medium"
              sx={{ fontSize: "19px", marginX: "8px" }}
            />{" "}
            <MoreHorizIcon size="medium" sx={{ fontSize: "19px" }} />
          </Box>
        </Box>
      ))}

      <Divider sx={{ marginTop: "10px", backgroundColor: "rgba(0,0,0,0.1)" }} />
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          cursor: "pointer",
          bottom: 0,
        }}
      >
        <Typography
          sx={{
            textAlign: "center",
            paddingY: "17px",
            fontWeight: 600,
            fontSize: "16px",
          }}
        >
          Open Video Library &nbsp;
        </Typography>
        <LaunchIcon />
      </Box>
    </Box>
  );
};

export default Recordings;
