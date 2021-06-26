import { ADD_LOG, CLEAR_CURRENT, DELETE_LOG, GET_LOGS, LOGS_ERROR, SEARCH_LOGS, SET_CURRENT, SET_LOADING, UPDATE_LOG } from "../type"

const initialState={
  logs:[],
  error:false,
  loading:false,
  current:null
}

const LogsReducer =(state=initialState, action)=>{
  switch(action.type){
    case GET_LOGS:
      return{
        ...state,
        logs:action.data,
        loading:false
      }
case SEARCH_LOGS:
  return{
    ...state,
    logs:action.data
  }
      case LOGS_ERROR:
        return{
          ...state,
          error:action.data
        }
        case SET_CURRENT:
          return{
            ...state,
            current:action.data
          }
          case UPDATE_LOG:
            return{
              ...state,
              logs:state.logs.map(item=>item.id === action.data.id ? action.data:item)
            }
          case CLEAR_CURRENT:
            return{
              ...state,
              current:null
            }
        case ADD_LOG:{
          return{
            ...state,
            logs:[...state.logs, action.data],
            loading:false
          }
        }
      case DELETE_LOG:{
        return{
          ...state,
          logs:state.logs.filter(item=>item.id !== action.data)
        }
      }
    case SET_LOADING:
      return{
        ...state,
        loading:true
      }
    default:
      return state
  }

}

export default LogsReducer