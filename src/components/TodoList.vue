<template>
  <v-text-field
    v-model="taskStore.titleTaskCreating"
    clearable
    label="Add task"
    :rules="validationInput"
    @keyup.enter="taskStore.addTask"
  />

  <ListTasks />
</template>

<script setup>
  import { onMounted } from 'vue'
  import { useTaskStore } from '@/stores/task'
  import ListTasks from './ListTasks.vue'

  const taskStore = useTaskStore()
  onMounted(() => {
    taskStore.getTasks()
  })

  const validationInput = [
    value => {
      if (!value || value.length > 2) return true
      return 'Task must be big than 2 caracteres'
    },
  ]
</script>
