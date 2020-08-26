<template>
    <p v-if="todo.todo" @click="checkedTodo">{{todo.name}}</p>
    <p v-else class="clickedP" @click="checkedTodo">{{todo.name}}</p>
</template>



<script>
export default {
    name: 'SingleTodo',
    props: {
    todo: Object
  },
    methods: {
        checkedTodo() {
            this.$emit("toggle", {id: this.todo.id})
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