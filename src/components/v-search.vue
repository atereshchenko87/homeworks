<template>
  <div class="v-search">
    <input id="search" v-model="searchStr" v-on:input="search">
  </div>
</template>

<script>
export default{
  name: "v-search",
  data(){
    return{
      searchStr: ''
    }
  },
  methods:{
    search() {
      this.$emit('search', this.searchStr)
    }
  }
}
</script>

<style scoped>
#search {
  width: 400px;
  border: 1px solid lightgray;
  border-radius: 10px;
  line-height: 2em;
}
</style>
