import { Box, Stack, Typography } from "@mui/material";
import bannerImage from "../../shared/assets/article.png";
import ArticleCard from "@/components/article-card/article-card";
import postImage from "../../shared/assets/post/30122024.png";

const articles = [
  {
    title:
      "Essa é a melhor forma que encontrei para pegar um elemento de matriz",
    description: "Tem uma truque muito legal do TypeScript: Array[number].",
    tags: ["typescript"],
    image: postImage.src,
    link: "/articles/30122024",
  },
];

const ArticlePage = () => {
  return (
    <Stack>
      <Stack
        alignItems={"center"}
        position="relative"
        textAlign="center"
        height="322px"
      >
        <Box
          component="img"
          src={bannerImage.src}
          alt="Banner"
          sx={{
            width: "250px",
            position: "absolute",
          }}
        />
        <Typography
          variant="h1"
          sx={{
            position: "absolute",
            top: "200px",
            left: "50%",
            transform: "translateX(-50%)",
            fontWeight: "bold",
            fontSize: "3rem",
            color: "white",
          }}
        >
          ARTIGOS
        </Typography>
        <Typography
          variant="h2"
          sx={{
            position: "absolute",
            marginTop: "20px",
            top: "244px",
            fontSize: "1.2rem",
            color: "gray",
          }}
        >
          Artigos de tecnologia feitos por Giorno
        </Typography>
      </Stack>
      <Stack alignItems={"center"} textAlign="center">
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
    </Stack>
  );
};

export default ArticlePage;
