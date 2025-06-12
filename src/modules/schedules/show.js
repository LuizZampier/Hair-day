import dayjs from "dayjs";

// Select the sections morning, afternoon and night
const periodMorning = document.getElementById("period-morning")
const periodAfternoon = document.getElementById("period-afternoon")
const periodNight = document.getElementById("period-night")

export function schedulesShow({dailySchedules}) {
  try {
    // Clean the lists
    periodMorning.innerHTML = ""
    periodAfternoon.innerHTML = ""
    periodNight.innerHTML = ""

    // Load the schedules per period
    dailySchedules.forEach((schedule) => {
      const item = document.createElement("li")
      const time = document.createElement("strong")
      const name = document.createElement("span")

      // Add the schedule ID
      item.setAttribute("data-id", schedule.id)
      time.textContent = dayjs(schedule.when).format("HH:mm")
      name.textContent = schedule.name

      // Create the cancel icon
      const cancelIcon = document.createElement("img")
      cancelIcon.classList.add("cancel-icon")
      cancelIcon.setAttribute("src", "./src/assets/cancel.svg")
      cancelIcon.setAttribute("alt", "Cancelar")

      // Add time, name and icon
      item.append(time, name, cancelIcon)

      // Get only the time
      const hour = dayjs(schedule.when).hour()

      // Load the schedule in section (morning, afternoon and night)
      if(hour <= 12) {
        periodMorning.appendChild(item)
      } else if(hour <= 18) {
        periodAfternoon.appendChild(item)
      } else {
        periodNight.appendChild(item)
      }
    })
  } catch(error) {
    alert("Não foi possivel exibir os agendamentos")
    console.log(error)
  }
}