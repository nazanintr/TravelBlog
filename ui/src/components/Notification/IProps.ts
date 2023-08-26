import { AlertColor } from "@mui/material";

export interface IProps {
  message: string;
  open: boolean;
  severity?: AlertColor
}
