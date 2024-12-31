import { Button, Stack, Typography } from "@mui/material";
import KeyboardBackspaceIcon from "@mui/icons-material/KeyboardBackspace";
import { readFileSync } from "node:fs";
import Link from "next/link";
import MarkdownComponent from "@/components/markdown/markdown-component";

export default async function Page({ params }: { params: { id: string } }) {
  const { id } = await params;
  const info = readFileSync(`src/_shared/post/info/${id}.json`, "utf-8");
  const parsedInfo = JSON.parse(info) as { path: string; title: string };
  const post = readFileSync(parsedInfo.path, "utf-8");

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
            {parsedInfo && parsedInfo.title}
          </Typography>
          {/* {bannerImage.src && (
            <Box
              component="img"
              src={bannerImage.src}
              sx={{
                margin: "auto",
                width: "200px",
              }}
            />
          )} */}
          {/* <Stack margin={"20px 0"}>
            <RoundedImageCard
              imageSrc={bannerImage.src}
              subtitle="aaaaaaaa"
              title="sssssssssss"
            />
          </Stack> */}
        </Stack>
        <Stack width={"100%"}>
          <MarkdownComponent content={post} />
        </Stack>
      </Stack>
    </Stack>
  );
}
