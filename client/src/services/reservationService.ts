import axios from "axios";

const API_BASE_URL = "http://localhost:5000/api";

interface ReservationData {
  name: string;
  email: string;
  phone: string;
}

export const createReservation = async (
  reservationData: ReservationData
): Promise<unknown> => {
  try {
    console.log("Sending reservation data:", reservationData); // Debugging

    const response = await axios.post(
      `${API_BASE_URL}/reservation`,
      reservationData
    );

    console.log("Reservation response:", response.data); // Debugging
    return response.data;
  } catch (error) {
    if (axios.isAxiosError(error)) {
      console.error("Axios error:", error.response?.data || error.message);
      throw new Error(
        error.response?.data?.message || "Failed to create reservation"
      );
    }
    console.error("Unexpected error:", error);
    throw new Error("An unexpected error occurred");
  }
};
