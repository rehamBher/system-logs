import React ,{useState}from 'react';
import TechSelectOptions from '../tech/TechSelectOptions';
import M from 'materialize-css/dist/js/materialize.min.js';
import { connect } from 'react-redux';
import { addLogs } from '../../redux/logs/LogsAction';
const AddLogModal =({addLogs})=>{
  let [ message , setMessage] = useState('')
  let [tech, setTech] = useState('');
  let[attention, setAttention]= useState(false)
const handleSubmit=()=>{
  if(message==="" || tech===""){
    M.toast({ html: 'Please enter a message and tech' });

  }else{
 let newLogs ={
   message,
   attention,
   tech,
   date:new Date()
 }
    addLogs(newLogs)
    M.toast({html:`Log added by ${tech}`})
    setAttention('');
    setMessage('');
    setTech('')
  }


}
return(
  <div id='add-log-modal' className='modal' style={modalStyle}>
      <div className='modal-content'>
        <h4>Enter System Log</h4>
        <div className='row'>
          <div className='input-field'>
            <input
              type='text'
              name='message'
              value={message}
              onChange={(e)=>setMessage(e.target.value)}
           
            />
            <label htmlFor='message' className='active'>
              Log Message
            </label>
          </div>
        </div>

        <div className='row'>
          <div className='input-field'>
            <select
              name='tech'
       
              className='browser-default'
              value={tech}
              onChange={(e)=>setTech(e.target.value)}
           
            >
              <option value='' disabled>
                Select Technician
              </option>
            <TechSelectOptions/>
            </select>
          </div>
        </div>

        <div className='row'>
          <div className='input-field'>
            <p>
              <label>
                <input
                  type='checkbox'
                  className='filled-in'
                  value={attention}
                  checked={attention}
                  onChange={(e)=>setAttention(!attention)}
                
                />
                <span>Needs Attention</span>
              </label>
            </p>
          </div>
        </div>
      </div>
      <div className='modal-footer'>
        <a
          href='#!'
          className='modal-close waves-effect blue waves-light btn'
          onClick={handleSubmit}
        >
          Enter
        </a>
      </div>
    </div>
)

}

const modalStyle = {
  width: '75%',
  height: '75%'
};
export default connect(null,{addLogs})(AddLogModal)
