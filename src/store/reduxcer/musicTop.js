import musicTopState from '../state/musicTop'
import {GET_MUSIC_TOP} from '../acitonType/musicTop'
function musicTopReduxcer(state = musicTopState,{type,payload}){
    state= JSON.parse(JSON.stringify(state))
    if(type===GET_MUSIC_TOP){
        state=payload.musicTopList
    }
    return state
}

export default musicTopReduxcer