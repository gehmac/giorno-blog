import { useEffect, useState } from "react";
import { styled } from "@mui/material/styles";

const curiosities = [
  "Node.js utiliza o motor V8 do Google Chrome para executar JavaScript no servidor.",
  "O npm, gerenciador de pacotes do Node.js, é o maior repositório de software do mundo.",
  "Node.js é orientado a eventos e não bloqueante, ideal para aplicações em tempo real.",
  "O primeiro lançamento do Node.js foi em 2009, criado por Ryan Dahl.",
  "Node.js permite criar servidores web sem depender de Apache ou Nginx.",
  "O nome 'Node' vem da ideia de pequenos nós conectados em uma rede.",
  "Node.js é multiplataforma e roda em Windows, Linux e macOS.",
];

const Container = styled("div")(() => ({
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
  minHeight: "60vh",
  width: "100%",
  background: "transparent",
}));

const PenguinImage = styled("img")(({ theme }) => ({
  width: 160,
  height: "auto",
  [theme.breakpoints.down("sm")]: {
    width: 200,
  },
}));

const CuriosityText = styled("p")(({ theme }) => ({
  marginTop: "1rem",
  textAlign: "center",
  fontSize: "1.1rem",
  color: "rgb(235, 232, 232)",
  fontWeight: 600,
  marginBottom: "1rem",
  [theme.breakpoints.down("sm")]: {
    fontSize: "1rem",
    padding: "0.75rem 1rem",
  },
}));

export default function LoadingSearch() {
  const [curiosityIndex, setCuriosityIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCuriosityIndex((prev) => (prev + 1) % curiosities.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <Container>
      <PenguinImage
        src="/assets/asset-search.gif"
        alt="Loading"
      />
      <CuriosityText>
        {curiosities[curiosityIndex]}
      </CuriosityText>
    </Container>
  );
}