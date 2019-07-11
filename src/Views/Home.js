import React from 'react'
import {
    connect
} from 'react-redux'
import {
    withRouter
} from 'react-router-dom'
import axios from 'axios'
class Home extends React.Component{
    constructor(){
        super()
        this.state={
            findList:[],
            songMid:'',
            vkey:0
        }
    }
    
    render(){
        return(
            <div>
                <input type='text' ref='find' onChange={this.props.findMusic.bind(this)} ></input>
                {
                    this.state.findList.map((v,i)=>{
                        return(
                            <p key={v.id} id={v.id} onClick={(e)=>{
                                let id = e.target.id
                                let _this=this
                                console.log(_this,999)
                                this.setState({
                                    songMid:this.state.findList[i].mid
                                },()=>{
                                    //this.props.getVeky(this.state.songMid) 报错 this.serState不是函数，应该是this指向问题
                                    // this.props.getVeky.bind(this,this.state.songMid)  getVeky直接没有执行   
                                    this.props.getVeky(_this,this.state.songMid)
                                    
                                 
                                    this.props.history.push({
                                        pathname:'/FindMusic',
                                        state:{
                                            id,
                                            vkey:this.state.vkey
                                        }
                                    })
                                })
                                
                                
                                console.log(this.state.songMid)
                            }}>{v.name}  歌手:{v.singer[0].name} 专辑:{v.album.name}</p>
                        )
                    })
                }
            </div>
        )
    }
    componentDidMount(){
        
    }
}

function mapStateToProps(){
    return {

    }
}
function mapDispatchToProps(dispatch){
    
    return{
        getVeky(_this,songMid){
            console.log(_this.state)
            dispatch(()=>{
                     axios.get('/find/base/fcgi-bin/fcg_music_express_mobile3.fcg?format=json205361747&platform=yqq&cid=205361747&songmid='+songMid+'&filename=C400'+songMid+'.m4a&guid=126548448')
            .then(data=>{
                console.log(data.data.data.items[0].vkey,123)
                console.log(_this.state) 
            
                _this.setState({
                    vkey:data.data.data.items[0].veky
                })
                
            })
        
            })
        },
        findMusic(){
            console.log(this.state)
            dispatch(()=>{
                axios.get('/find/soso/fcgi-bin/client_search_cp?ct=24&qqmusic_ver=1298&new_json=1&remoteplace=txt.yqq.song&searchid=59911246194664616&t=0&aggr=1&cr=1&catZhida=1&lossless=0&flag_qc=0&p=1&n=10&w='+this.refs.find.value+'&g_tk=5381&loginUin=0&hostUin=0&format=json&inCharset=utf8&outCharset=utf-8&notice=0&platform=yqq.json&needNewCode=0')
                .then(data=>{
                    console.log(this.state,333)
                    this.setState({
                        findList:data.data.data.song.list
                    })
                    // console.log(data.data.data.song,123)
                    // console.log(this.state,444)
                })
            })
        }
    }
}
export default connect(mapStateToProps,mapDispatchToProps)(withRouter(Home))