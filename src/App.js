import React from "react";
import { Switch,Route,Redirect} from 'react-router-dom'
// adminRoutes登录后页面路由
import { adminRoutes } from "./routes";
//登录后页面布局
import  Frame  from "./components/Frame/Index";
import {isLogined} from './untils/auth'

import './App.css'
function App() {
  return (isLogined()?
    <Frame>
      <Switch>
        {adminRoutes.map(route=>{
          // exact是否是完全匹配路由
          if(route.children){
            console.log("route.children",route.children)
            {route.children.map(subRoute=>{
              return (
                <Route key={subRoute.path} path={subRoute.path} exact={subRoute.exact} render={routeProps=>{
                  return <route.component {...routeProps}/>
                }} />
              )
            })}
          }else{
            return (
              <Route key={route.path} path={route.path} exact={route.exact} render={routeProps=>{
                return <route.component {...routeProps}/>
  
              }} />
            )
          }
         
        })}
        {/* <Redirect to={adminRoutes[0].path} from='/admin'></Redirect> */}
        {/* 找不到404 */}
        {/* <Redirect to='/404'></Redirect> */}
      </Switch>
    </Frame>
    :
    <Redirect to='/login'></Redirect>
  );
}

export default App;
