<template>
     
    <p v-if="e.todo">
        <b-icon icon="check2-circle"  @click="checkedTodo"></b-icon>
        {{e.name}}
         <b-icon @click="deleteItem" icon="trash2"></b-icon>
        </p>
    
    <p v-else class="clickedP" >
        <b-icon icon="check-circle-fill" @click="checkedTodo"></b-icon>
        {{e.name}}
        <b-icon @click="deleteItem" icon="trash2-fill"></b-icon>
        </p>
</template>



<script>
import axios from 'axios';

export default {
    name: 'SingleTodo',
    props: {
    e: Object
  },
    methods: {
        async checkedTodo() {
            console.log(this.e.id)
            await axios.put(`http://localhost:3000/todo/${this.e.id}`)
            this.$store.dispatch('updateData',this.e.id)
          
        }, 
        async deleteItem() {
            console.log(this.e.id)
            await axios.delete(`http://localhost:3000/todo/${this.e.id}`)
           
            this.$store.dispatch('deleteData',this.e.id)

    

        }
    }
}
</script>

<style scoped>
p {cursor: pointer;}
.clickedP {
    text-decoration: line-through;
}
</style>