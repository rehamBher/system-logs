import { defaults } from 'lodash';
import React,{useEffect} from 'react';
import { connect } from 'react-redux';
import { deletTech } from '../../redux/tech/TechAction';
import M from 'materialize-css/dist/js/materialize.min.js';

const TechItem =({tech: { id, firstName, lastName }, deletTech})=>{
const onDelete=()=>{
  deletTech(id);
  M.toast({ html: 'Technician deleted' });

}

  return(
    <li className='collection-item'>
    <div>
      {firstName} {lastName}
      <a href='#!' className='secondary-content' onClick={onDelete}>
        <i className='material-icons grey-text'>delete</i>
      </a>
    </div>
  </li>
  )

}

export default connect(null, {deletTech}) (TechItem)