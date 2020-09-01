<template>
     
    <p v-if="e.todo" @click="checkedTodo">
        <b-icon icon="check2-circle"></b-icon>
        {{e.name}}
        </p>
    
    <p v-else class="clickedP" @click="checkedTodo">
        <b-icon icon="check-circle-fill"></b-icon>
        {{e.name}}
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
            this.$emit("stateChange")
          
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