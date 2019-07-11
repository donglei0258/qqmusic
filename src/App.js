import React from 'react';

import './App.css';
import { Menu, Icon, Button} from 'antd';
import {
  BrowserRouter as Router,
  Route,
  NavLink
} from 'react-router-dom'
import GuardRouter from './guardCom/GuardRouter'
import router from './router'

class App extends React.Component {
  state = {
    collapsed: false,
  };
  toggleCollapsed = () => {
    this.setState({
      collapsed: !this.state.collapsed,
    });
  };
  goFind(){
    console.log(1)
    this.props.history.push('/Find')
  }
  render(){
    return (
      <div style={{ width: 256 }}>
          <Router>
        <Button type="primary" onClick={this.toggleCollapsed} style={{ marginBottom: 16 }}>
          <Icon type={this.state.collapsed ? 'menu-unfold' : 'menu-fold'} />
        </Button>
        <Menu
          defaultSelectedKeys={['1']}
          defaultOpenKeys={['sub1']}
          mode="inline"
          theme="dark"
          inlineCollapsed={this.state.collapsed}
        >
          <Menu.Item key="1">
            <Icon type="pie-chart" />
            <NavLink to='/' exact >主页</NavLink>
          </Menu.Item>
          <Menu.Item key="2">
            <Icon type="desktop" />
            <NavLink to='/Find' >发现</NavLink>
          </Menu.Item>
          <Menu.Item key="3">
            <Icon type="inbox" />
            <NavLink to='/My' >我的</NavLink>
          </Menu.Item>  
          <Menu.Item key="4">
            <Icon type="pie-chart" />
            <NavLink to='/Login' exact >登录</NavLink>
          </Menu.Item>      
        
        </Menu>
      
          {
            router.map((v,i)=>{
              return(
                <Route key={i} path={v.path} exact={v.exact} render={()=><GuardRouter {...v}></GuardRouter>} ></Route>
              )
            })
          }

        </Router>
      </div>
    );
  
  }
 
}

export default App;
