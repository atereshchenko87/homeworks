<template>
  <p class="noData"><slot></slot></p>
</template>

<script>
export default{
  name: "v-error-msg",
  data(){
    return{}
  },
  methods:{
  }
}
</script>

<style scoped>
.noData{
  align-self: center;
  margin-bottom: 10px;
  color: #ccc;
}
</style>
