import React from "react";
import {
  Box,
  Button,
  Container,
  Grid,
  Paper,
  TextField,
  Typography,
  Alert,
  Snackbar,
} from "@mui/material";
import { styles } from "./ReservationPage.styles";
import { createReservation } from "../../services/reservationService";
import { useFormReducer, FormState } from "../../hooks/useFormReducer";
import { useNotification } from "../../hooks/useNotification";

const ReservationPage: React.FC = () => {
  const [formData, dispatch] = useFormReducer();
  const [isSubmitting, setIsSubmitting] = React.useState(false);
  const { notification, showSuccess, showError, closeNotification } =
    useNotification();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    dispatch({
      type: "FIELD_CHANGE",
      field: e.target.name,
      value: e.target.value,
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // Form validation
    if (Object.values(formData).some((val) => !val)) {
      showError("All fields are required");
      return;
    }

    setIsSubmitting(true);

    try {
      await createReservation(formData);
      showSuccess("Reservation created successfully!");
      dispatch({ type: "RESET_FORM" });
    } catch (err) {
      showError(
        err instanceof Error ? err.message : "Failed to create reservation"
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  // Field configurations
  const textFields = [
    { name: "name", label: "Full Name", type: "text" },
    { name: "email", label: "Email", type: "email" },
    { name: "phone", label: "Phone number", type: "text" },
    { name: "number of seats", label: "Number of Seats", type: "number" },
  ];

  return (
    <Container maxWidth="sm" sx={styles.pageContainer}>
      <Box sx={styles.headerContainer}>
        <Typography variant="h4">Make a reservation</Typography>
        <Typography variant="subtitle1">
          Reserve your table at Jasmine
        </Typography>
      </Box>

      <Paper elevation={3} sx={styles.formPaper}>
        <form onSubmit={handleSubmit}>
          <Grid container spacing={3}>
            {textFields.map((field) => (
              <Grid item xs={12} key={field.name}>
                <TextField
                  fullWidth
                  name={field.name}
                  label={field.label}
                  type={field.type}
                  value={formData[field.name as keyof FormState]}
                  onChange={handleChange}
                  required
                />
              </Grid>
            ))}

            <Grid item xs={6}>
              <TextField
                fullWidth
                label="Date"
                name="date"
                type="date"
                InputLabelProps={{ shrink: true }}
                value={formData.date}
                onChange={handleChange}
                required
              />
            </Grid>
            <Grid item xs={6}>
              <TextField
                fullWidth
                label="Time"
                name="time"
                type="time"
                InputLabelProps={{ shrink: true }}
                value={formData.time}
                onChange={handleChange}
                required
              />
            </Grid>

            <Grid item xs={12}>
              <Button
                type="submit"
                variant="contained"
                color="primary"
                size="large"
                fullWidth
                sx={styles.submitButton}
                disabled={isSubmitting}
              >
                {isSubmitting ? "Submitting..." : "Reserve Table"}
              </Button>
            </Grid>
          </Grid>
        </form>
      </Paper>

      <Snackbar
        open={notification.open}
        autoHideDuration={6000}
        onClose={closeNotification}
      >
        <Alert
          onClose={closeNotification}
          severity={notification.type}
          sx={{ width: "100%" }}
        >
          {notification.message}
        </Alert>
      </Snackbar>
    </Container>
  );
};

export default ReservationPage;
