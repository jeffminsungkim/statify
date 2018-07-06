<template>
  <div class="content-wrapper">
    <h1>{{ msg }}</h1>
  </div>
</template>

<script>
export default {
  name: 'Content',
  data () {
    return {
      msg: 'Hello, App Log Page :)'
    }
  }
}
</script>

<style scoped>
.content-wrapper {
  width: 100%;
  padding: 20px;
  transition: all 0.3s;
}
</style>
