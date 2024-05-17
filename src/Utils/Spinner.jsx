import { Box, CircularProgress } from "@mui/material";
import React from "react";

const Spinner = () => {
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        minHeight: "100vh",
        backgroundColor: "black",
        color: "#21c55d",
      }}
    >
      <CircularProgress color="inherit" />
    </Box>
  );
};

export default Spinner;
