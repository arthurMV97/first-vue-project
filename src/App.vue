<template>
<div>
  <MyJumbotron v-bind:list="list" @toggle="changeIdValue"></MyJumbotron>
</div>

</template>



<script>
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import MyJumbotron from './components/MyJumbotron.vue'

export default {
  name: 'App',
  components: {
   MyJumbotron
  },
   data() {
     return {
      list: [
        {id: 0, name: "Ecrire le sujet", todo: true},
        {id: 1, name: "Faire le sujet", todo: true},
        {id: 2, name: "Vendre le sujet", todo: true},
        {id: 3, name: "Partir en vaccances", todo: true}
    ]
     }
  },
  methods: {
    changeIdValue(id) {
      // let liste = this.list
      this.list[id.id].todo = !this.list[id.id].todo
      
    }
  }
}


</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
