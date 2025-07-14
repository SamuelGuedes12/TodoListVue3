<template>

  <v-list
    v-model:selected="settingsSelection"
    lines="three"
    select-strategy="leaf"
  >
    <v-list-subheader class="text-h6">Tasks:</v-list-subheader>

    <v-list-item
      v-for="taskList, index in taskStore.tasks"
      :key="index"
      :title="taskList.title"
      :value="index"
      @click="taskStore.toggleDoneTask(index)"
    >
      <template #prepend="{ select }">
        <v-list-item-action start>
          <v-checkbox-btn :model-value="taskList.done" @update:model-value="select" />
        </v-list-item-action>
      </template>

      <template #append>
        <v-menu>
          <template #activator="{ props }">
            <v-btn
              color="grey-lighten"
              icon="mdi-dots-vertical"
              variant="text"
              v-bind="props"
            />
          </template>
          <v-list>
            <v-list-item
              value="1"
              @click="taskStore.toggleEdit(index)"
            >
              <v-list-item-title>Edit</v-list-item-title>
            </v-list-item>
            <v-list-item
              value="2"
              @click="taskStore.toggleDelete(index)"
            >
              <v-list-item-title>Delete</v-list-item-title>
            </v-list-item>
          </v-list>
        </v-menu>
      </template>

    </v-list-item>
  </v-list>
  <dialog-task-fields
    :task="taskStore.tasks[taskStore.indexTaskSelected]"
  />
  <DialogDelete />
</template>

<script setup>
  import { ref } from 'vue'
  import { useTaskStore } from '@/stores/task'
  import DialogDelete from './dialogs/DialogDelete.vue'
  import DialogTaskFields from './dialogs/DialogTaskFields.vue'

  const taskStore = useTaskStore()

  const settingsSelection = ref([])
</script>
