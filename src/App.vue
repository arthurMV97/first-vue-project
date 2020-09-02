<template>
<div>
  <MyJumbotron  @toggle="changeIdValue" @output="addTask"></MyJumbotron>
</div>

</template>



<script>
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import MyJumbotron from './components/MyJumbotron.vue'
import axios from 'axios';


export default {
  name: 'App',
  components: {
   MyJumbotron
  },
  proprs: {
    whatToDisplay: String
  },
   data() {
     return {
      
     }
  },
  methods: {
    async getData() {
      let dbList = await axios.get('http://localhost:3000/todo')
      let myList =  dbList.data;
      this.$store.dispatch('getDataFromApp', myList)
    },
    changeIdValue(id) {
      // let liste = this.list
      this.list[id.id].todo = !this.list[id.id].todo
      
    },
    addTask(val) {
      if (val) {
    this.list.push({
        id: this.list.length,
        name: val,
        todo: true
      })
      }
      else {
        window.alert("Please, enter a task!")
      }
    }
  },
  beforeMount() {
    this.getData()
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
