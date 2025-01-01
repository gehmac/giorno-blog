import React from "react";
import { Box, Typography } from "@mui/material";
import brokenImage from "../../shared/assets/broken.png";

const UnderConstruction: React.FC = () => {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        height: "100vh",
        textAlign: "center",
        backgroundColor: "#141b2a",
        color: "#cccbff",
        padding: "20px",
      }}
    >
      <Box
        component="img"
        src={brokenImage.src}
        alt="Página em Construção"
        sx={{
          width: "220px",
          height: "auto",
          marginBottom: "20px",
        }}
      />
      <Typography
        variant="h2"
        sx={{ marginBottom: "20px", fontWeight: "bold" }}
        fontSize={36}
      >
        Página em Construção
      </Typography>
      <Typography fontSize={19} variant="h5">
        Estamos trabalhando para trazer novidades em breve. Fique ligado!
      </Typography>
    </Box>
  );
};

export default UnderConstruction;
