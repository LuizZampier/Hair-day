import { apiConfig } from "./api-config.js";

export async function scheduleNew({id, name, when}) {
  try {
    // Do a requisiton to sent the schedules data
    await fetch(`${apiConfig.baseURL}/schedules`, {
      method: "POST",
      headers : {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({id, name, when}),
    })

    // Show the schedule message
    alert("Agendamento realizado com sucesso.")
  } catch(error) {
    console.log(error)
    alert("Não foi possivel concluir o agendamento.")
  }
}