<template>
  <v-app>
    <Alert v-if="alertStore.showAlert" />
    <View />
  </v-app>
</template>

<script setup>
  import Alert from '@/components/shared/Alert.vue'
  import { useAlertStore } from '@/stores/alert'

  import View from './view.vue'

  const alertStore = useAlertStore()
</script>
