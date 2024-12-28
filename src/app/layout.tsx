'use client';
import { theme } from "@/_shared/theme";
import Footer from "@/components/footer/footer";
import Header from "@/components/header/header";
import { Box, Container, CssBaseline, ThemeProvider } from "@mui/material";


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
        <ThemeProvider theme={theme}>
          <CssBaseline />
          <Header />
          <Box component="main" sx={{ flex: 1, display: 'flex', flexDirection: 'column', backgroundColor: 'rgb(20, 27, 42)', marginTop: '64px' }}>
            <Container sx={{ flex: 1, display: 'flex', flexDirection: 'column', mb: 4 }}>
              {children}
            </Container>
          </Box>
          <Footer />
        </ThemeProvider>
      </body>
    </html >
  );
}
