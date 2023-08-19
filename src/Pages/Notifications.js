import React from "react";
import {
  Box,
  Card,
  CardContent,
  Typography,
  CardHeader,
  Grid,
} from "@mui/material";
import Avatar from "@mui/material/Avatar";
import { red } from "@mui/material/colors";

const Notifications = () => {
  const data = [
    {
      name: "Person 1",
      desc: "Konvey homepage recording",
      date: "July 11, 2023",
    },
    {
      name: "Person 1",
      desc: "Konvey homepage recording",
      date: "July 11, 2023",
    },
    {
      name: "Person 1",
      desc: "Konvey homepage recording",
      date: "July 11, 2023",
    },
  ];
  return (
    <Box
      sx={{
        backgroundColor: "white",
        paddingX: "20px",
        paddingBottom: "63.5px",
        borderRadius: "0 0 10px 10px",
        // overflowY: "scroll",
      }}
    >
      {data.map((item) => (
        <Card sx={{ border: "none", boxShadow: "none" }}>
          <Grid container>
            <Grid xs={2}>
              <CardHeader
                avatar={
                  <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
                    R
                  </Avatar>
                }
              />
            </Grid>
            <Grid xs={10}>
              <CardContent>
                <Typography sx={{ fontSize: "15px" }}>{item.name}</Typography>
                <Typography sx={{ fontSize: "13px" }}>
                  Watched{" "}
                  <span style={{ color: "#4197ee", cursor: "pointer" }}>
                    {item.desc}
                  </span>
                </Typography>
                <Typography sx={{ fontSize: "12px" }}>{item.date}</Typography>
              </CardContent>
            </Grid>
          </Grid>
        </Card>
      ))}
    </Box>
  );
};

export default Notifications;
