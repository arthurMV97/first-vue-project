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

    <ul id="myFirstList">
        <li v-for="item in myFirstList" :key="item.name"> {{item.name}} </li>
    </ul> 
   
  </b-jumbotron>
  </div>
</template>

<script>
export default {
    name: 'MyJumbotron',
    props: {
    myFirstList: Array,
    msg: String
  }
}

</script>