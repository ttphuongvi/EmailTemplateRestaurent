import TableCell from "../../atoms/TableCell";
import { styled } from "@mui/material/styles";

const TableCellStyles = styled(TableCell)(({ theme }) => ({
  borderBottom: "none",
  padding: theme.spacing(5),
}));

export default TableCellStyles;
