import dayjs from "dayjs"

import {scheduleNew} from "../../services/schedule-new.js"

import {schedulesDay} from "../schedules/load.js"

const form = document.querySelector("form")
const clientName = document.getElementById("client")
const selectedDate = document.getElementById("date")

// Current date
const currentDate = dayjs(new Date()).format("YYYY-MM-DD")

// Load the current date and set the min date
selectedDate.value = currentDate
selectedDate.min = currentDate

form.onsubmit = async (event) => {
  event.preventDefault()

  try {
    // Get name
    const name = clientName.value.trim()

    if(!name) {
      return alert("Informe o nome do cliente")
    }

    // Get the selected hour
    const hourSelected = document.querySelector(".hour-selected")

    if(!hourSelected) {
      return alert("Selecione a hora")
    }

    // Get only the hour
    const [hour] = hourSelected.innerText.split(":")

    // Put the hour on date
    const when = dayjs(selectedDate.value).add(hour, "hour")

    // New ID
    const id = new Date().getTime().toString()

    // Faz o agendamento
    await scheduleNew({
      id,
      name,
      when,
    })

    // Recarrega os agendamentos  
    await schedulesDay()

    // Limpa o input de nome do cliente
    clientName.value = ""
  } catch (error) {
    alert("Não foi possivel realizar o agendamento.")
    console.log(error)
  }
}