import { Box, Button, Stack, Typography } from "@mui/material";
import KeyboardBackspaceIcon from "@mui/icons-material/KeyboardBackspace";
import bannerImage from "../../../_shared/assets/article.png";
import Markdown from "react-markdown";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { materialOceanic } from "react-syntax-highlighter/dist/esm/styles/prism";
import { readFile } from "fs/promises";

export default async function Page({ params }: { params: { id: string } }) {
  const { id } = params;
  const info = await readFile(`src/_shared/post/info/${id}.json`, "utf-8");
  const parsedInfo = JSON.parse(info) as { path: string; title: string };
  const post = await readFile(parsedInfo.path, "utf-8");

  return (
    <Stack marginTop={4} alignItems={"center"}>
      <Stack width={"70%"} alignItems={"flex-start"}>
        <Button
          sx={{ color: "#5A9BD7", borderColor: "#5A9BD7" }}
          variant="text"
          startIcon={<KeyboardBackspaceIcon />}
        >
          Voltar
        </Button>
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
          {bannerImage.src && (
            <Box
              component="img"
              src={bannerImage.src}
              sx={{
                margin: "auto",
                width: "200px",
              }}
            />
          )}
        </Stack>
        <Stack>
          <Markdown
            components={{
              p: ({ ...props }) => (
                <p style={{ color: "#f5f7fc" }} {...props} />
              ),
              h1: ({ ...props }) => (
                <h1 style={{ color: "#ffffff" }} {...props} />
              ),
              h2: ({ ...props }) => (
                <h2 style={{ color: "#d1d5db" }} {...props} />
              ),
              h3: ({ ...props }) => (
                <h3 style={{ color: "#a1a1aa" }} {...props} />
              ),
              a: ({ ...props }) => (
                <a style={{ color: "#3b82f6" }} {...props} />
              ),
              strong: ({ ...props }) => (
                <strong style={{ color: "#ffffff" }} {...props} />
              ),
              em: ({ ...props }) => (
                <em style={{ color: "#d1d5db" }} {...props} />
              ),
              blockquote: ({ ...props }) => (
                <blockquote
                  style={{
                    color: "#9ca3af",
                    borderLeft: "4px solid #3b82f6",
                    paddingLeft: "1em",
                  }}
                  {...props}
                />
              ),
              code: ({ inline, className, ...props }) => {
                const match = /language-(\w+)/.exec(className || "");
                return !inline && match ? (
                  <SyntaxHighlighter
                    style={materialOceanic}
                    language={match[1]}
                    PreTag="div"
                    {...props}
                  >
                    {String(props.children).replace(/\n$/, "")}
                  </SyntaxHighlighter>
                ) : (
                  <code
                    style={{
                      backgroundColor: "#1f2937",
                      color: "#f5f7fc",
                      padding: "0.2em 0.4em",
                      borderRadius: "4px",
                    }}
                    {...props}
                  />
                );
              },
              ul: ({ ...props }) => (
                <ul
                  style={{
                    color: "#f5f7fc",
                    paddingLeft: "20px",
                  }}
                  {...props}
                />
              ),
              li: ({ ...props }) => (
                <li
                  style={{
                    color: "#f5f7fc",
                    marginBottom: "5px",
                  }}
                  {...props}
                />
              ),
            }}
          >
            {post}
          </Markdown>
        </Stack>
      </Stack>
    </Stack>
  );
}
