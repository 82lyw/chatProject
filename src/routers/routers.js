import HelloWorld from '../components/HelloWorld'
import Login from '../components/Login'
import Chat from '../components/Chat'

import Matching from '../components/pages/Matching'
import MatchRunout from '../components/pages/MatchRunout'
import Countless from '../components/pages/Countless'

export const routes = [
    {path:'/',component: Login},
    {path:'/chat',component: Chat},
    {path:'/helloWorld',component:HelloWorld},
    {path:'/matching',component:Matching},
    {path:'/matchRunout',component:MatchRunout},
    {path:'/countless',component:Countless},
    {path:'*',redirect:'/'}
]