import React from 'react'
import {
    connect
} from 'react-redux'
import axios from 'axios'
import {GET_MUSIC_TOP} from '../store/acitonType/musicTop'
class Find extends React.Component{
    render(){
        return(
            <div>
                {
                    this.props.musicTopReduxcer.map((v,i)=>{
                        return(
                            
                                <div key={v.id}>
                                <h2>{v.name}---{v.singer[0].name}</h2>
                                <span>{v.time_public}</span>
                            </div>
                            
                        )
                    })
                }
            </div>
        )
    }
    componentWillMount(){
        this.props.getTopList()
        
    }
    componentDidMount(){
        // console.log(this.props,1)
    }
}

function mapStateToProps({musicTopReduxcer}){
    return{
        musicTopReduxcer
    }

}
function mapDispatchToProps(dispatch){
    // 
    return{
        getTopList(){
            dispatch((dispatch)=>{
                axios.get('/music/cgi-bin/musicu.fcg?-=getUCGI8229022662013956&g_tk=5381&loginUin=0&hostUin=0&format=json&inCharset=utf8&outCharset=utf-8&notice=0&platform=yqq.json&needNewCode=0&data=%7B%22detail%22%3A%7B%22module%22%3A%22musicToplist.ToplistInfoServer%22%2C%22method%22%3A%22GetDetail%22%2C%22param%22%3A%7B%22topId%22%3A4%2C%22offset%22%3A0%2C%22num%22%3A20%2C%22period%22%3A%222019-07-11%22%7D%7D%2C%22comm%22%3A%7B%22ct%22%3A24%2C%22cv%22%3A0%7D%7D').then(data=>{
                  
                  dispatch({
                    type:GET_MUSIC_TOP,
                    payload:{
                        musicTopList:data.data.detail.data.songInfoList
                    }
                  })
                })
              })
        }
       
    }
}
export default connect(mapStateToProps,mapDispatchToProps)(Find)