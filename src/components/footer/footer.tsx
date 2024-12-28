import { Box, Typography } from '@mui/material';
import { useMemo } from 'react';

export default function Footer() {
  const currentYear = useMemo(() => new Date().getFullYear(), []);
  return (
    <Box component="footer" sx={{
      py: 3,
      x: 2,
      mt: 'auto',
      backgroundColor: 'rgb(9, 14, 25)',
      bottom: 0,
      width: '100%'
    }}>
      <Typography variant="body1">
        Giorno Blog - Todos os direitos reservados © {currentYear}
      </Typography>
    </Box>
  );
}