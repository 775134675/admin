import React from 'react';
import ReactDOM from 'react-dom';
import {HashRouter as Router,Switch,Route, Redirect} from 'react-router-dom'
import 'antd/dist/antd.css'
import './index.css';
// mainRoutes 主路由
import {mainRoutes} from "./routes"
import App from './App';
import reportWebVitals from './reportWebVitals';
import Login from './pages/Login';

ReactDOM.render(
  <Router>
    <Switch>
      {/* 匹配/admin开头的路由全部走app组件 */}
      <Route path='/admin' render={routeProps=><App {...routeProps}/>}></Route>
      {mainRoutes.map(route => {
        return <Route key={route.path} {...route}></Route>
      })}
      {/* 重定向 */}
      <Redirect to='/admin' from='/'></Redirect>
      <Redirect to='/404'></Redirect>
    </Switch>
  </Router>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
