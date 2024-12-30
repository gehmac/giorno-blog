import { Box, Stack, Typography } from '@mui/material';
import bannerImage from '../../_shared/assets/article.png';
import ArticleCard from '@/components/article-card/article-card';


const articles = [
  {
    title: 'Essa é a melhor forma que encontrei para pegar um elemento de matriz',
    description: 'Tem uma truque muito legal do TypeScript: Array[number].',
    tags: ['typescript'],
    image: bannerImage.src,
    link: '/articles/30122024'
  },
  {
    title: 'Guia Completo de JavaScript',
    description: 'Um guia abrangente sobre JavaScript, cobrindo desde o básico até conceitos avançados.',
    tags: ['JavaScript', 'ES6', 'Programming'],
    image: bannerImage.src,
    link: '/articles/name-02'
  },
  {
    title: 'Estilizando com MUI',
    description: 'Descubra como usar o Material-UI para criar interfaces de usuário bonitas e responsivas.Descubra como usar o Material-UI para criar interfaces de usuário bonitas e responsivas.',
    tags: ['MUI', 'CSS', 'Design'],
    image: bannerImage.src,
    link: '/articles/name-03'
  },
];

const ArticlePage = () => {
  return (
    <Stack >

      <Stack alignItems={'center'} position="relative" textAlign="center" height="322px">
        <Box
          component="img"
          src={bannerImage.src}
          alt="Banner"
          sx={{
            width: '250px',
            position: 'absolute',
          }}
        />
        <Typography
          variant="h1"
          sx={{
            position: 'absolute',
            top: '200px',

            left: '50%',
            transform: 'translateX(-50%)',
            fontWeight: 'bold',
            fontSize: '3rem',
            color: 'white',
          }}
        >
          ARTIGOS
        </Typography>
        <Typography
          variant="h2"
          sx={{
            position: 'absolute',
            marginTop: '20px',
            top: '244px',
            fontSize: '1.2rem',
            color: 'gray',
          }}
        >
          Artigos de tecnologia feitos por Giorno
        </Typography>
      </Stack>
      <Stack alignItems={'center'} textAlign="center" >
        {articles.map((article, index) => (
          <ArticleCard
            key={index}
            title={article.title}
            description={article.description}
            tags={article.tags}
            image={article.image}
            link={article.link}
          />
        ))}
      </Stack>
    </ Stack>
  );
};

export default ArticlePage;