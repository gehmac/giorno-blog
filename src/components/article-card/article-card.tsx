"use client";
import React from "react";
import {
  Card,
  CardContent,
  CardMedia,
  Typography,
  Chip,
  Stack,
  Box,
  Button,
  useTheme,
  useMediaQuery,
} from "@mui/material";
import { ArticleCardProps } from "./article-card-types";
import Link from "next/link";
import { styles } from "./article-card.styles";
import { Title } from "../title/title";
import NavigateNextSharpIcon from '@mui/icons-material/NavigateNextSharp';

const ArticleCard: React.FC<ArticleCardProps> = ({
  title,
  description,
  tags,
  image,
  link,
}) => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));

  return (
    <Card sx={styles.card}>
      <Stack
        direction={{ xs: "column", md: "row" }}
        spacing={2}
        alignItems="center"
      >
        <Box sx={styles.imageBox}>
          <CardMedia
            component="img"
            sx={styles.cardMedia}
            image={image}
            alt="Article image"
          />
        </Box>
        <CardContent sx={styles.cardContent}>
          <Title title={title} align={isMobile ? "center" : "left"} />
          <Box sx={styles.descriptionBox}>
            <Typography
              variant="subtitle1"
              align="left"
              maxWidth={"500px"}
              color="text.secondary"
              sx={styles.description}
            >
              {description}
            </Typography>
          </Box>
          <Stack direction="row" spacing={1} sx={styles.tagStack}>
            {tags.map((tag, index) => (
              <Chip
                variant="outlined"
                key={index}
                label={tag}
                sx={styles.chip}
              />
            ))}
          </Stack>
          <Button
            component={Link}
            href={link}
            variant="outlined"
            sx={styles.button}
            endIcon={<NavigateNextSharpIcon />}
          >
            Ler mais
          </Button>
        </CardContent>
      </Stack>
    </Card>
  );
};

export default ArticleCard;
