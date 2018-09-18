import Users from './components/Users.vue'
import Form from './components/Form.vue'
import Summary from './components/FormSummary'

export default [
  {path:'/users', component: Users},
  {path:'/', component: Form},
  {path:'/summary', component: Summary},
]
