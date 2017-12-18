import React from 'react'
import { render } from 'react-dom'
import { Router, Route, hashHistory,IndexRoute} from 'react-router'
import App from './modules/App'
import About from './modules/About'
import Repos from './modules/Repos'
import Repo from './modules/Repo'
import Home from './modules/Home'


render((
    <Router history={hashHistory}>
        <Route path="/" component={App}>

            {/* add it here, as a child of `/` */}
            {/* 下面没有指定path路径，这事因为Home模块会作为'/'的子路由，只要父路由被匹配上，这个也会展现*/}
            <IndexRoute component={Home}/>

            <Route path="/repos" component={Repos}>
                <Route path="/repos/:userName/:repoName" component={Repo}/>
            </Route>
            <Route path="/about" component={About}/>
        </Route>
    </Router>
), document.getElementById('app'))
