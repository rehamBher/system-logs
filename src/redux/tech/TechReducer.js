import { ADD_TECH, DELETE_TECH, GET_TECHS, SET_LOADING, TECHS_ERROR } from "../type"


const initialState={
  techs: [],
  loading: false,
  error: false

}

const TechReducer =(state=initialState, action)=>{
  switch(action.type){
    case GET_TECHS:
      return{
        ...state,
        techs:action.data,
        loading:false

      }
      case SET_LOADING:
        return{
          ...state, loading:true
        }
        case ADD_TECH:
          return{
            ...state,
            techs:[...state.techs, action.data],
            loading:false
          }
        case DELETE_TECH:
          return{
            ...state,
            techs:state.techs.filter(item=>item.id !== action.data),
            loading:false
          }
    case TECHS_ERROR:
      return{
        ...state,
  error:action.data
      }
    default:
      return state
  }

}

export default TechReducer