import {schedulesDay} from "./load.js"
import {scheduleCancel} from "../../services/schedule-cancel.js"

const periods = document.querySelectorAll(".period")

// Click event to each list (morning, afternoon and night)
periods.forEach((period) => {
  period.addEventListener("click", async (event) =>{
    if(event.target.classList.contains("cancel-icon")) {
      // Get the li of element created
      const item = event.target.closest("li")

      // Get the schedule id to remove
      const {id} = item.dataset
      
      // Confirm that the id is selected
      if(id) {
        // Confirm if the user want to cancel
        const isConfirm = confirm("Tem certeza que deseja cancelar esse agendamento?")
      

        if (isConfirm) {
          // Do a API requisiton to cancel a schedule
          await scheduleCancel({id})

          // Reload the schedules
          schedulesDay()
        }
      }
    }
  })
})