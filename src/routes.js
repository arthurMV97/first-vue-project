import ListTodo from '@/components/ListTodo.vue'
import AddForm from '@/components/AddForm.vue'



const routes = [ 
    {path: '/new', component: AddForm },
    {path: '/list', component: ListTodo, props: {whatToDisplay: "all"}},
    {path: '/done', component: ListTodo, props: {whatToDisplay: "done"}},
    {path: '/todo', component: ListTodo, props: {whatToDisplay: "todo"}}];

export default routes;