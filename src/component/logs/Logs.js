import React , {useState, useEffect} from 'react';
import { connect } from 'react-redux';
import LogItem from './LogItem';
import {getLogs} from '../../redux/logs/LogsAction'
function Logs({log:{loading,logs,error}  , getLogs}){

  useEffect(()=>{
getLogs() 
    // eslint-disable-next-line

  },[])


  if(loading || logs===null){
    return<h1>Loading</h1>
  }
  return(
    <ul className="collection with-header">
    <li className="collection-header">
    <h4 className="center">System Logs</h4></li>
    {!loading && logs.length===0?(<p className="center">No have data</p>):(
    logs.map(item=><LogItem key={item.id} log={item}/>)
    )}

  
      </ul>
  )

}


const mapStateToProps=(state)=>(
  {
    log:state.log
  }
)

export default connect(mapStateToProps,{getLogs})(Logs);