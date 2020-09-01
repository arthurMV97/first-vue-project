<template>

<ul>
        <li v-for="e in list" :key="e.id">
           
            <SingleTodo v-bind:e="e" @stateChange="updateFct"></SingleTodo> 
        </li>
    </ul>    



</template>


<script>
import SingleTodo from './SingleTodo.vue'
import axios from 'axios';

export default {
    name: 'ListTodo',
    components: {
        SingleTodo
    }, 
    data() {
      return {
          list: []
        }
  },
    props: {
    whatToDisplay: String
  },
  methods : {
    //   sendIdToJumbo(id) {
         
    //       this.$emit("toggle", id)
          
    //   },
   async updateFct() {
        let dbList = await axios.get('http://localhost:3000/todo')
   let myList = await dbList.data;
   this.list = myList
   }
  },
  async mounted() {
      console.log('hello')
    let dbList = await axios.get('http://localhost:3000/todo')
    let myList = await dbList.data;
    console.log(myList)
      if (this.whatToDisplay === "all") {
        this.list = myList
      }
      else if (this.whatToDisplay === "done") {
        this.list = myList.filter(e => e.todo === false)
      } 
      else {
        this.list = myList.filter(e => e.todo === true)

      }
     console.log(this.list)
  }
}
</script>

<style scoped>

li {
    list-style: none;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: baseline;
    align-content: center;
    
}

li > p {
    margin-left: 15px;
    
}


</style>