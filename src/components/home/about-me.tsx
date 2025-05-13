import { Box, Typography } from "@mui/material";

export default function AboutMe() {
  return (
    <Box
      sx={{
        borderRadius: "16px",
        p: { xs: 3, md: 5 },
        maxWidth: 900,
        mx: "auto",
        textAlign: "center",
      }}
    >
      <Typography
        variant="h4"
        sx={{
          color: "#bdbdbd",
          fontWeight: 700,
          mb: 2,
        }}
      >
        Sobre mim
      </Typography>
      <Typography
        variant="body1"
        sx={{
          color: "#bdbdbd",
          fontSize: { xs: "0.98rem", md: "1.05rem" },
          fontWeight: 400,
        }}
      >
        Desenvolvedor Back-end especializado na construção de APIs seguras, escaláveis e com foco em performance.
        Tenho sólida experiência em projetos com arquitetura de microsserviços, utilizando tecnologias como Node.js, NestJS, TypeScript, MongoDB e GCP.
        Sou apaixonado por boas práticas como TDD, Clean Code e Clean Architecture, e estou sempre em busca de soluções que realmente gerem valor para pessoas e negócios.
      </Typography>
    </Box>
  );
}