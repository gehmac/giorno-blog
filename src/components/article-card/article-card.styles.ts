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
    "@media (max-width:900px)": { // tablet
      width: "90%",
      maxHeight: "none",
      margin: "10px auto",
      padding: 0,
    },
    "@media (max-width:600px)": { // mobile
      width: "98%",
      maxHeight: "none",
      margin: "10px auto",
      padding: 0,
    },
  },
  imageBox: {
    width: "200px",
    padding: 2,
    height: "250px",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    "@media (max-width:900px)": {
      width: "160px",
      height: "200px",
    },
    "@media (max-width:600px)": {
      width: "100%",
      height: "180px",
      padding: 0,
      marginBottom: "10px",
    },
  },
  cardMedia: {
    width: "80%",
    height: "auto",
    transition: "transform 0.3s ease-in-out",
    "&:hover": {
      transform: "scale(1.05)",
    },
    "@media (max-width:900px)": {
      width: "100%",
      height: "100%",
      objectFit: "contain",
    },
    "@media (max-width:600px)": {
      width: "100%",
      height: "100%",
      marginTop: "20px",
      objectFit: "contain",
    },
  },
  cardContent: {
    display: "flex",
    flexDirection: "column",
    alignItems: "flex-start",
    "@media (max-width:900px)": {
      alignItems: "center",
      textAlign: "center",
      padding: "0 10px",
    },
    "@media (max-width:600px)": {
      alignItems: "center",
      textAlign: "center",
      padding: "0 10px",
    },
  },
  descriptionBox: {
    maxHeight: "80px",
    "@media (max-width:900px)": {
      maxHeight: "none",
    },
    "@media (max-width:600px)": {
      maxHeight: "none",
    },
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
    "@media (max-width:900px)": {
      fontSize: 13,
      WebkitLineClamp: 3,
    },
    "@media (max-width:600px)": {
      fontSize: 14,
      WebkitLineClamp: 3,
    },
  },
  tagStack: {
    marginTop: "10px",
    "@media (max-width:900px)": {
      justifyContent: "center",
      width: "100%",
    },
    "@media (max-width:600px)": {
      justifyContent: "center",
      width: "100%",
    },
  },
  chip: {
    color: "#566a96",
    borderColor: "#2a3b5f",
    cursor: "pointer",
  },
  button: {
    marginTop: "20px",
    color: "rgb(22, 208, 255)",
    borderColor: "rgb(0, 73, 116)",
    "@media (max-width:900px)": {
      width: "70%",
      margin: "20px auto 0 auto",
    },
    "@media (max-width:600px)": {
      width: "80%",
      margin: "20px auto 0 auto",
    },
  },
} as const;
