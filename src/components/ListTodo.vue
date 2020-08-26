<template>

<ul>
        <li v-for="todo in list" :key="todo.id">
           
            <SingleTodo v-bind:todo="todo" @toggle="sendIdToJumbo"></SingleTodo> 
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
    props: {
    list: Array,
  },
  methods : {
      sendIdToJumbo(id) {
         
          this.$emit("toggle", id)
          
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