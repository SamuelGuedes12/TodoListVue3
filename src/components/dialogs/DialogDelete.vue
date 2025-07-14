<template>
  <div class="text-center pa-4">
    <v-dialog
      v-model="taskStore.showDialogDelete"
      max-width="400"
      persistent
    >
      <v-card
        title="Do you want delete this task same?"
      >
        <template #actions>
          <v-spacer />

          <v-btn
            color="red"
            variant="elevated"

            @click="taskStore.toggleDelete()"
          >
            No
          </v-btn>

          <v-btn
            color="green"
            variant="outlined"
            @click="taskStore.deleteTask()"
          >
            Yes
          </v-btn>

        </template>
      </v-card>
    </v-dialog>
  </div>
</template>

<script setup>
  import { useTaskStore } from '@/stores/task'

  const taskStore = useTaskStore()

</script>
