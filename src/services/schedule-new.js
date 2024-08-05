import { apiConfig } from "./api-config.js";

export async function scheduleNew({ id, name, when }) {
  try {
    await fetch(`${apiConfig.baseURL}/schedules`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ id, name, when }),
    });
  } catch (error) {
    console.log(error);
    alert("Não foi possível agendar. Tente novamente mais tarde.");
  }
}

export async function scheduleFetchByDay({date}) {
    try {
        const response = await fetch(`${apiConfig.baseURL}/schedules`)

        const data =  await response.json()

        const dailySchedules =  data.filter((schedule) => dayjs(date).isSame(schedule.when, "day"))

        return dailySchedules
    } catch (error) {
        console.log(error);
        alert("Não foi possível buscar. Tente novamente mais tarde.");
    }
}