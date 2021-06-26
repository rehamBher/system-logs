
// import React, { Fragment, useEffect } from 'react';
import React from 'react';
import { Fragment , useEffect} from 'react';
import SearchBar from './component/layout/SearchBar';
import 'materialize-css/dist/css/materialize.min.css';
import M from 'materialize-css/dist/js/materialize.min.js';
import AddBtn from './component/layout/AddBtn';
import Logs from './component/logs/Logs';
import AddLogModal from './component/logs/AddLogModal';
import EditLogModal from './component/logs/EdidLogModal';
import AddTechModal from './component/tech/AddTechModal';
import TechListModal from './component/tech/TechListModal';

const App=()=>{
    useEffect(() => {
    // Init Materialize JS
    M.AutoInit();
  });
  return (
    <Fragment>
    <SearchBar/>
    <div className="container">
   <AddBtn/>
   <AddLogModal/>
   <EditLogModal/>
   <AddTechModal/>
   <TechListModal/>
   <Logs/>
   </div>

   </Fragment>
  )
}
export default App