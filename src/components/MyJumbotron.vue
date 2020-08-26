<template>
  <div id="app">
    <b-jumbotron>
    <template v-slot:header>Todo List</template>

    <template v-slot:lead>
     New features we will have to do for this project.
    </template>

    <hr class="my-4">

    <p>
      Easy to use, we create this web app just for you !
    </p>

    <hr class="my-4">
  
    <ListTodo v-bind:list="list" @toggle="sendIdToApp"></ListTodo>
  </b-jumbotron>
  </div>
</template>

<script>
import ListTodo from './ListTodo.vue'

export default {
    name: 'MyJumbotron',
    components: {
      ListTodo
    },
    props: {
    list: Array,
  },
  methods: {
    sendIdToApp(id) {
      this.$emit("toggle", id)
    }
    }
}

</script>