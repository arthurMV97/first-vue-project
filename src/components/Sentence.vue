<template>
    <div>
    
    <p v-if="ifChecked() === 0" id="dark-green">
        <b-icon icon="emoji-sunglasses"></b-icon>
        Congratulation !! You finished all the {{list.length}} tasks
        <b-icon icon="emoji-sunglasses"></b-icon>
        </p>

    <p v-else-if="ifChecked() === list.length" id="dark-red">
        <b-icon icon="emoji-angry"></b-icon>
        It's time to start working you have {{ifChecked()}} tasks to do !!
        <b-icon icon="emoji-angry"></b-icon>
    </p>

    <p v-else-if="ifChecked() >= (list.length/2)" id="light-red" >
        <b-icon icon="emoji-smile-upside-down"></b-icon>
        Continue that way and you will finish soon, still have {{ifChecked()}}/{{list.length}} tasks
        <b-icon icon="emoji-smile-upside-down"></b-icon>
        </p>

    <p v-else id="light-green">
        <b-icon icon="emoji-laughing"></b-icon>
         Good !! you made half or more {{list.length-ifChecked()}}/{{list.length}} tasks
         <b-icon icon="emoji-laughing"></b-icon>
         </p>
    
    
    </div>
</template>

<script>
import axios from 'axios';

export default {
    name: 'Sentence',
    props: {
      
  },
  data() {
      return {
          list: Array,
          newList: Array
          }
  },
    methods: { 
        ifChecked() {
            
            return this.newList.length
        }
    }, async munted() {
        console.log('hhh');
            let dbList = await axios.get('http://localhost:3000/todo')
            let myList = await dbList.data;
            this.list = myList
            this.newList = this.list.filter(e => e.todo === true)
            
    }
}
</script>

<style scoped>
#dark-green {
    color: darkgreen
}

#light-green {
    color: rgb(45, 196, 85);
}

#dark-red {
    color: red;
}

#light-red {
    color: orange;
}
</style>
