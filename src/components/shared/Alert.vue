<template>
  <div class="alert-notification">

    <v-alert
      class="animate__animated animate__pulse"
      closable
      :title="alertStore.text"
      :type="alertStore.type"
    />

  </div>
</template>

<script setup>
  import { useAlertStore } from '@/stores/alert'
  import 'animate.css'
  const alertStore = useAlertStore()

</script>

<style scoped>

.alert-notification {
 position: fixed;
 z-index: 1;
 bottom: 50px;
 width: 100%;
 padding: 0 35% 0 35%;
}
</style>
