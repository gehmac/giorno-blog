import { Box } from "@mui/material";
import IntroBanner from "./intro-banner";
import AboutMe from "./about-me";

export default function HomeSection() {
  return (
    <Box
      sx={{
        width: "100%",
        py: { xs: 3, md: 6 },
        minHeight: "100vh",
      }}
    >
      <Box
        sx={{
          maxWidth: 1100,
          mx: "auto",
          px: { xs: 2, md: 4 },
        }}
      >
        <IntroBanner />
        <AboutMe />
      </Box>
    </Box>
  );
}