<template>
  <div id="app">
    <HelloWorld/>
  </div>
</template>

<script>
import HelloWorld from "./components/index.vue";

export default {
  name: "app",
  components: {
    HelloWorld
  }
};
</script>

<style>
html,
body,
#app {
  width: 100%;
  height: 100%;
  overflow: hidden;
}
</style>
