import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/views/Home'
import Index from '@/views/index/index'
import Login from '@/views/Login'
import ProductDetail from '@/views/productDetail/productDetail'
import ProductComment from '@/components/comment'
import VideoContent from '../components/videoContent'

Vue.use(Router)

// 解决ElementUI导航栏中的vue-router在3.0版本以上重复点菜单报错问题
const originalPush = Router.prototype.push
Router.prototype.push = function push(location) {
  return originalPush.call(this, location).catch(err => err)
}

export default new Router({
  routes: [
    {
      path: '/home',
      name: 'Home',
      redirect:'/home/video',
      meta: {
        title: 'home',
        isLogin:false
      },
      component: Home,
      children: [
        {
          path: '/home/index',
          name: 'Index',
          meta: {
            title: '首页',
            isLogin:true
          },
          component: Index
        },
        {
          path: '/home/detail',
          name: 'ProductDetail',
          meta: {
            title: '详情',
            isLogin:true
          },
          component: ProductDetail
        },
        {
          path:'/home/comment',
          name:'Comment',
          meta:{
            title:'评论',
            isLogin:true
          },
          component:ProductComment
        },
        {
          path:'/home/video',
          name:'VideoContent',
          meta:{
            title:'视频播放',
            isLogin:false
          },
          component:VideoContent
        }
      ]
    },
    {
      path: '/login',
      name: 'Login',
      meta: {
        title: '登录',
        isLogin:false
      },
      component: Login
    },
    {
      path: '/',
      name: 'Home',
      meta: {
        title: '登录',
        isLogin:false
      },
      component: Home
    }
  ]
})
