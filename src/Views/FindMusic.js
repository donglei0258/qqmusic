import React from 'react'
import {
    withRouter
} from 'react-router-dom'
import {
    connect
} from 'react-redux'
import axios from 'axios'
class FindMusic extends React.Component{
    constructor(){
        super()
        this.state={
            _id:null,
            vkey:0
        }
    }
    render(){
        return(
            <div><audio></audio>1</div>
        )
    }
    componentWillMount(){
    //    this.props.getVeky()
        this.setState({
            _id:this.props.location.state.id,
            vkey:this.props.location.state.vkey
        })
        
    }
    componentDidMount(){
        this.props.getMusicInfo()
        // console.log(this.props.location.state.vkey,555)
    }
}
function mapStateToProps(state){
    return{

    }
}
function mapDispatchToProps(dispatch){
   
    return{
        //getVeky中无法获取到this.state
        // getVeky(){
        //     console.log(this.state)
        //     dispatch(()=>{
        //              axios.get('/base/fcgi-bin/fcg_music_express_mobile3.fcg?format=json205361747&platform=yqq&cid=205361747&songmid='+this.props.location.state.songMid+'&filename=C400'+this.props.location.state.songMid+'.m4a&guid=126548448')
        //     .then(data=>{
        //         this.setState({
        //             veky:data.data.items[0].veky
        //         })
        //         console.log(data.data.items[0].veky,123)
        //     })
        
        //     })
        // },
       
        //https://c.y.qq.com/base/fcgi-bin/fcg_music_express_mobile3.fcg?format=json205361747&platform=yqq&cid=205361747&songmid=003lghpv0jfFXG&filename=C400003lghpv0jfFXG.m4a&guid=126548448
        // http://ws.stream.qqmusic.qq.com/C400003lghpv0jfFXG.m4a?fromtag=0&guid=126548448&vkey=D661E5DF19B8FEB2FBFC554276746AC608AE98B0F30595B3B3BAD5C1C89ECCDD7BE599E306F786621856D22D6BD6B96F5DD344CF3814DB71
        getMusicInfo(){
          
            dispatch(()=>{
                axios.get('/find/base/fcgi-bin/fcg_music_express_mobile3.fcg?format=json205361747&platform=yqq&cid=205361747&songmid=00043AGU2NgsqI&filename=C40000043AGU2NgsqI.m4a&guid=126548448')
                .then(data=>{
                    // console.log(data,333)
                })
            })
        }
    }
}
export default connect(mapStateToProps,mapDispatchToProps)(withRouter(FindMusic))