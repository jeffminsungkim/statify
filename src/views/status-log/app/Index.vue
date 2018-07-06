<template>
  <div class="sidenav-wrapper">
    <the-side-navbar :isActive="isActive"></the-side-navbar>
    <the-content></the-content>
    <button @click="isActive = !isActive">activate/deactivate</button>
  </div>
</template>

<script>
import TheSideNavbar from '@/components/TheSideNavbar'
import TheContent from '@/views/status-log/components/TheContent'

export default {
  components: {
    TheSideNavbar,
    TheContent
  },
  data () {
    return {
      isActive: false
    }
  },
  name: 'Index'
}
</script>

<style scoped>
.sidenav-wrapper {
  display: flex;
  width: 100%;
  align-items: stretch;
}
</style>
