<script setup>
</script>

<template>
  <div class="main">
    <div class="col">
      <h2>Hello world.</h2>
    </div>
    <div class="col">
      <a class="btn" target="_blank" href="https://ginolabiste.github.io/todolist-vue/">Todo List Sample</a> 
    </div>
    <div class="col">
      <a  class="btn" target="_blank" href="https://ginolabiste.github.io/weight-tracker-vue/">Weight Tracker Sample</a>
    </div>
    <div class="col">
      <small>by: Gino Labiste</small>
    </div>
    
  </div>
</template>

<style scoped>
  .main{
    text-align: start;
  }
  .btn{
    padding: 15px;
    color: #fff;
    background-color: #e63946;
  }
  .btn:hover{
    background-color: #1d3557;
  }
  .col{
    padding: auto;
    display: grid;
  }
  .col:last-child{
    margin-top: 10px;
  }
</style>
