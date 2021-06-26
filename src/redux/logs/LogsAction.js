import { ADD_LOG, CLEAR_CURRENT, DELETE_LOG, GET_LOGS, LOGS_ERROR, SEARCH_LOGS, SET_CURRENT, SET_LOADING, UPDATE_LOG } from "../type"

export const getLogs =()=>async (dispatch)=>{
  try{
    setLoading();
    let res = await fetch('/logs');
    let data = await res.json();
    dispatch({
      type:GET_LOGS,
      data:data
    })

  }catch(err){
    dispatch({
      type:LOGS_ERROR,
      data:err.response.statusText
    })

  }
}

export const searchLogs =(text)=>async(dispatch)=>{
  try{
    let data = await fetch(`/logs?q=${text}`);
    let res = await data.json();
    dispatch({
      type:SEARCH_LOGS,
      data:res
    })

  }catch(err){
    dispatch({
      type:LOGS_ERROR,
      data:err.response.statusText
    }) 
  }
}

export const addLogs=(log)=>async (dispatch)=>{
try{
setLoading();
let res = await fetch('/logs',{
  method:"POST",
  body:JSON.stringify(log),
  headers:{
    "Content-Type":'application/json'
  }

})
let data = await res.json();
dispatch({
  type:ADD_LOG,
  data:data
})
}catch(err){
  dispatch({
    type:LOGS_ERROR,
    data:err.response.statusText
  }) 
}
}


export const deleteLog=(id)=>async(dispatch)=>{
try{

await fetch(`/logs/${id}`,{
  method:"DELETE"
})

  dispatch({
    type:DELETE_LOG,
    data:id
  })

}catch(err){
  dispatch({
    type:LOGS_ERROR,
    data:err.response.statusText
  }) 
}
}


export const updateLog=(log)=>async (dispatch)=>{
  try{
let res = await fetch(`/logs/${log.id}`,{
  method:"PUT",
  body:JSON.stringify(log),
  headers:{
    "Content-Type":'application/json'
  }
})
let data = await res.json();
dispatch({
  type:UPDATE_LOG,
  data:data
})
  }catch(err){
  dispatch({
    type:LOGS_ERROR,
    data:err.response.statusText
  }) 
}
}
export const setCurrent =(log)=>async (dispatch)=>{
  dispatch({
    type:SET_CURRENT,
    data:log
  })
}
export const clearCurrent =()=>dispatch=>{
  dispatch({
    type:CLEAR_CURRENT
  })
}
export const setLoading=()=>{
  return{
    type:SET_LOADING
  }
}