import { useTheme } from "@mui/material/styles";

const Button = (props) => {
  const theme = useTheme();
  return (
    <a
      href="#"
      variant="container"
      style={{
        backgroundColor: theme.palette.primary.main,
        padding: theme.spacing(1, 2),
        textDecoration: "none",
        color: theme.palette.common.white,
        borderRadius: theme.spacing(2),
      }}
    >
      {props.children}
    </a>
  );
};
export default Button;
