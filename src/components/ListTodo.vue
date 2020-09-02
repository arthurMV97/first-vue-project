<template>

<ul>
        <li v-for="e in dataFct" :key="e.id">
           
            <SingleTodo v-bind:e="e" ></SingleTodo> 
        </li>
    </ul>    



</template>


<script>
import SingleTodo from './SingleTodo.vue'



export default {
    name: 'ListTodo',
    components: {
        SingleTodo
    }, 
    data() {
      return {
          // list: []
        }
  },
    props: {
    whatToDisplay: String
  },
  methods : {

  },
  computed: {
    dataFct() 
      {
        // console.log(this.whatToDisplay)
     return this.$store.getters.allTask(this.whatToDisplay)
    }
    
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