import { scheduleFetchByDay } from "../../services/schedule-new.js";
import { hoursLoad } from "../form/hours-load";

const selectedDate = document.getElementById("date");

export async function schedulesDay() {
  const date = selectedDate.value;

  const dailySchedules = await scheduleFetchByDay({date})

  hoursLoad({ date });
}
