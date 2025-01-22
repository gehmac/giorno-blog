export const styles = {
  card: {
    width: "70%",
    margin: "10px auto",
    maxHeight: "250px",
    backgroundColor: "#141b2a",
    border: "1px solid #2a3b5f",
    "&:hover": {
      boxShadow: "0 0 8px 1px #212b3f",
      transform: "scale(1.003)",
    },
  },
  imageBox: {
    width: "200px",
    padding: 2,
    height: "250px",
    display: "flex",
    alignItems: "center",
  },
  cardMedia: {
    width: "100%",
    height: "auto",
    transition: "transform 0.3s ease-in-out",
    "&:hover": {
      transform: "scale(1.05)",
    },
  },
  cardContent: {
    display: "flex",
    flexDirection: "column",
    alignItems: "flex-start",
  },
  descriptionBox: {
    maxHeight: "80px",
  },
  description: {
    color: "#d8d8d8",
    width: "100%",
    display: "-webkit-box",
    WebkitBoxOrient: "vertical",
    WebkitLineClamp: 2,
    overflow: "hidden",
    textOverflow: "ellipsis",
    fontSize: 12,
  },
  tagStack: {
    marginTop: "10px",
  },
  chip: {
    color: "#566a96",
    borderColor: "#2a3b5f",
    cursor: "pointer",
  },
  button: {
    marginTop: "20px",
    color: "#566a96",
    borderColor: "#162035",
  },
} as const;
