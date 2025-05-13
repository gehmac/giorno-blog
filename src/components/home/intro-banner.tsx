import { Box, Typography, Avatar, Stack, Button } from "@mui/material";

export default function IntroBanner() {
  return (
    <Stack
      direction={{ xs: "column", md: "row" }}
      alignItems="center"
      justifyContent="space-between"
      spacing={{ xs: 6, md: 4 }}
      sx={{
        mb: { xs: 6, md: 8 },
        mt: { xs: 2, md: 6 },
      }}
    >
      <Box sx={{ flex: 1 }}>
        <Box sx={{ mb: 2 }}>
          <Typography variant="h3" component="h1" sx={{ color: "#fff", fontWeight: 700 }}>
            Olá, eu sou o
          </Typography>
          <Typography
            component="span"
            sx={{
              display: "block",
              fontSize: { xs: "2rem", md: "2.5rem" },
              fontWeight: 700,
              color: "primary.main",
              mb: 1,
            }}
          >
            {"Geovanni :)"}
          </Typography>
          <Typography variant="h6" sx={{ color: "#bdbdbd", mb: 2 }}>
            Desenvolvedor Back-End | NestJS | MongoDB | TypeScript | GCP
          </Typography>
        </Box>
        <Stack direction={{ xs: "column", sm: "row" }} spacing={2} sx={{ mb: 2 }}>
          <Button
            variant="contained"
            color="primary"
            href="/assets/cv/cv-geovanni.pdf"
            download
            sx={{
              fontWeight: 600,
              px: 4,
              py: 1.5,
              borderRadius: "8px",
              fontSize: "1rem",
            }}
          >
            Download CV
          </Button>
          <Button
            variant="outlined"
            color="primary"
            href="mailto:gmarcoscardoso@gmail.com"
            target="_blank"
            sx={{
              fontWeight: 600,
              px: 4,
              py: 1.5,
              borderRadius: "8px",
              fontSize: "1rem",
              color: "#fff",
              borderColor: "primary.main",
              "&:hover": {
                background: "primary.main",
                color: "#fff",
              },
            }}
          >
            Entrar em contato
          </Button>
        </Stack>
      </Box>
      <Box
        sx={{
          flex: 1,
          display: "flex",
          justifyContent: { xs: "center", md: "flex-end" },
        }}
      >
        <a
          href="https://github.com/gehmac"
          target="_blank"
          rel="noopener noreferrer"
          style={{ textDecoration: "none" }}
        >
          <Avatar
            alt="Geovanni"
            src="/assets/my.jpg"
            sx={{
              width: { xs: 180, md: 220 },
              height: { xs: 180, md: 220 },
              boxShadow: 4,
              border: "6px solid #fff",
              transition: "transform 0.2s",
              "&:hover": {
                transform: "scale(1.04)",
              },
            }}
          />
        </a>
      </Box>
    </Stack>
  );
}