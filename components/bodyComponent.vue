<template>
  <div class="body-top">
    <h1><p>{{msg}}</p></h1>
  </div>
</template>


<script>
export default {
  name: "bodyComponent",
  data() {
    return {
      msg: "Hello your are in body section."
    };
  }
};
</script>

<style scoped>
.body-top {
  height: 76%;
  border: 2px solid;
  margin-top: 8px;
  padding: 5px;
  text-align: left;
  font-size: 20px;
}
</style>