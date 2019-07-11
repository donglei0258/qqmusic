import React from 'react'
import {
    withRouter
} from 'react-router-dom'

class Login extends React.Component{
    constructor(){
        super()
        this.state={
            userName:localStorage.userName
        }
    }
    login(){
        if(this.refs.userName.value==='donglei'){
            if(this.refs.passWord.value==='123456'){
                localStorage.userName=this.refs.userName.value
                this.props.history.push('/My')
            }else{
                alert('密码错误')
            }
        }else{
            alert('账号错误')
        }
    }
    out(){
        localStorage.clear('userName')
        this.setState({
            userName:localStorage.userName
        })
    }
    render(){
        if(!this.state.userName){
            return(
                <div>
                    <p>账号：<input type='text' ref='userName' ></input></p>
                   <p>密码：<input type='passWord'  ref='passWord' ></input></p> 
                   <input type='button' value='登录' onClick={this.login.bind(this)} ></input>
                </div>
            )
        }else{
            return(
                <input type='button' value='退出登录' onClick={this.out.bind(this)}></input>
            )
        }
        
    }
}
export default withRouter(Login)