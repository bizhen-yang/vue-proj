import Vue from 'vue'
import Router from 'vue-router'
import Table from '@/components/Table'
import Head from '@/components/Head'
import test from '@/components/test'


Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      redirect: '/head'
    },
    {
      path: '/head',
      redirect: '/table',
      name: 'Head',
      component: Head,
      children:[
        {
          path: '/table',
          name: 'table',
          component: Table,
        },
        {
          path: '/test',
          name: 'test',
          component: test,
        }
      ]
    }
  ]
})