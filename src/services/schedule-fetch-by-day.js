import dayjs from "dayjs";
import { apiConfig } from "./api-config.js";

export async function scheduleFetchByDay({date}) {
  try {
    // Do a requisition
    const response = await fetch(`${apiConfig.baseURL}/schedules`)

    // Convert to JSON
    const data = await response.json()

    // Filter the schedules to a selected day
    const dailySchedules = data.filter((schedule) => dayjs(date).isSame(schedule.when, "day"))

    return dailySchedules
  } catch(error) {
    console.log(error)
    alert("Não foi possivel buscar os agendamentos do dia selecionado.")
  }
}