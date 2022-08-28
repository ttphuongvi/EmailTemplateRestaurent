import Box from "../../atoms/Box";
import {styled} from "@mui/material/styles";

const StyledBox = styled(Box)(({theme})=>({
    padding: theme.spacing(5),
}))
export default StyledBox;