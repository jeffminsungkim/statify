<template>
  <div>
    <the-side-navbar></the-side-navbar>
    <h1>{{ msg }}</h1>
  </div>
</template>

<script>
import TheSideNavbar from '@/components/TheSideNavbar'
export default {
  components: {
    TheSideNavbar
  },
  name: 'Index',
  data () {
    return {
      msg: 'Hello, App Log Page :)'
    }
  }
}
</script>
