import React,{useState, useRef} from 'react';
import { connect } from 'react-redux';
import {searchLogs} from '../../redux/logs/LogsAction'

function SearchBar({searchLogs}){
//   let [text , setText] = useState('')
//   console.log(searchLogs)
// const onChangeHandler=(e)=>{
// e.preventDefault()
// searchLogs(text)
// }
const text = useRef('');

const onChange = e => {
  searchLogs(e.target.value.toLowerCase());
};
  return(
  <div>
  <nav className="blue">
  <div className="nav-wrapper" >
    <form  >
      <div className="input-field">
        <input id="search" type="search" required 
   
        onChange={onChange}
    
       />
        <label className="label-icon" htmlFor="search"><i className="material-icons">search</i></label>
        <i className="material-icons">close</i>
      </div>
    </form>
  </div>
</nav>
  </div>
  )
}

export default connect(null,{searchLogs})(SearchBar)