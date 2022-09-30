import { useTheme } from "@mui/material/styles";
import PropTypes from "prop-types";

const Button = ({ children }) => {
  const theme = useTheme();
  return (
    <a
      target={"_blank"}
      href="#"
      style={{
        backgroundColor: theme.palette.primary.main,
        padding: theme.spacing(1, 2),
        textDecoration: "none",
        color: theme.palette.common.white,
        borderRadius: theme.spacing(2),
      }}
    >
      {children}
    </a>
  );
};
export default Button;

Button.propTypes = {
  children: PropTypes.node,
};
