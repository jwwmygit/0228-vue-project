import Vue from 'vue'
import Router from 'vue-router'
import Cart from '../pages/Cart/Cart.vue';
import Classification from '../pages/Classification/Classication.vue';
import Home from '../pages/Home/Home.vue';
import Goods from '../pages/Goods/Goods.vue';
import Personal from '../pages/Personal/Personal.vue';
import InterLayer from '../pages/InterLayer/InterLayer.vue';
import Login from '../pages/Login/Login.vue';
import HomeChildrenDetail from '../pages/Home/HomeChildrenDetail/HomeChildrenDetail.vue';
import HomeMain from '../pages/Home/HomeMain/HomeMain.vue'
Vue.use(Router);
export default new Router({
  routes: [
    {
      path: '/Home',
      component: Home,
      meta: {
        isShow: true
      },
      children:[
        {
          path:'/Home/HomeMain',
          component:HomeMain,
          meta: {
            isShow: true
          }
        },
        {
        path:'/Home/HomeChildrenDetail/:id',
        component:HomeChildrenDetail,
          meta: {
            isShow: true
          }
      },
        {
          path: '',
          redirect: '/Home/HomeMain'
        }
      ]
    },
    {
      path: '/cart',
      component: Cart,
      meta: {
        isShow: true
      }
    },
    {
      path: '/classification',
      component: Classification,
      meta: {
        isShow: true
      }
    },
    {
      path: '/personal',
      component: Personal
    },
    {
      path: '/login',
      component: Login
    },
    {
      path: '/goods',
      component: Goods,
      meta: {
        isShow: true
      }
    },
    {
      path: '/interlayer',
      component: InterLayer
    },
    {
      path: '/',
      redirect: '/interlayer'
    }
  ]
})
