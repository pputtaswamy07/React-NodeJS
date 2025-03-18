import { SxProps, Theme } from "@mui/material";

interface ReservationPageStyles {
  pageContainer: SxProps<Theme>;
  headerContainer: SxProps<Theme>;
  formPaper: SxProps<Theme>;
  submitButton: SxProps<Theme>;
}

export const styles: ReservationPageStyles = {
  pageContainer: {
    py: 4,
  },
  headerContainer: {
    py: 2,
  },
  formPaper: {
    p: 4,
  },
  submitButton: {
    p: 4,
  },
};
