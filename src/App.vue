<template>
  <div id="app">
    <LayoutViewPage msg="layoutViewPage" />
  </div>
</template>

<script>
import LayoutViewPage from "./components/LayoutViewPage.vue";

export default {
  name: "App",
  components: {
    LayoutViewPage,
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
</style>
