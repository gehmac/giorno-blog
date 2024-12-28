
import { Box, Button, Stack, Typography } from "@mui/material";
import KeyboardBackspaceIcon from '@mui/icons-material/KeyboardBackspace';
import bannerImage from '../../../_shared/assets/article.png';


export default async function Page({ params }: { params: Promise<{ id: string }> }) {
  const { id } = (await params)
  console.log(id);


  return (
    <Stack marginTop={4} alignItems={'center'} >
      <Stack width={'70%'} alignItems={"flex-start"} >

        <Button
          sx={{ color: '#5A9BD7', borderColor: '#5A9BD7' }}
          variant="outlined"
          startIcon={<KeyboardBackspaceIcon />}>
          Voltar
        </Button>
        <Stack alignItems={'center'} width={'100%'} >
          <Box
            component="img"
            src={bannerImage.src}
            sx={{
              margin: 'auto',
              width: '250px',
            }}
          />
        </Stack>
        <Stack>
          <Typography>
            Title
          </Typography>

        </Stack>

      </Stack>
    </Stack >
  )
}
