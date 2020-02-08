<template>
  <div id="app">
    <headerComponent />

    <bodyComponent />
    <router-view />
  </div>
</template>

<script>
import headerComponent from "@/components/headerComponent";
import bodyComponent from "@/components/bodyComponent";

export default {
  name: "app",
  components: { headerComponent, bodyComponent }
};
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  text-align: left;
  color: #2c3e50;
  margin-top: 20px;
}
</style>
