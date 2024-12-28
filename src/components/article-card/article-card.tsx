import React from 'react';
import { Card, CardContent, CardMedia, Typography, Chip, Stack, Box, Button } from '@mui/material';
import { ArticleCardProps } from './article-card-types';
import Link from 'next/link';

const ArticleCard: React.FC<ArticleCardProps> = ({ title, description, tags, image, link }) => {
  return (
    <Card
      sx={{
        width: '70%',
        margin: '10px auto',
        maxHeight: '250px',
        backgroundColor: '#141b2a',
        border: '1px solid #2a3b5f',
        '&:hover': {
          boxShadow: '0 0 8px 1px #212b3f',
          transform: 'scale(1.003)',
        },
      }}
    >
      <Stack
        direction={{ xs: 'column', md: 'row' }}
        spacing={2}
        alignItems="center"
      >
        <Box width={'200px'} padding={2} height={'250px'} display="flex" alignItems="center">
          <CardMedia
            component="img"
            sx={{
              width: '100%',
              height: 'auto',
              transition: 'transform 0.3s ease-in-out',
              '&:hover': {
                transform: 'scale(1.05)',
              },
            }}
            image={image}
            alt="Article image"
          />
        </Box>
        <CardContent sx={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start' }}>
          <Typography
            margin={'10px 0'}
            variant="h5"
            align='left'
            sx={{
              color: 'white',
              overflow: 'hidden',
              textOverflow: 'ellipsis',
              width: '100%',
              fontWeight: 'bold',
            }}
          >
            {title}
          </Typography>
          <Box maxHeight={'80px'} >
            <Typography
              variant="subtitle1"
              align='left'
              maxWidth={'500px'}
              color="text.secondary"
              fontSize={12}
              sx={{
                color: '#d8d8d8',
                width: '100%',
                display: '-webkit-box',
                WebkitBoxOrient: 'vertical',
                WebkitLineClamp: 2,
                overflow: 'hidden',
                textOverflow: 'ellipsis',
              }}
            >
              {description}
            </Typography>
          </Box>
          <Stack direction="row" spacing={1} sx={{ marginTop: '10px' }}>
            {tags.map((tag, index) => (
              <Chip variant="outlined" key={index} label={tag} sx={{ color: '#566a96', borderColor: '#2a3b5f', cursor: 'pointer' }} />
            ))}
          </Stack>
          <Button component={Link} href={link} variant="outlined" sx={{ marginTop: '20px', color: '#566a96', borderColor: '#162035' }}>
            Ler mais
          </Button>
        </CardContent>
      </Stack>
    </Card >
  );
};

export default ArticleCard;