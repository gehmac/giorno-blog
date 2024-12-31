import { FC } from "react";
import Markdown from "react-markdown";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { materialOceanic } from "react-syntax-highlighter/dist/esm/styles/prism";
import { MarkdownComponentProps } from "./markdown-component-type";
import remarkGfm from "remark-gfm";

const MarkdownComponent: FC<MarkdownComponentProps> = ({ content }) => {
  return (
    <Markdown
      remarkPlugins={[remarkGfm]}
      components={{
        p: ({ ...props }) => <p style={{ color: "#f5f7fc" }} {...props} />,
        h1: ({ ...props }) => <h1 style={{ color: "#ffffff" }} {...props} />,
        h2: ({ ...props }) => <h2 style={{ color: "#d1d5db" }} {...props} />,
        h3: ({ ...props }) => <h3 style={{ color: "#a1a1aa" }} {...props} />,
        a: ({ ...props }) => <a style={{ color: "#3b82f6" }} {...props} />,
        strong: ({ ...props }) => (
          <strong style={{ color: "#ffffff" }} {...props} />
        ),
        em: ({ ...props }) => <em style={{ color: "#d1d5db" }} {...props} />,
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
        table: ({ ...props }) => (
          <table
            style={{
              width: "100%",
              borderCollapse: "collapse",
              marginBottom: "1em",
            }}
            {...props}
          />
        ),
        thead: ({ ...props }) => (
          <thead
            style={{
              backgroundColor: "#374151",
              color: "#f5f7fc",
            }}
            {...props}
          />
        ),
        tbody: ({ ...props }) => (
          <tbody
            style={{
              backgroundColor: "#1f2937",
              color: "#f5f7fc",
            }}
            {...props}
          />
        ),
        tr: ({ ...props }) => (
          <tr
            style={{
              borderBottom: "1px solid #374151",
            }}
            {...props}
          />
        ),
        th: ({ ...props }) => (
          <th
            style={{
              padding: "0.5em",
              textAlign: "left",
            }}
            {...props}
          />
        ),
        td: ({ ...props }) => (
          <td
            style={{
              padding: "0.5em",
            }}
            {...props}
          />
        ),
      }}
    >
      {content}
    </Markdown>
  );
};

export default MarkdownComponent;
