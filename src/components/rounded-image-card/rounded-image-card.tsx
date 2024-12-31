import React from "react";
import { Box, Typography, Stack } from "@mui/material";

interface RoundedImageCardProps {
  imageSrc: string;
  title: string;
  subtitle: string;
}

const RoundedImageCard: React.FC<RoundedImageCardProps> = ({
  imageSrc,
  title,
  subtitle,
}) => {
  return (
    <Stack direction="row" alignItems="center" spacing={2}>
      <Box
        component="img"
        src={imageSrc}
        sx={{
          width: 80,
          height: 80,
          borderRadius: "50%",
          border: "1px solid #acabad",
          objectFit: "cover",
        }}
      />
      <Stack>
        <Typography variant="h6" sx={{ color: "#fff" }}>
          {title}
        </Typography>
        <Typography variant="subtitle1" sx={{ color: "#ccc" }}>
          {subtitle}
        </Typography>
      </Stack>
    </Stack>
  );
};

export default RoundedImageCard;
