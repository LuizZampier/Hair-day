import { scheduleFetchByDay } from "../../services/schedule-fetch-by-day.js"
import {schedulesShow} from "./show.js"
import {hoursLoad} from "../form/hours-load"

// Select the current date
const selectedDate = document.getElementById("date")

export async function schedulesDay() {
  const date = selectedDate.value

  // Busca na API os agendamentos
  const dailySchedules = await scheduleFetchByDay({date})

  // Show the schedules
  schedulesShow({dailySchedules})
  
  // Load free hours
  hoursLoad({date, dailySchedules})
}