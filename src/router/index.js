import Home from '../Views/Home'
import My from '../Views/My'
import Login from '../Views/Login'
import Find from '../Views/Find'
import FindMusic from '../Views/FindMusic'

export default [
    {
        path:'/',
        component:Home,
        exact:true,
        auth:false
    },
    {
        path:'/My',
        component:My,
        exact:true,
        auth:true
    },
    {
        path:'/Login',
        component:Login,
        exact:true,
        auth:false
    },
    {
        path:'/Find',
        component:Find,
        exact:true,
        auth:false
    },
    {
        path:'/FindMusic',
        component:FindMusic,
        exact:true,
        auth:false
    }
]