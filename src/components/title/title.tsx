import { Typography } from "@mui/material";

interface TitleProps {
  title: string;
  align?: "left" | "center" | "right" | "justify" | "inherit";
}

export const Title: React.FC<TitleProps> = ({ title, align = "left" }) => {
  return (
    <Typography variant="h5" align={align} sx={style}>
      {title}
    </Typography>
  );
};

const style = {
  margin: "10px 0",
  color: "white",
  overflow: "hidden",
  textOverflow: "ellipsis",
  width: "100%",
  fontWeight: "bold",
  fontFamily: "serif",
};