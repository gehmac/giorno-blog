import { Typography } from "@mui/material";

interface TitleProps {
  title: string;
}

export const Title: React.FC<TitleProps> = ({ title }) => {
  return (
    <Typography variant="h5" align="left" sx={style}>
      {title}
    </Typography>
  );
}; 

const style =  {
  margin: "10px 0",
  color: "white",
  overflow: "hidden",
  textOverflow: "ellipsis",
  width: "100%",
  fontWeight: "bold",
  fontFamily: "serif",
}