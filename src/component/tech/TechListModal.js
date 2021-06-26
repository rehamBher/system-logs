import { defaults } from 'lodash';
import React,{useEffect, useState} from 'react';
import { connect } from 'react-redux';
import TechItem from './TechItem';
import { getTechs } from '../../redux/tech/TechAction';
const TechListModal =({tech:{loading, techs}, getTechs})=>{


  useEffect(()=>{
getTechs();
    // eslint-disable-next-line

  },[])
 
  return(
    <div id='tech-list-modal' className='modal'>
    <div className='modal-content'>
      <h4>Technician List</h4>
      <ul className='collection'>
      {!loading &&
        techs !== null &&
        techs.map(tech => <TechItem tech={tech} key={tech.id} />)}
      
      </ul>
    </div>
  </div>
  )
}

const mapStateToProps=(state)=>({
  tech:state.tech
})

export default connect(mapStateToProps, {getTechs})(TechListModal)