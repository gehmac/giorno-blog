import Link from "next/link";
import { AppBar, Toolbar, Button, Box, Stack } from "@mui/material";
import logo from "@/shared/assets/logo-hor-branc.png";
import { useEffect, useState } from "react";

export default function Header() {

  const [isFixed, setIsFixed] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsFixed(window.scrollY > 0);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <AppBar
      sx={{
        backgroundColor: "rgb(15, 22, 36)",
        borderBottom: "1px solid rgb(25, 28, 36)",
        boxShadow: "0 4px 2px -2px rgb(95, 9, 129)",
        transition: "box-shadow 0.3s, background-color 0.3s, border-bottom 0.3s, top 0.3s",
      }}
      position={isFixed ? "fixed" : "static"}
    >
      <Toolbar sx={{ display: "flex", justifyContent: "space-between" }}>
        <Stack
          sx={{ cursor: "pointer" }}
          onClick={() => (window.location.href = "/")}
        >
          <Box
            component="img"
            src={logo.src}
            alt="Giorno Blog Logo"
            sx={{
              height: 22,
              cursor: "pointer",
            }}
            onClick={() => (window.location.href = "/")}
          />
        </Stack>
        <Stack direction="row" spacing={2}>
          <Button color="inherit" component={Link} href="/articles">
            Artigos
          </Button>
          <Button color="inherit" component={Link} href="/about">
            Sobre
          </Button>
        </Stack>
      </Toolbar>
    </AppBar>
  );
}
