import { Box, Typography, Card, CardContent, Grid } from '@mui/material';

export default function Home() {
  const articles = [
    {
      title: 'Introdução ao React',
      description: 'Aprenda os conceitos básicos do React e como começar a construir aplicações web interativas.',
    },
    {
      title: 'Guia Completo de JavaScript',
      description: 'Um guia abrangente sobre JavaScript, cobrindo desde os fundamentos até técnicas avançadas.',
    },
    {
      title: 'Estilos com CSS',
      description: 'Descubra como estilizar suas páginas web de maneira eficaz usando CSS.',
    },
    {
      title: 'Introdução ao TypeScript',
      description: 'Saiba como o TypeScript pode ajudar a melhorar a qualidade do seu código JavaScript.',
    },
    {
      title: 'Desenvolvimento Backend com Node.js',
      description: 'Aprenda a construir servidores e APIs robustas usando Node.js.',
    },
  ];

  return (
    <Box sx={{ flexGrow: 1, p: 3 }}>
      <Typography variant="h4" gutterBottom>
        Bem-vindo ao Giorno Blog
      </Typography>
      <Typography variant="body1" gutterBottom>
        Este é um blog sobre desenvolvimento web e tecnologia. Confira nossos artigos mais recentes:
      </Typography>
      <Grid container spacing={3}>
        {articles.map((article, index) => (
          <Grid item xs={12} sm={6} md={4} key={index}>
            <Card>
              <CardContent>
                <Typography variant="h5" component="div">
                  {article.title}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  {article.description}
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}