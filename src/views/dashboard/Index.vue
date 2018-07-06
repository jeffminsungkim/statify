<template>
  <div>
    <the-navbar></the-navbar>
    <the-header></the-header>

    <div class="button-container">
       <the-app-log></the-app-log>
      <the-device-log></the-device-log>
    </div>
  </div>
</template>

<script>
import TheNavbar from '@/components/TheNavbar.vue'
import TheHeader from './components/TheHeader.vue'
import TheAppLog from './components/buttons/TheAppLog.vue'
import TheDeviceLog from './components/buttons/TheDeviceLog.vue'

export default {
  components: {
    TheNavbar,
    TheHeader,
    TheAppLog,
    TheDeviceLog
  }
}
</script>

<style scoped>
.button-container {
  margin: 50px;
  text-align: center;
}
</style>
