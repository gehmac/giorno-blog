'use client'
import { Button, Stack, Typography } from "@mui/material";
import KeyboardBackspaceIcon from "@mui/icons-material/KeyboardBackspace";
import Link from "next/link";
import MarkdownComponent from "@/components/markdown/markdown-component";
import { useEffect, useState } from "react";
import { Post } from "@/service/post-type";
import PostService from "@/service/post-request";
import { useParams } from "next/navigation";
import LoadingSearch from "@/components/loadings/loading-search";

export default function Page() {
  const params = useParams()
  const [postInfo, setPostInfo] = useState<undefined | Post>();
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<undefined | string>();

  useEffect(() => {
    if (params.slug) {
      PostService.getPostInfo(String(params.slug))
        .then((info) => {
          setPostInfo(info);
          setLoading(false);
        })
        .catch((err) => {
          console.error('Failed to fetch post info:', err);
          setError('Failed to load the post information.');
          setLoading(false);
        });
    }
  }, [params.slug]);

  if (loading) return <LoadingSearch />;
  if (error) return <div>Error: {error}</div>;
  return (
    <Stack marginTop={4} alignItems={"center"}>
      <Stack width={"70%"} alignItems={"flex-start"}>
        <Link href="/articles" passHref>
          <Button
            sx={{ color: "#5A9BD7", borderColor: "#5A9BD7" }}
            variant="text"
            startIcon={<KeyboardBackspaceIcon />}
          >
            Voltar
          </Button>
        </Link>
        <Stack alignItems={"center"} width={"100%"}>
          <Typography
            margin={"10px 0"}
            variant="h4"
            align="left"
            sx={{
              color: "white",
              overflow: "hidden",
              textOverflow: "ellipsis",
              fontWeight: "bold",
              fontFamily: "serif",
            }}
          >
            {postInfo?.title}
          </Typography>
        </Stack>
        <Stack width={"100%"}>
          {postInfo && <MarkdownComponent content={postInfo.body} />}
        </Stack>
      </Stack>
    </Stack>
  );
}
