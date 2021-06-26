import { ADD_TECH, DELETE_TECH, GET_TECHS, SET_LOADING, TECHS_ERROR } from "../type"


export const getTechs = () => async dispatch => {
  try {
    setLoading();

    const res = await fetch('/techs');
    const data = await res.json();

    dispatch({
      type: GET_TECHS,
      data: data
    });
  } catch (err) {
    dispatch({
      type: TECHS_ERROR,
      data:err.response.statusText
    });
  }
};

export const deletTech=(id)=>async(dispatch)=>{
  try{
    setLoading()
    await fetch(`/techs/${id}`,{
      method:"DELETE",
   
    })
    dispatch({
      type:DELETE_TECH,
      data:id
    })

  } catch (err) {
    dispatch({
      type: TECHS_ERROR,
      data:err.response.statusText
    });
  }
  
}

export const addTech =(tech)=>async(dispatch)=>{
  try{
    setLoading();
    let res = await fetch('/techs',{
      method:"POST",
      body:JSON.stringify(tech),
      headers:{
        "Content-Type":'application/json'  
      }
    })
    let data = await res.json();
    dispatch({
      type:ADD_TECH,
      data:data
    })

  }catch(err){
    dispatch({
      type: TECHS_ERROR,
      data:err.response.statusText
    }); 
  }
}

export const setLoading=()=>{
  return{
    type:SET_LOADING
  }
}