import React from 'react'
import { connect } from 'react-redux'
import {deleteLog, setCurrent} from '../../redux/logs/LogsAction'
import M from 'materialize-css/dist/js/materialize.min.js';

function LogItem({log, deleteLog, setCurrent}){

  const onDelete=()=>{
    deleteLog(log.id);
    M.toast({html:"you are delete"})

  }
return(
  <li className="collection-item">
  <div >
  <a href="#edit-log-modal" className={`modal-trigger ${log.attention?'red-text':'blue-text'}`}
  onClick={()=>setCurrent(log)}
  >{log.message}</a>
 <br/>
 <span className="grey-text">
 <span className="black-text">ID #{log.id}</span>last updated by {' '}
 
 <span className="black-text">{log.tech}</span>on {' '}

 <a href='#!' className='secondary-content' onClick={onDelete}>
          <i className='material-icons grey-text'>delete</i>
        </a>
 </span>
  </div>
  </li>
)
}

export default connect(null, {deleteLog, setCurrent})(LogItem)