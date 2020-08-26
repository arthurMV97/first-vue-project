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
    <Sentence v-bind:list="list"></Sentence>
    <hr class="my-4">
  
    <ListTodo v-bind:list="list" @toggle="sendIdToApp"></ListTodo>
    <AddForm @output="sendInputValue"></AddForm>
  </b-jumbotron>
  </div>
</template>

<script>
import ListTodo from './ListTodo.vue'
import AddForm from './AddForm.vue'
import Sentence from './Sentence.vue'

export default {
    name: 'MyJumbotron',
    components: {
      ListTodo,
      AddForm,
      Sentence
    },
    props: {
    list: Array,
  },
  methods: {
    sendIdToApp(id) {
      this.$emit("toggle", id)
    },
    sendInputValue(val) {
      this.$emit("output", val)
    }
    }
}

</script>