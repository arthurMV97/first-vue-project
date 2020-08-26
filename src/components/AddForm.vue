<template>
<div >
 <b-input-group prepend="New Task" class="mb-2 mr-sm-2 mb-sm-0">
<b-form-input id="inline-form-input" placeholder="Todo Name" type="text" v-model="inputValue"></b-form-input>
  <b-button variant="outline-dark" @click="addTodo">Add</b-button>
</b-input-group>

</div>
</template>

<script>
export default {
    name: 'AddForm',
    props: {
  },
  data() {
      return {inputValue: ""}
  },
    methods: { 
        addTodo() {
            this.$emit("output", this.inputValue)
            console.log(this.inputValue)
        }
    }
}
</script>

<style scoped>

</style>