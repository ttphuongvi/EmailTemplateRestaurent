import AtomButton from "../../atoms/Button";
import { alpha, styled } from "@mui/material/styles";

const StylesButton = styled(AtomButton)(({ theme }) => ({
  backgroundColor: theme.palette.primary.main,
  color: theme.palette.text.darkContent,
  textTransform: "none",
  borderRadius: theme.spacing(3),
  fontWeight: theme.typography.body1.fontWeight,
  "&:hover": {
    backgroundColor: alpha(theme.palette.primary.main, 0.8),
  },
}));

const Button = (props) => {
  return <StylesButton variant="container">{props.children}</StylesButton>;
};
export default Button;
