<template>
  <div class="text-center pa-4">
    <v-dialog
      v-model="taskStore.showDialogTaskField"
      max-width="600"
      min-width="400"
      persistent
    >
      <!-- <template #activator="{ props: activatorProps }">
        <v-btn v-bind="activatorProps">
          Open Dialog
        </v-btn>
      </template> -->

      <v-card>
        <v-card-title class="text-h5">Edit Task</v-card-title>
        <v-text-field v-model="props.task.title" clearable label="Title" />
        <v-text-field v-model="props.task.description" clearable label="Description" />
        <template #actions>
          <v-spacer />
          <v-btn
            color="green"
            variant="elevated"
            @click="taskStore.updateTask"
          >
            Confirm
          </v-btn>
        </template>
      </v-card>
    </v-dialog>
  </div>
</template>

<script setup>
  import { defineProps } from 'vue'
  import { useTaskStore } from '@/stores/task'

  const taskStore = useTaskStore()

  const props = defineProps({
    task: Object,
  })
</script>
