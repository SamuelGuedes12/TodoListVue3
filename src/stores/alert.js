// Utilities
import { defineStore } from 'pinia'

export const useAlertStore = defineStore('alert', {
  state: () => ({
    showAlert: false,
    type: '',
    text: '',
  }),
  actions: { notifyAlert () {
    this.showAlert = true
    setTimeout(() => {
      this.showAlert = false
    }, 5000)
  },
  notifyAlertCreated () {
    this.type = 'success'
    this.text = 'Task created success!!'
    this.notifyAlert()
  },
  notifyAlertDeleted () {
    this.type = 'warning'
    this.text = 'Task deleted success!!'
    this.notifyAlert()
  },
  notifyAlertUpdated () {
    this.type = 'info'
    this.text = 'Task updated success!!'
    this.notifyAlert()
  },

  },
},
)
