<template>
  <div>
    <header class="head-part">
      <h1>{{tittle}}</h1>
      <button type="button" class="close">&times;</button>
    </header>
  </div>
</template>

<script>
//import body from './body.vue';
export default {
  name: "headerComponent",
  data() {
    return {
      tittle: "Hello this is header"
    };
  }
};
</script>

<style scoped>
.test {
  overflow: hidden;
  background-color: #f1f1f1;
  padding: 10px 5px;
}

.close {
  background-color: #44688c;
  color: rgb(246, 246, 253);
  float: right;
  font-size: 25px;
  width: 40px;
  height: 40px;
  border-radius: 50px;
  margin: auto;
  border: 3px solid black;
}
.head-part {
  display: grid;
  grid-template-columns: 90% 10%;
  font-size: 13px;
  border: 2px solid;
}

.head-part > h1 {
  padding-left: 6%;
}
</style>