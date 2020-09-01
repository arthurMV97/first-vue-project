<template>
  <div id="app">
    <MyHeader></MyHeader>

    <b-jumbotron>
    
    <template v-slot:header>
      Todo List
    </template>
    
    <template v-slot:lead>
     New features we will have to do for this project.
    </template>

    <hr class="my-4">

    <p>
      Easy to use, we create this web app just for you !
    </p>
    <Sentence></Sentence>
    <hr class="my-4">
   <router-view :key="$route.fullPath"></router-view>
    <!-- <ListTodo  @toggle="sendIdToApp"></ListTodo> -->
    <!-- <AddForm ></AddForm> -->
  </b-jumbotron>
  </div>
</template>

<script>
// import ListTodo from './ListTodo.vue'
// import AddForm from './AddForm.vue'
import Sentence from './Sentence.vue'
import MyHeader from './MyHeader.vue'

export default {
    name: 'MyJumbotron',
    components: {
      // ListTodo,
      // AddForm,
      Sentence,
      MyHeader
    },
    props: {
    list: Array,
  },
  methods: {
    sendIdToApp(id) {
      this.$emit("toggle", id)
    },
    // sendInputValue(val) {
    //   this.$emit("output", val)
    // }
    }
}

</script>

<style scoped>
#app {
  margin: 0 auto;
}
</style>