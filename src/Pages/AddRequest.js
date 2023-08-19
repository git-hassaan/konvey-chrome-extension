import React from "react";
import { Box, Card, Typography, IconButton } from "@mui/material";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import LinkIcon from "@mui/icons-material/Link";

const AddRequest = () => {
  const data = [
    {
      id: 1,
      label: "Label 1",
      linkURL: "https://example.com",
      numOfRecordings: 5,
      editAction: EditIcon,
      deleteAction: "DeleteIcon",
    },
    {
      id: 2,
      label: "Label 1",
      linkURL: "https://example.com",
      numOfRecordings: 5,
      editAction: "EditIcon",
      deleteAction: "DeleteIcon",
    },
    {
      id: 3,
      label: "Label 1",
      linkURL: "https://example.com",
      numOfRecordings: 5,
      editAction: "EditIcon",
      deleteAction: "DeleteIcon",
    },
  ];

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        backgroundColor: "#edf2f7",
        borderRadius: "0 0 10px 10px",
        height: "363px",
      }}
    >
      <Card
        sx={{
          marginTop: "20px",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          borderRadius: "12px",
          marginX: "25px",
          height: "40px",
        }}
      >
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            width: "-webkit-fill-available",
            padding: "20px",
          }}
        >
          <Box flex="0.3">
            <Typography
              sx={{
                fontSize: "13px",
                color: "rgba(0,0,0,0.8)",
              }}
            >
              Label
            </Typography>
          </Box>
          <Box flex="0.48">
            <Typography
              sx={{
                fontSize: "13px",
                color: "rgba(0,0,0,0.8)",
              }}
            >
              Link URL
            </Typography>
          </Box>
          <Box flex="0.6">
            <Typography
              sx={{
                fontSize: "13px",
                color: "rgba(0,0,0,0.8)",
              }}
            >
              No of Recording
            </Typography>
          </Box>
          <Box>
            <Typography
              sx={{
                fontSize: "13px",
                color: "rgba(0,0,0,0.8)",
              }}
            >
              Action
            </Typography>
          </Box>
        </Box>
      </Card>
      <Box>
        {data.map((item) => (
          <Card
            sx={{
              marginTop: "20px",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              borderRadius: "12px",
              marginX: "25px",
              height: "40px",
            }}
          >
            <Box
              sx={{
                display: "flex",
                justifyContent: "space-between",
                width: "-webkit-fill-available",
                padding: "20px",
              }}
            >
              <Box flex="0.3">
                <Typography
                  sx={{
                    fontSize: "11px",
                    color: "rgba(0,0,0,0.7)",
                  }}
                >
                  {item.label}
                </Typography>
              </Box>
              <Box flex="0.6">
                <Typography
                  sx={{
                    fontSize: "10px",
                    color: "rgba(75,0,130,0.8)",
                    cursor: "pointer",
                  }}
                >
                  {item.linkURL}
                </Typography>
              </Box>
              <Box flex="0.4">
                <Typography
                  sx={{
                    fontSize: "11px",
                    color: "rgba(0,0,0,0.7)",
                  }}
                >
                  {item.numOfRecordings}
                </Typography>
              </Box>
              <Box
                sx={{
                  display: "flex",
                }}
              >
                <IconButton>
                  <LinkIcon style={{ fontSize: "11px" }} />
                </IconButton>
                <IconButton>
                  <DeleteIcon style={{ fontSize: "11px" }} />
                </IconButton>
              </Box>
            </Box>
          </Card>
        ))}
      </Box>
    </Box>
  );
};

export default AddRequest;
