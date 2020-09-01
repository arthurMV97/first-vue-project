<template>
<div >
    <form>
 <b-input-group prepend="New Task" class="mb-2 mr-sm-2 mb-sm-0">
<b-form-input id="inline-form-input" placeholder="Todo Name" type="text" v-model="inputValue" required></b-form-input>
  <b-button variant="outline-dark" @click="postData" type="submit">Add</b-button>
</b-input-group>
    </form>

</div>
</template>

<script>
import axios from 'axios';

export default {
    name: 'AddForm',
    props: {
  },
  data() {
      return {
          inputValue: ""
        }
  },
    methods: { 
        // addTodo() {
        //     this.$emit("output", this.inputValue)
        //     console.log(this.inputValue)
        //     this.inputValue = ""
        // },
       async postData() {
        
        
            let dbList = await axios.get('http://localhost:3000/todo')
            let myList = dbList.data;
            console.log(myList)
            if (this.inputValue.length === 0) {
                window.alert("Please, enter a task!")
            }
            else {
                await axios.post('http://localhost:3000/todo', {
                    name: this.inputValue,
                    id: myList.length,
                    createdAt: (new Date()).toString(),
                    todo: true
            })
            }
            
        }

    }
}
</script>

<style scoped>

</style>