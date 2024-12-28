import Link from 'next/link';
import { AppBar, Toolbar, Button, Box, Stack } from '@mui/material';
import logo from '@/_shared/assets/logo-hor-branc.png';

export default function Header() {
  return (
    <AppBar sx={{
      backgroundColor: 'rgb(15, 22, 36)',
      borderBottom: '1px solid rgb(25, 28, 36)',
      boxShadow: '0 4px 2px -2px rgba(255, 255, 255, 0.2)'
    }} position="static">
      <Toolbar sx={{ display: 'flex', justifyContent: 'space-between' }}>
        <Stack sx={{ cursor: 'pointer' }} onClick={() => window.location.href = '/'} >
          <Box
            component="img"
            src={logo.src}
            alt="Giorno Blog Logo"
            sx={{
              height: 22,
              cursor: 'pointer'
            }}
            onClick={() => window.location.href = '/'}
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