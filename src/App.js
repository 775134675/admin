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
          if(route.path){
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
