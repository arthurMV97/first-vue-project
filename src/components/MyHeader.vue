<template>
    <b-navbar toggleable type="dark" variant="dark">
    <b-navbar-brand>Todo List</b-navbar-brand>

    <b-navbar-brand><router-link to="/new">New</router-link></b-navbar-brand>
    <b-navbar-brand><router-link to="/todo">ToDo</router-link> </b-navbar-brand>
    <b-navbar-brand><router-link to="/done">Done</router-link></b-navbar-brand>
    <b-navbar-brand><router-link to="/list">List</router-link></b-navbar-brand>

   
    </b-navbar>
</template>
<script>
export default {
    name: 'MyHeader',
    props: {  
    }
}
</script>